'use client';

import {useEffect, useState} from "react";

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const {data: {nodeList}} = await import('../nodes')
      setData(nodeList)
    }

    getData()

  }, []);

  return <div id="steps">
    <div>{
      data.map((item, idx) => (
        <div key={idx} className="step">
          <div className="left">
            <div className="decor"></div>
          </div>
          <div className="right">
            <h1 className="date text-3xl">{item.date}</h1>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))
    }
    </div>
  </div>
}

export default Page
