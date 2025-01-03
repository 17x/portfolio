import React, {useState} from 'react';
import Modal from "../modal";
import DemoSiteFrame from "../demoSiteFrame/demoSiteFrame";
import SimpleFeed from "./simple";
import ClusterFeed from "./cluster";

const Index = ({data, sectionTheme}: { data: TimelineNodeRecord[], sectionTheme?: string }) => {
  const [demo, setDemo] = useState<DemoLink>(null)
  const openModal = (e: MouseEvent, demo: DemoLink) => {
    e.preventDefault()
    setDemo(demo)
  }

  return (
    <div className="grid grid-cols-1 grid-flow-row gap-3">
      {
        data && data.map((item, idx: number) => {
          return <div key={idx}
                      className={'min-h-10 items-center flex rounded-md overflow-hidden p-4 border drop-shadow-md border-' + sectionTheme}
          >
            {item.type === 'simple' && <SimpleFeed data={item} onClick={(e, v: DemoLink) => openModal(e, v)} />}
            {/*{item.type === 'site' && <SiteFeed data={item} onClick={(e, v) => openModal(e, v)} />}*/}
            {item.type === 'cluster' && <ClusterFeed data={item} onClick={(e, v: DemoLink) => openModal(e, v)} />}
          </div>
        })
      }

      {demo &&
        <DemoSiteFrame demo={demo} onClose={() => setDemo(null)}/>
      }
    </div>
  )
};

export default Index;
