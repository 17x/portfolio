import Bus from "./bus";

window.addEventListener('scroll', function (event) {
  Bus.emit('scroll', event)
})

type Callback = (off: (any?) => void, ...args: any[]) => void
type ScrollType = (cb: Callback) => void

const Scroll: ScrollType = callback => {
  const mid = (...arg) => {
    callback(
      () => Bus.off('scroll', mid),
      ...arg
    )
  }

  Bus.on('scroll', mid)
  console.log(Bus)
}

export {Scroll};