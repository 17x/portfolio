import bus from "./bus";
import {Throttle} from "./method";

const init = () => {
  window.addEventListener('scroll',
    Throttle(() => {
      bus.emit('scroll')
    }, 100)
  )

  window.addEventListener('scrollend',
    () => {
      bus.emit('scroll')
    }
  )
}

export default init