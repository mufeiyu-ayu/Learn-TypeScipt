"use strict";
// const v: unknown = 123
// let b = 234
// // b = v
// if (typeof v === 'number') {
//   b = v
//   // console.log(b, v)
// }
// const a: Record<string, number> = { c: 2 }
// delete a.c
// const x = 'https'
// // y 的类型是 string
// const y: string = x
// console.log(y)
// const a: 1 | 2 | 3 | 4 | 3 = 1
// console.log(a)
// type A = '1' | '2' | 3
// const a: A = '1'
// type Res = typeof a
// const b: Res = '1'
// console.log(b, a)
// let a = 1
// let b: typeof a
// if (typeof a === 'number') {
//   b = a
//   console.log(b)
// }
// function hello(x: string): number {
//   console.log(x)
//   return 1
// }
// hello('121')
// class Animal {
//   numLegs: number = 4
// }
// type AnimalConstructor = new () => Animal
// function create(c: AnimalConstructor): Animal {
//   return new c()
// }
// const a = create(Animal)
// const man = new Man()
// const obj: Record<number, string> = {
//   1: 'a',
// }
// console.log(obj)
// class Color {
//   readonly name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }
// const green = new Color('green', 22)
// green.age = 22
// console.log(green.name)
// interface A {
//   get: (name: string) => boolean
// }
// class B implements A {
//   get(s) { // s 的类型是 any
//     return true
//   }
// }
// interface A {
//   a: number
//   b?: number
// }
// class C implements A {
//   a = 1
//   b = 2
// }
// const b = new C()
// console.log(b.a)
// b.b = 33
// class Point {
//   x: number
//   y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
// }
// class Point2 {
//   x: number
//   y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
// }
// type A = typeof Point
// type B = typeof Point2
// function createPoint(
//   PointClass: B,
//   x: number,
//   y: number,
// ) {
//   return new PointClass(x, y)
// }
// createPoint(Point2, 1, 2)
// interface Params {
//   name: string
//   age: string
//   sex: number
// }
// function fn(res: Params) {
//   return res.age
// }
// fn({
//   name: '1',
//   age: '2',
//   sex: 3 + 1,
// })
// const a = <T extends number>(a: T, b: T): T => (a + b) as T
// a<2 | 4>(2, 4)
// const obj = {
//   name: 'mike',
//   age: 22,
//   sex: 1,
//   hobby: 'eat',
// }
// interface Obj  {
//   name: string
//   age: number
//   sex: number
// }
// type KeySet = keyof Obj
// function fn(obj: Record<T extends,  any>) {
//   console.log(obj.sex)
//   return obj
// }
// fn(obj)
// let s = 'JavaScript' as const
// type Lang =
//   'JavaScript'
//   | 'TypeScript'
//   | 'Python'
// function setLang(language: Lang) {
//   console.log(language)
//   language = 'Python'
//   /* ... */
// }
// // setLang(s) // 报错
// // console.log(s)
// let s1 = 'JavaScript' as const
// setLang(s1)
// const root = document.getElementById('root')!
// // 报错
// root.addEventListener('click', (e) => {
//   /* ... */
// })
// Utils.isString('no') // 报错
module.exports = {};
