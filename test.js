// var http = require('http');
// var express = require('express');
// http.createServer(function (request, response) {
//
//     // 发送 HTTP 头部
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//
//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8080);
//
// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8080/');

// module测试
// var public = require('./nodeLessons/public')
//
// console.log(public(10));

// console.log(require)
// console.log(module)
// console.log(public.pubModule)
// console.log(public.pubMMain)

// class学习

class User {
    name;
    user;
    phone;
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    getUser() {
        return this.user;
    }

    setUser()
    {
        this.user = {
            name: this.name,
            phone: this.phone
        }
    }

}

console.log(User.prototype);
var user  = new User('jiawei', '13612323');
console.log(user);
user.setUser();
console.log(user);
