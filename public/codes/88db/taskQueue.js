/*
任務列表
控制每個任務之間的間隔

const t1 = new TaskQueue()

t1.addTask(Function,Function)
t1.start()

*/

class TaskQueue {
    tasks = []
    taskInterval = 0
    taskIndex = 0
    currTaskStartTimestamp = null
    delayTimer = null
    status = 'uninitialized'

    constructor({taskInterval = 5000, tasks = []} = {}) {
        this.tasks = tasks
        this.taskInterval = taskInterval
    }

    addTask(func, cb, final) {
        this.tasks.push({func, cb, final})
        // console.log('添加任務', this.status, this.delayTimer, this.taskIndex)
        if (this.status === 'uninitialized') {
            this.start()
        } else if (this.status === 'stopped' && !this.delayTimer) {
            // console.log(this.status, this.taskIndex, this.tasks.length, this.delayTimer)

            // console.log(this.status)
            this.optionalStartInterval()
        }
    }

    async start() {
        const {taskIndex, tasks, delayTimer} = this

        this.status = 'running'
        // console.log(delayTimer, tasks.length, taskIndex)
        // 正在等待任務間隔
        if (delayTimer) {
            console.warn('Waiting for task\'s interval')
            return
        }

        // 任務不存在
        if (!tasks[taskIndex]) {
            console.warn('Task not existing')
            return
        }

        this.currTaskStartTimestamp = Date.now()

        // 嘗試開啟一條任務
        const {func, cb, final} = tasks[taskIndex]

        try {
            const resp = await func()

            cb && cb(resp)
        } catch (e) {
            console.error('Task error, ready for next one.')
        } finally {
            final && final()

            this.taskIndex++

            // 檢測下一個
            if (tasks[this.taskIndex]) {
                this.optionalStartInterval()
            } else {
                this.status = 'stopped'
            }

        }
    }

    optionalStartInterval() {
        // console.log('optionalStartInterval')
        let now = Date.now()
        let diff = now - this.currTaskStartTimestamp - this.taskInterval
        // debugger
        // 等待間隔開啟
        if (diff < 0) {
            console.log('兩次任務間隔小於指定休息時間,開始等待')
            // console.log(diff)
            this.delayTimer = setTimeout(() => {
                this.delayTimer = null
                this.start()
            }, Math.abs(diff))

            return false
        } else {
            this.start()

            return true
        }

    }

    destroy() {
        this.tasks = []
        clearTimeout(this.delayTimer)
    }
}

export default TaskQueue

