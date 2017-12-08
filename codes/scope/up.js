
foo();

console.log(a);

var a = function foo() { // 注意：这不是一个函数声明。 而变量a会被提升(但未赋值)
    console.log("不是声明");
}


function foo() {  // 这才是函数声明形式 ， 会被提升。
    console.log("foo");
}

function foo() {   // 同名的后面的函数声明会覆盖前面的声明， 就像变量一样。
    console.log("foo2")
}

// 输出
/**
 *  foo2
 *  undefined
 */
