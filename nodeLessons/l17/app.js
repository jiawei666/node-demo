// 常规方法打开文件
// var fs = require('fs');
// fs.readFile('sample01.txt', 'utf8', function (err, data) {
//     console.log(data);
//     fs.readFile('sample02.txt', 'utf8', function (err,data) {
//         console.log(data);
//         fs.readFile('sample03.txt', 'utf8', function (err, data) {
//             console.log(data);
//
//         });
//     });
// });


// promise初尝试
var Q = require('q');
var defer = Q.defer();
var fs = require('fs');
// console.log(defer, 'defer')
/**
 * 获取初始promise
 * @private
 */
function getInitialPromise() {
    return defer.promise;
}
/**
 * 为promise设置三种状态的回调函数
 */
// var outputPromise =  getInitialPromise().then(function(){
//     console.log('init success');
//
//     return 'init success';
// },function(){
//     console.log('init error');
//     // console.log(new Error('asdsda'));
//     throw new Error('asdsda');
//     return 'init error';
// },function(){
//     console.log('init progress' );
//
//     return 'init progress';
// });
//
// outputPromise.then(function (msg) {
//     console.log('output success: ' + msg);
// }, function (msg) {
//     console.log('output error: ' + msg);
// }, function (msg) {
//     console.log('output progress: ' + msg);
// })
// defer.notify();//控制台打印in progress
// defer.reject();

// defer.resolve();   //控制台打印resolve
// console.log(outputPromise);		//没有输出。promise的状态只能改变一次


// var outputPromise = getInitialPromise().then(function(fulfilled){
//     var defer = Q.defer();
//     fs.readFile('sample01.txt', 'utf8', function (err, data) {
//         if (err) {
//             defer.reject(err);
//         } else {
//             defer.resolve(data);
//         }
//     })
//
//     return defer.promise;
// });
// outputPromise.then(function (data) {
//     console.log(data);
// }, function (error) {
//     console.log(error);
// }, function () {
//     console.log('output progress')
// })
// defer.resolve();
// console.log(outputPromise)

// var foo = function (data) {
//     console.log(data);
//     // return data;
// }
// var bar = function (data) {
//     console.log(data);
// }
// var baz = function () {
//     console.log('baz');
// }
// var qux = function () {
//     console.log('qux');
// }
// var funcs = [foo,bar,baz,qux]
// var result = Q('asd')
//
// result.then(foo).then(bar)
// // result.then(bar)
//
// console.log('bbb')
// funcs.forEach(function(func){
//     result = result.then(func)
// })
// return result


function printFile(file, prevData='') {
    var defer = Q.defer();
    fs.readFile(file, function (err, data) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(prevData + data);
            console.log(prevData + data);
        }
    })
    return defer.promise;
}

printFile('sample01.txt')
    .then(printFile('sample02.txt', data))
    .then(printFile('sample03.txt', data));