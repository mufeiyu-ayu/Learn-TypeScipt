interface Foo {
    name: string;
    sex: number;
    age: number;
}
type A = {
    [Prop in keyof Foo]?: Foo[Prop] extends string ? string : number;
};
declare const obj: A;
