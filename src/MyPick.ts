module.exports = []
interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
export type TodoPreview = MyPick<Todo, 'title' | 'completed'>
