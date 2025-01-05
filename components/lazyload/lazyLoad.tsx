import {useEffect, useRef, useState} from "react";
import {Scroll} from "../../global/events";

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const LazyLoad: React.FC<Props> = ({children}) => {
  const [loaded, setLoaded] = useState(false)
  const iRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!loaded) {
      Scroll(off => {
        const b = iRef.current.getBoundingClientRect().bottom

        if (b < window.innerHeight) {
          off()
          setLoaded(true)
        }
      })
    }
  }, [])

  return (
    loaded ? children : <i ref={iRef} style={{width: 0, height: 0}} />
  )
};

export default LazyLoad;
