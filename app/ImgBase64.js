const newStr = require('../img/333.jpg')
module.exports = function(){
	function getBase64(url,callback){
        //通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片，相比 createElement() 创建 <img> 省去了 append()，也就避免了文档冗余和污染
        var Img = new Image(),
            dataURL='';
        Img.src=url;
        Img.crossOrigin = '*';
        Img.onload=function(){ //要先确保图片完整获取到，这是个异步事件
            var canvas = document.createElement("canvas"), //创建canvas元素
                width=Img.width, //确保canvas的尺寸和图片一样
                height=Img.height;
            canvas.width=width;
            canvas.height=height;
            canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
            dataURL=canvas.toDataURL(); //转换图片为dataURL
            callback?callback(dataURL):null; //调用回调函数
        };
    }
	getBase64(newStr,(dataURL)=>{
        console.log(dataURL);
    });
}