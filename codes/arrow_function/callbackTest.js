// 测试回调时的情形
// 1.回调中赋值给其他对象
// 2.多重回调

global.a = "no!"

function runner2(f) {
    f();
}

function runner(f) {
    var innerObj = {
        a: "inner",
        gen: function() {
            return {
                a: 'inner inner',
                f: f
            }
        }
    }
    var o = innerObj.gen();
    console.log("#runner:");
    o.f();
    console.log("#runner2:");
    runner2(o.f);

}


var obj = {
    a: "yeah",
    f: function foo() {
        runner(function () {
            console.log(this.a);
        })
    },
    arrow: function arrow() { // 它在传入之前就把this给固定起来了， 不能被修改
        runner(() => console.log("=> ", this.a));
    }

}
obj.f()
console.log("\n");
obj.arrow();
