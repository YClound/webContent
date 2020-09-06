/**
 * 输出
 * 执行 index.js
 * 加载data模块
 * 加载了 multiply 模块
 * 加载了 square 模块
 * 2
 * NaN
 * 9
 */

(function () {
    console.log('执行了 index.js');

    require.config({
        baseUrl: './', //基本路径 出发点在根目录下
        paths: {
            //映射: 模块标识名: 路径
            data: './data',
            add: './add', //此处不能写成alerter.js,会报错
            square: './square',
            multiply: './multiply'
        }
    });

    require(['add', 'square'], function (addModule, squareModule) {

        console.log(addModule.add(1, 1));

        console.log(addModule.add())

        console.log(squareModule.square(3));
    });
})();