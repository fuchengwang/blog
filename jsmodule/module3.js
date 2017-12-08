// module1和2的单例模式

var m1 = (function myModule3(){
    var a = 3;
    
    return {
        doSomething: function() {
            console.log(a);
        }
    }
})();


var m2 = (function myModule3(){
    var self = myModule3;

    var a = 3;
    self.doSomething = function() {
        console.log(a);
    }

    return myModule3;
})();
