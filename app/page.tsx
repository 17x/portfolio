'use client';

import {useEffect, useState} from "react";
import TimelineNodes from "../components/timelineNodes";
import data from "../public/data/timeline";
import init from "../global/events";
import Modal from "../components/modal";

const _key = 'CV_tips_closed_by_click_v1'

const Page = () => {
  const [feeds, setFeeds] = useState([])
  const [showTips, setShowTips] = useState(false)

  const determineShowTips = () => {
    if (!localStorage) return
    const v = localStorage.getItem(_key)

    if (v) {
      return
    }

    setShowTips(true)
  }

  const setShowTipsToLocalStorage = () => {
    setShowTips(false)
    localStorage && localStorage.setItem(_key, 'true')
  }


  useEffect(() => {
    init()
    determineShowTips()

    async function getData() {
      // const nodeList: TimelineNode[] = await (await fetch('data/timeline/index.json')).json()
      setFeeds(data)
    }

    getData()
  }, []);

  return <div className={'w-5/6 mx-auto my-20'}>
    <TimelineNodes feeds={feeds} />
    {
      showTips &&
      <Modal onClose={setShowTipsToLocalStorage}>
        <div className={'w-[50vw] sm:w-[33vw] overflow-hidden p-4'}>
          <h1 className={'text-center mb-2'}>Tips</h1>
          <p className={'text-sm  mb-2'}>Some samples are designed specifically for mobile or desktop, Accessing this
            site
            from a desktop is
            recommended for a better experience.
          </p>
          <button onClick={setShowTipsToLocalStorage}
                  className={'block my-0 mx-auto border px-2 py-1 text-sm rounded bg-sky-800 text-white active:bg-sky-600'}>Close
          </button>
        </div>
      </Modal>
    }
  </div>
}

export default Page
