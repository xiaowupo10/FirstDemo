const imgSrc = require('../img/1.png')
const newSrc = 'http://pic5.40017.cn/02/000/61/02/rBLkCVpMhhCAWvmVAABhqyM2R2k440.jpg';
let wAjax = require('../public/wAjax.js');
module.exports = function() {
	var allCountEle = document.getElementById('allCount');
 	var greet = document.createElement('div');
 	if(localStorage.pagecount){
 		localStorage.pagecount = Number(localStorage.pagecount) + 1;
 	}else{
 		localStorage.pagecount = 1;
 	}
 	allCountEle.textContent = localStorage.pagecount;
 	wAjax({
 		method:'GET',
 		url:'../data/index.json',
 		success:function(data){
 			data = JSON.parse(data);
 			if(data.success == 200){
 				greet.innerHTML = data.data
 			}
 		}
 	})
  	return greet;
};

