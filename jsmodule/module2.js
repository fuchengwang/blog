/**
 * module函数返回一个对象不是必须的，
 * 因为函数本身也是对象， 所以可以把需要暴露的方法作为该函数的属性。
 * 
 * 
 * 直接返回这个模块而不是创建一个新实例意味着在一处修改了这个模块， 那么所有使用该模块的地方都发生改变。
 */

function myModule2() {
    var a = 2;
    var b = [1, 2, 3, 4, 5];

    var self = myModule2;

    self.doSomething = function() {
        console.log(a);  // 这个a是函数作用域里的a, 而不是对象myModule2的a。 注意
    }

};

myModule2() // 初始化模块


var module = myModule2;
module.doSomething()

