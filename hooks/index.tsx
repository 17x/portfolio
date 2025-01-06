import {useEffect} from 'react';
import bus from "../global/bus";
import init from "../global/events";

let initialized = false

export const useGlobalEvent = (eventName: string, callback: (event: Event) => void, stopTag = false) => {
  useEffect(() => {
    if (!initialized) {
      init()
    }

    /**
     * stopTag: for stop subscribe again
     */
    if (!stopTag) {
      bus.on(eventName, callback);

      return () => {
        bus.off(eventName, callback);
      };
    }
  }, [eventName, callback]);
};