global.a = 3;

function f2() {
    outer = {
        a: '2',
        f1: function f1() {
            return {
                a: "1",
                foo: function () {
                    console.log("a: ", this.a);
                },
                arrow: () => {
                    console.log("=> a: ", this.a); // 箭头函数的this是静态绑定， 编写代码时就已经确定
                }
            }
        }
    }
    return outer;
}


var outer = f2();
var obj = outer.f1();

obj.foo();
obj.arrow();

console.log('下面为硬绑定到global时');
obj.foo.bind(global)();
obj.arrow.bind(global)(); // 箭头函数优先级要高于硬绑定！
