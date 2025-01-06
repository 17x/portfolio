import {useEffect, useRef, useState} from "react";
import bus from "../../global/bus";

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const LazyLoad: React.FC<Props> = ({children}) => {
  const [loaded, setLoaded] = useState(false)
  const iRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => {
      if (loaded || !iRef.current) return
      const b = iRef.current.getBoundingClientRect().bottom

      if (b < window.innerHeight) {
        bus.off('scroll', check);
        setLoaded(true)
      }
    }

    bus.on('scroll', check);

    return () => {
      bus.off('scroll', check);
    }
  }, []);

  return (
    loaded ? children : <b ref={iRef} style={{width: 0, height: 0}} />
  )
};

export default LazyLoad;
