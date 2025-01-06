import bus from "./bus";
import {Throttle} from "./method";

const init = () => {
  window.addEventListener('scroll',
    Throttle(() => {
      bus.emit('scroll')
    }, 200)
  )
}

export default init