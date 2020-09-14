// 联合类型用 | 
function css(ele: Element, attr: string, value: string | number) {

}
let box = document.querySelector('.box')
if (box) {
    css(box, 'width', '100px')
    css(box, 'opacity', 1)
}
//----------------------------------------------
// 交叉类型 &
interface o1 {
    x: number;
    y: string;
}
interface o2 {
    z: number
}
let obj11: o1 = {
    x: 1,
    y: '2'
}
let obj22: o2 = {
    z: 1122
}
let obj3: o1 & o2 = Object.assign({}, obj11, obj22);
obj3.x;
type o3 = o1 & o2
let obj4: o3 = Object.assign({}, obj11, obj22)
// ------------------------------------
// 对象类型可以用接口，非对象类型可以用类型别名 type
type dir = 'left' | 'top' | 'right' | 'bottom' | 'center'
function setPosition(ele: Element, direction: dir) {

}
let box1 = document.querySelector('.box')
if (box1) {
    setPosition(box1, 'bottom')
}
// -----------------------------------
// 类型推到
let ann = 1 // ann虽然没有写类型，ts已经推到出是number了，之后不能赋值其他类型的值了
// ann = '3'错误的
// -----------------------------------
// let img = document.querySelector('.boximg');  //这里没有用类型断言，不能准确的知道
//当前元素就是img，所以下面的img属性src是点不出来的
let img = document.querySelector('.boximg') as HTMLImageElement;//这里断言为img标签，那么下面的
//属性都可以出来了

// 还要另外一种断言方式
let img1 = <HTMLImageElement>document.querySelector('.boximg')
// 以上两种方式都把.boximg断言为一个htmlimg标签，就可以随意访问下面的属性了
if (img1) {
    img1.src
}
if (img) {
    img.src
}
// ----------------------------------------------

let colorss = {
    color1: 'red',
    color2: 'blue'
}
let aa22 = typeof colorss
console.log(aa22)
type bb22 = typeof colorss
// ts中的type 可以抽取typeof对应的类型，typeof后面紧跟的是值，得出值的类型
let data5: bb22 = {
    color1: '1',
    color2: '2'
}
// ------------------------------
interface Person {
    name: string;
    gender: string

}
type a = keyof Person // keyof 后面紧跟的是类型，罗列出类型
function geta(k: a) {

}
geta('gender') // 这里只能穿name和gender，因为在a中先定了类型
let pp1 = {
    name: 'alice',
    gender: 'girl'
}
type pptype = keyof (typeof pp1)
function getPP(k: pptype) {
    return pp1[k]
}
getPP('name')
// -----------------------------------
//in操作符
interface po1 {
    name: string,
    score: number
}
type po1type = keyof po1
type po2 = {
    [k in po1type]: string // in后面只能是string、number、symbol
}
// -------------------------------------
interface ty1 {
    x: number;
    y: string
}
interface ty2 extends ty1 {
    z: string
}
let t1: ty2 = {
    x: 1,
    y: '2',
    z: '3'
}
// ----------------------------------------
type oo1 = {
    x: number,
    y: number
}
function fn1<T extends oo1>(args: T) {

}
fn1({ x: 1, y: 3, s: 'wirt' });
//泛型  只要传进去的参数继承了oo1就可以
// --------------------------------------
function toUp(str: string | string[]) {
    // if((<string>str).toUpperCase) {
    //     return (<string>str).toUpperCase()
    // }else {
    //     return (<string[]>str).push()
    // }
    //以上的断言在判断条件下断言了，在操作的时候还是要断言，
    //下面的方式就可以不用断言，typeof对操作也有影响，属于类型保护措施
    // if(typeof str === 'string') {
    //     str.toUpperCase()
    // }else {
    //     str.push()
    // }
    // instanceof 跟typeof一样也具备类型保护机制
    if (str instanceof Array) {
        str.push()
    } else {
        str.toUpperCase()
    }
}
//---------------------------------
// 自定义类型保护
function canEach(data: Element[] | NodeList | Element):
    data is Element[] | NodeList {
    return (<NodeList>data).forEach !== undefined
}
let ele3 = document.querySelectorAll('.box')
fn33(ele3)
function fn33(elements: Element[] | NodeList | Element) {
    if (canEach(elements)) {
        elements.forEach(() => { })
    } else {
        elements.classList.add('.box')
    }
}
