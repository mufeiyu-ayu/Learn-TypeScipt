const tuple = ['testla', 'model 3', 'model x', 'model y'] as const

type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}
type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
export { result, tuple }
