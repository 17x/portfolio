import {useEffect, useState} from "react";
import TimelineNodes from "../../components/timelineNodes";
import data from "../../public/data/timeline";
import init from "../../global/events";
import Modal from "../../components/modal";

const localStorageKey = 'CV_tips_closed_by_click_v1';

export const HomePage = () => {
  const [feeds, setFeeds] = useState<TimelineNode[]>([]);
  const [showTips, setShowTips] = useState(false);

  const determineShowTips = () => {
    if (!window.localStorage) {
      return;
    }

    const value = window.localStorage.getItem(localStorageKey);

    if (!value) {
      setShowTips(true);
    }
  };

  const setShowTipsToLocalStorage = () => {
    setShowTips(false);
    window.localStorage?.setItem(localStorageKey, 'true');
  };

  useEffect(() => {
    init();
    determineShowTips();
    setFeeds(data);
  }, []);

  return <div className={'w-5/6 mx-auto my-20'}>
    <TimelineNodes feeds={feeds} />
    {showTips ? (
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
    ) : null}
  </div>;
};
