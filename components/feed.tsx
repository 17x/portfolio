import React, {useState} from 'react';
import {FeedNodeDataListItem} from "./type";
import Modal from "./modal";
import Link from "next/link";
import DOC_URL from "../global/";
import DemoSiteFrame from "./demoSiteFrame";

const Feed = ({list, sectionTheme}: { list: FeedNodeDataListItem[], sectionTheme?: string }) => {
  const [modalLink, setModalLink] = useState('')
  const openModal = (e, link) => {
    e.preventDefault()
    setModalLink(link)
  }

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-3">
      {
        list && list.map(({link, linkText, img, content, title, stacks}, idx: number) => {
          const linkList = !link ? [] : link instanceof Array ? link : [link]

          return (
            <div key={idx}
                 className={'min-h-10 items-center flex rounded-md overflow-hidden p-4 border drop-shadow-md border-' + sectionTheme}
            >
              {
                /*img*/
                img &&
                <div className={'mr-2 w-20 h-20 content-center'}>
                  <img className={'inline-block object-contain'}
                       src={img.src}
                       alt="" />
                </div>
              }
              <div className={'content-center text-sm flex-1 ' + (img ? '' : 'content-center')}>
                <p className="break-words text-neutral-800 first-letter:text-2xl">{content}</p>

                {/*Skill stack*/}
                {stacks && <div className={'mt-5 italic text-xs text-neutral-500'}>{stacks}</div>}

                <div className={'mt-1 text-sm flex flex-wrap'}>
                  {
                    linkList.map((value, index) => {
                      // console.log(value, DOC_URL)
                      value = value.indexOf('.') != -1 ? value : DOC_URL + value
                      return (
                        <Link href={value}
                              onClick={(e) => openModal(e, value)}
                              key={index}
                              target={'_blank'}
                              className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{linkText || 'demo'}</Link>
                      );
                    })
                  }
                </div>

              </div>
            </div>
          );
        })
      }
      {modalLink && <Modal onClose={() => setModalLink('')}>
        <DemoSiteFrame src={modalLink} media={'s'} />
      </Modal>}
    </div>
  )
};

export default Feed;
