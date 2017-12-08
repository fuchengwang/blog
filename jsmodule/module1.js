//  最简单的模块
/**
 * 特点
 *  1. 需要调用该函数来创建模块实例
 *  2. 返回内部函数而隐藏内部数据。
 */
function myModule() {
    var variable = 1;
    var another = [1, 2, 3];

    function doSomething() {
        console.log(variable);
    }

    function doAnother() {
        console.log(another)
        
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
}
