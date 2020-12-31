// 闭包 closure
// function f1(){
//
//     var n=999;
//
//     nAdd=function(){n+=1};
//
//     function f2(){
//         console.log(n);
//     }
//
//     return f2;
//
// }
//
// var result=f1();
//
// result(); // 999
//
// nAdd();
//
// result(); // 1000

// this理解

// var name = "The Window";
//
// var object = {
//     name : "the object",
//
//     getNameFunc : function(){
//         // console.log(this, 121111);
//         var that = this;
//         var foo = function(){
//             return that.name;
//         };
//
//         return foo;
//     }
//
// };
//
// console.log(object.getNameFunc()());


// 把闭包当做对象使用

var user =  {
    data: {
        sex: "",
        name: "",
        phone: "",
    },
    setName: function (name) {
        this.data.name=name;
    },
    getName: function () {
        return this.data.name
    },
    setSex: function (sex) {
        this.data.sex=sex;
    },
    getSex: function () {
        return this.data.sex
    },
    setPhone: function (phone) {
        this.data.phone=phone;
    },
    getPhone: function () {
        return this.data.phone
    },
};


console.log(user.data);
user.setName('jiawei');
user.setPhone('136');
user.setSex('male');
console.log(user.data);

