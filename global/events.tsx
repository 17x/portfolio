import bus from "./bus";

const init = () => {
  window.addEventListener('scrollend',
    () => {
      bus.emit('scroll')
    }
  )
}

export default init