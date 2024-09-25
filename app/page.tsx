'use client';

import {useEffect, useState} from "react";
import Feeds from "../components/feeds";

const Page = () => {
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    async function getData() {
      const {data: nodeList} = await import('../nodes/index')
      setFeeds(nodeList)
    }

    getData()

  }, []);

  return <div className={'w-3/4 mx-auto'}>
    <Feeds feeds={feeds} />
  </div>
}

export default Page
