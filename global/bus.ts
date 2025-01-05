class Bus {
  private eventList: { [key: string]: Function[] } = {}

  constructor() {

  }

  on(eventName: string, callback: Function): void {
    const {eventList} = this

    if (!eventList.hasOwnProperty(eventName)) {
      eventList[eventName] = []
    }

    eventList[eventName].push(callback)
  }

  off(eventName: string, callback: Function): void {
    const {eventList} = this
    // console.log(eventList)
    if (eventList.hasOwnProperty(eventName)) {
      const _i = eventList[eventName].indexOf(callback)

      if (_i > -1) {
        eventList[eventName].splice(_i, 1)
        console.log(eventList[eventName])
      }
    } else {
      console.warn('Cannot find event name', eventName)
    }

    console.log(this)
  }

  emit(eventName: string, arg?: any): void {
    const {eventList} = this
    const arr = eventList[eventName] || []
    const len = arr.length - 1;
    // console.log(eventName, arg)
    if (arr.length === 0) return

    for (let i = len; i >= 0; --i) {
      arr[i](arg);
    }
  }

  destroy(): void {
    this.eventList = null
  }
}

const bus = new Bus()
export default bus