type Callback = (any) => void;

class Bus {
  private static instance: Bus = new Bus()
  private callbacks: Record<string, Set<Callback>> = {};

  private constructor() {
  }

  public static getInstance(): Bus {
    if (!this.instance) {
      this.instance = new Bus();
    }

    return this.instance;
  }

  on(eventName: string, callback: Callback): void {
    if (!this.callbacks[eventName]) {
      this.callbacks[eventName] = new Set();
    }
    this.callbacks[eventName].add(callback);
  }

  off(eventName: string, callback: Callback): void {
    if (this.callbacks[eventName]) {
      this.callbacks[eventName].delete(callback);

      if (this.callbacks[eventName].size === 0) {
        delete this.callbacks[eventName];
      }
    }
  }

  emit(eventName: string, args?: any[]): void {
    this.callbacks[eventName]?.forEach((callback) => callback(args));
  }

  destroy(): void {
    for (const key in this.callbacks) {
      this.callbacks[key].clear()
      delete this.callbacks[key];
    }
  }
}

const bus = Bus.getInstance()
export default bus