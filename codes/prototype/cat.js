// 构造函数
function Cat(name) {
    this.catName = name;
}

var jetty = new Cat("jetty")
var hurry = new Cat("hurry")


// 普通函数
function foo(arg) {
    return arg
}


// 调试后的结论， 普通函数和构造函数是一样的， 都拥有prototype属性， 通过new 访问符可以 创建一个新对象，并把对象传进该构造函数 指向其prototype属性
