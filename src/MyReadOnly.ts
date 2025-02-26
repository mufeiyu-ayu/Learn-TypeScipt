interface Todo {
  title: string
  description: string
}

type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}
const todo: MyReadOnly<Todo> = {
  title: 'hey',
  description: 'foobar',
}

console.log(todo)
