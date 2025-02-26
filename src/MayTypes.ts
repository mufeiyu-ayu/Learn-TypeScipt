interface StringToNumber {
  mapFrom: string
  mapTo: number
}

interface StringToDate {
  mapFrom: string
  mapTo: Date
}
// MapTypes<T,R> 将对象 t 中类型转化为类型 R 定义的不同类型，
// MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }

type MayTypes<T, R extends { mapFrom: any, mapTo: any }> = {
  [K in keyof T]: T[K] extends R['mapFrom'] ? R['mapTo'] : T[K]
}

/* @description 迪玛希 */
type A = MayTypes<Record<string, string>, StringToNumber | StringToDate>

const obj: A = {
  a: new Date(),
  b: 2,
}

console.log(obj)
