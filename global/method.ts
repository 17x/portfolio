export const Throttle = (fn: Function, threshold = 1000) => {
  let timer: number | null;
  let _last = false;

  return (e) => {
    if (!_last) {
      _last = true;

      fn(e);

      timer = window.setTimeout(() => {
        // reset
        _last = null;
      }, threshold);
    }
  };
};