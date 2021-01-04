var parent = function () {
    var name = "parent_name";
    var age = 13;

    var child = function () {

        var name = "child_name";
         childAge = 0.3;
        global.aa = '123';

        // => child_name 13 0.3
        console.log(name, age, childAge);
    };

    child();

    // will throw Error
    // ReferenceError: childAge is not defined
    console.log(name, age, childAge, global.aa);
};

parent();



var adder = function (x) {
    var base = x;
    return function (n) {
        return n + base;
    };
};

var add10 = adder(10);
console.log(add10(5));

var add20 = adder(20);
console.log(add20(5));




foo = function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
};

// global.foo();

const t_const = 'const';
let t_let = 'let';
var t_var = 'var';
(function() {
    console.log(t_const);
    console.log(t_let);
    console.log(t_var);

    return 't_con_let_var_fun()'
})();

var myObject = {value: 100};
myObject.getValue = function () {
    this_foo = function () {
        console.log(this.value); // => undefined
        console.log(this);// 输出全局对象 global
    };

    this_foo();

    return this.value;
};

console.log(myObject.getValue()); // => 100

