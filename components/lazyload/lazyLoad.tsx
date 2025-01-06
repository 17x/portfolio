import {useEffect, useRef, useState} from "react";
import {useGlobalEvent} from "../../hooks";

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const LazyLoad: React.FC<Props> = ({children}) => {
  const [loaded, setLoaded] = useState(false)
  const iRef = useRef<HTMLElement>(null);

  useGlobalEvent('scroll', () => {
    if (loaded) return

    const b = iRef.current.getBoundingClientRect().bottom

    if (b < window.innerHeight) {
      setLoaded(true)
    }
  }, loaded)

  return (
    loaded ? children : <b ref={iRef} style={{width: 0, height: 0}} />
  )
};

export default LazyLoad;
