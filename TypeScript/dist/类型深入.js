// 联合类型用 | 
function css(ele, attr, value) {
}
let box = document.querySelector('.box');
if (box) {
    css(box, 'width', '100px');
    css(box, 'opacity', 1);
}
let obj11 = {
    x: 1,
    y: '2'
};
let obj22 = {
    z: 1122
};
let obj3 = Object.assign({}, obj11, obj22);
obj3.x;
let obj4 = Object.assign({}, obj11, obj22);
function setPosition(ele, direction) {
}
let box1 = document.querySelector('.box');
if (box1) {
    setPosition(box1, 'bottom');
}
// -----------------------------------
// 类型推到
let ann = 1; // ann虽然没有写类型，ts已经推到出是number了，之后不能赋值其他类型的值了
// ann = '3'错误的
// -----------------------------------
// let img = document.querySelector('.boximg');  //这里没有用类型断言，不能准确的知道
//当前元素就是img，所以下面的img属性src是点不出来的
let img = document.querySelector('.boximg'); //这里断言为img标签，那么下面的
//属性都可以出来了
// 还要另外一种断言方式
let img1 = document.querySelector('.boximg');
// 以上两种方式都把.boximg断言为一个htmlimg标签，就可以随意访问下面的属性了
if (img1) {
    img1.src;
}
if (img) {
    img.src;
}
// ----------------------------------------------
let colorss = {
    color1: 'red',
    color2: 'blue'
};
let aa22 = typeof colorss;
console.log(aa22);
// ts中的type 可以抽取typeof对应的类型，typeof后面紧跟的是值，得出值的类型
let data5 = {
    color1: '1',
    color2: '2'
};
function geta(k) {
}
geta('gender'); // 这里只能穿name和gender，因为在a中先定了类型
let pp1 = {
    name: 'alice',
    gender: 'girl'
};
function getPP(k) {
    return pp1[k];
}
getPP('name');
let t1 = {
    x: 1,
    y: '2',
    z: '3'
};
function fn1(args) {
}
fn1({ x: 1, y: 3, s: 'wirt' });
//泛型  只要传进去的参数继承了oo1就可以
// --------------------------------------
function toUp(str) {
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
        str.push();
    }
    else {
        str.toUpperCase();
    }
}
//---------------------------------
// 自定义类型保护
function canEach(data) {
    return data.forEach !== undefined;
}
let ele3 = document.querySelectorAll('.box');
fn33(ele3);
function fn33(elements) {
    if (canEach(elements)) {
        elements.forEach(() => { });
    }
    else {
        elements.classList.add('.box');
    }
}
