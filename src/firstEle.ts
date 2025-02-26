type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type Head1 = First<arr1>
type Head2 = First<arr2>
type Head3 = First<arr3>
export {
  Head1,
  Head2,
  Head3,

}
