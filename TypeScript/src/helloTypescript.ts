let str1: string = '开课吧'
console.log(str1)
console.log(1234567890)
var data = {
    a: 1,
    b: 2,
}
let abc1 = {
    key1: 'value1',
    key2: 'nihao'
}
let study2 = {
    value1: '今天学习ts',
    value2: '好好学习，天天向上',
    value3: 'enen',
    value4: '刚刚把配置文件移动了',
    value5: '移动了位置目录就要变化'
}
// let ele1 = document.querySelector('.box')
// if (ele) {
//     ele1.id
// }
let obj1: object = {
    x: 1,
    y: 2
}
// obj1.x  //在这里扩展出来的属性会出错
obj1.toString() //本身自带的属性和方法不会报错

let obj2: { x: number, y: number } = {
    x: 1,
    y: 2
}
obj2.x;//这里不会报错了，
let hhh: string = 'enennen123'
let hhh1: string = '放在与src平级的情况下不会报红线'

// 数组类型
let arr1: string[] = []
arr1.push('123')
// arr1.push(111)爆粗了，只能push进去字符串
let arr2: Array<number> = []
arr2.push(222)
// arr2.push('33')错误

// -------------------------------
// ！元组类型
let data1: [number, string, boolean] = [1, '1', true]
// 使用元组，类型必须一一对应，并且不能超过预设的长度，否则就会报错
data1.push(false)
data1.push('34')
// data1.push([1,2])//报错，元组类型后续添加的数据必须是先前标注的类型之一
// console.log(data1)
//------------------------------------

let data2: [string, number] = ['1', 2];
data2.push(10)
console.log('data2', data2)
//如果在config.json里面设置"strictNullChecks": false，
//以上代码不报错，设置成true就会报错，严格来说必须设置true，不然js执行的时候会有错误

//-------------------------------------
enum HTTP_CODE {
    ok = 200,
    no = 'failed'
}
HTTP_CODE.ok
// 枚举中key值不用引号，不能为数字，中间用等号连接
enum TEST_ENUM {
    aa = 100,
    bb,
    cc
}
console.log(TEST_ENUM.bb) // 101
//在枚举值种如果省略值，那么他的值就是紧随他的前面哪个值加1
//-------------------------------


//代码编写过程中可能会出现隐式的any类型
function fn(a: any) {
    a.index()
}
//以上代码a就是隐式的any类型
//--------------------------------
let data101: unknown;
//--------------------------------
function getpage(x: number, y: number): number {
    return x + y
}
let page1: number = getpage(1, 3)
//---------------------------------
interface Point {
    x: number;
    y: number;
    color?: string;// 加上？ 表示该接口的这个属性是可选属性
    readonly z: string;
    [prop:number]: boolean
}
let p1: Point = {
    x: 1,
    y: 222,
    color: 'red',
    z: '我是只读属性',
    1: false
}
// p1.z = 'hhh' //只读属性不能重新赋值
console.log(p1.z)
// -----------------------------
//索引签名参数类型必须为string或者number之一，两者也可同时出现
interface Point100 {
    [prop1: string]: string;
    [prop2: number] : string
}
// 当同时出现数字类型和字符串类型索引的时候，
// 数字类型的值必须是字符串类型的值类型或者子类型
interface Point200 {
    [prop1: string]: string;
    [prop2: number]: string; // 正确
}
interface Point201 {
    [prop1: string]: string;
    // [prop2: number]: number;// 报错
}
let pp201:Point201 = {
    x: '100',
    1: '1'
}
// pp201[1]这里访问的值是‘1’
interface Point202 {
    [prop1: string]: Object;
    [prop2: number]: Date;// 正确
}