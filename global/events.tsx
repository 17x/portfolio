import bus from "./bus";
import {Throttle} from "./method";

const init = (env: Window) => {
  if (!env) return

  env.addEventListener('scroll',
    Throttle(() => {
      bus.emit('scroll')
    }, 17)
  )
}

export default init