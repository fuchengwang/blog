// 首先创建一个this对象， 它保存着__proto__
this = { // this 是Cat类型， 也就是Cat的实例， 它的原型中保存着它的构造方法function Cat(name) {}
    __proto__: {
        constructor: function Cat(name) {},

        __proto__:  {
            constructor: function Object() {},
            toString: function() {},
            valueOf: function() {},

            __proto__: null;
        }
    }
}
// 然后， 为this添加属性
this.catName = "jetty"

// 最后， 使用变量jetty作为this对象的引用
var jetty = this


/*对于构造函数Cat*/
Cat = {
    [[FunctionLocation]]: "internal#localtion",
    [[Scopes]]: [],
    arguments: null, 
    caller: null,
    length: 1, // 代表该函数接受一个参数,
    name: 'Cat', //函数名
    prototype: {   // 重要！！
        constructor: function Cat(name) {}, //prototype属性的构造器属性指向了Cat对象自身
        __proto__:  {  
            constructor: function Object() {},
            toString: function() {},
            valueOf: function() {},

            __proto__: null;
        }
    },

    __proto__: {
        constructor: function Function() {},
        bind: function() {},
        call: function() {},
        
        __proto__:  {  
            constructor: function Object() {},
            toString: function() {},
            valueOf: function() {},

            __proto__: null;
        }

    }
} 
