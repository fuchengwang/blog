// 模块管理器

var MyModules = (function ModuleManager(){
    var modules = []; // 模块管理器存储的模块

    /**
     * 
     * @param {*字符串} name 
     * @param {*数组， 模块的依赖} depNames 
     * @param {*一个返回模块的函数} moduleCreator 
     */
    function add(name, depNames, moduleCreator) {
        deps = [];
        for(var i = 0; i < depNames.length; i++) {
            deps.push(modules[depNames[i]])
        }

        //把依赖传入模块的创建器中，把创建器作为this, 创建该模块
        modules[name] = moduleCreator.apply(moduleCreator, deps);
        return modules[name];
    }

    function get(name) {
        return modules[name];
    }


    return {
        add: add,
        get: get
    }

}());



// 测试


(function Tester() {

    MyModules.add("foo", [], function() {
        name = "foo";
        return {
            getName: () => {return "my name is "+ name},
            getRandom: function() {
                return Math.random()
            }
        }
    });

    MyModules.add("bar", ["foo"], function(foo) {
        return {
            getPercent: function() {
                return Math.round(foo.getRandom() * 100, 2) + "%"
            }
        }
    })

    var foo = MyModules.get("foo");
    console.log(foo.getRandom());

    var bar = MyModules.get("bar");
    console.log(bar.getPercent());


})();
