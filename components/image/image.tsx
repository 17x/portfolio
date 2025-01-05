import {useEffect, useRef, useState} from "react";
import {Scroll} from "../../global/events";

type Props = {
  lazy?: boolean
  src?: string
} & React.HTMLProps<HTMLImageElement>;

const Image: React.FC<Props> = ({lazy = false, src, ...rest}: Props) => {
  const [loaded, setLoaded] = useState(!lazy)
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (lazy && !loaded) {
      Scroll(off => {
        const b = imgRef.current.getBoundingClientRect().bottom

        if (b < window.innerHeight) {
          off()
          setLoaded(true)
        }
      })
    }
  }, [])

  return (
    <img ref={imgRef} src={loaded ? src : ''} {...rest} alt={src} />
  );
};
export default Image;
