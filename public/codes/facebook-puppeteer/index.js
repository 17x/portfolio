import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {error, log} from "./utils/log.js";
import _global from "./common/_global.js";
import search from "./search.js";
import puppeteer from 'puppeteer';
import TaskQueue2 from "./utils/taskQueue2.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist')
const configFilePath = path.join(distDir, 'config.json')
const keywordOriginPath = path.join(distDir, 'keywords.txt')
const currentOutputDir = path.join(distDir, 'keywords')

/*
* 讀取關鍵字列表
* 讀取最前面的未完成的關鍵字任務 index
* 開始 search
* */
const start = async () => {
    let keywords

    // generate config.json
    try {
        keywords = JSON.parse(fs.readFileSync(configFilePath, {encoding: 'utf-8'}))
    } catch (e) {
        let keyTxt = fs.readFileSync(keywordOriginPath, {encoding: 'utf-8'})
        let writeData = []

        keyTxt.split('\n').map(str => {
            let name = str.trim()

            if (name) {
                writeData.push(
                    {
                        name,
                        finished: false
                    }
                )
            }

        })

        fs.writeFileSync(configFilePath, JSON.stringify(writeData))
    }


    try {
        keywords = JSON.parse(fs.readFileSync(configFilePath, {encoding: 'utf-8'}))

        const taskQueue = new TaskQueue2({gap: _global.defaultInterval})
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        let filteredKeywords = keywords.reduce((previousValue, currentValue, currentIndex, array) => {
            !currentValue.finished && previousValue.push({...currentValue, currentIndex})

            return previousValue
        }, [])

        if (!fs.existsSync(currentOutputDir)) {
            fs.mkdirSync(currentOutputDir)
        }

        if (filteredKeywords.length === 0) {
            log('沒有需要繼續的任務')
        }

        await Promise.all(filteredKeywords.map(async (item, index) => {
                let {failed, data, e} = await taskQueue(async () => await search(item.name, currentOutputDir, page))

                if (failed) {
                    console.log('keyword ', item.name, ' 失敗', e)
                } else {
                    console.log('keyword ', item.name, ' 完成')
                    keywords[item.currentIndex].finished = true
                    saveConfigFile(keywords)
                }

                console.log(item.currentIndex, keywords.length)

                if (item.currentIndex === keywords.length - 1) {
                    log('全部 keyword 完成')
                    // process.exit()
                }
            })
        )
    } catch (err) {
        error(err)
    }
}

const saveConfigFile = (data) => {
    const fileName = path.resolve(distDir, 'config.json')

    fs.writeFileSync(fileName, JSON.stringify(data))
}

start()
