'use client';

import {useEffect, useState} from "react";

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const {data: {nodeList}} = await import('../nodes')
      console.log(9)
      setData(data)
    }

    getData()

  }, []);

  return <div>{
    data.map((item) => (
      <div className="step">
        <div className="left">
          <div className="decor"></div>
        </div>
        <div className="right">
          <h1 className="date">{item.date}</h1>
          <h3>{item.title}</h3>
        </div>
      </div>
    ))
  }</div>
}

export default Page
