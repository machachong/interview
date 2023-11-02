class BeObserverd {
  constructor() {
      // 记录观察者的数组
      this.observerList = []
  }
  addObserver(observer) {
      // 加入观察者数组
      this.observerList.push(observer);
  }
  notify(...args) {
      // 通知观察者
      for (let i = 0; i < this.observerList.length; i++) {
          this.observerList[i].update(...args);
      }
  }
}
// 观察者类
class Observer {
    constructor() {
        // 观察后执行行为的函数数组
        this.todo = []
    }
    addTodo(todo) {
        this.todo.push(todo);
    }
    update(...args) {
        for (let i = 0; i < this.todo.length; i++) {
            this.todo[i](...args);
        }
    }
}
// 观察者模式示例
const beObserverd = new BeObserverd();
const observer = new Observer();
observer.addTodo((name) => console.log('say hi! ' + name));
beObserverd.addObserver(observer);
beObserverd.notify('Tom');