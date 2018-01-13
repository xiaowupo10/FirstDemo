module.exports = function(){
	var clock = document.getElementById('clock');
	var cxt = clock.getContext('2d');

	function drawClock(){
		cxt.clearRect(0,0,500,500);
		var now = new Date();
		var second = now.getSeconds();
		var minute = now.getMinutes();
		var hour1 = now.getHours();
		var hour = hour1 + minute/60;
		hour = hour > 12 ? hour - 12:hour;

		var time = now.toLocaleString();

		cxt.beginPath();
		cxt.lineWidth = 8;
		cxt.strokeStyle = 'blue';
		cxt.arc(250,250,200,0,360,false);
		cxt.stroke();
		cxt.closePath();
		for(var  i = 0;i < 12; i++){
			cxt.save();
			cxt.lineWidth = 5;
			cxt.strokeStyle = 'black';
			cxt.translate(250,250);
			cxt.rotate(i*30*Math.PI/180);
			cxt.beginPath();
			cxt.moveTo(0,-180);
			cxt.lineTo(0,-195);
			cxt.closePath();
			cxt.stroke();
			cxt.restore();
		}
		for(var i = 0;i < 60; i++){
			cxt.save();
			cxt.lineWidth = 3;
			cxt.strokeStyle = 'black';
			cxt.translate(250,250);
			cxt.rotate(i * 6 * Math.PI/180);
			cxt.beginPath();
			cxt.moveTo(0,-188);
			cxt.lineTo(0,-195);
			cxt.closePath();
			cxt.stroke();
			cxt.restore();
		}
		cxt.beginPath();
		cxt.lineWidth = 1;
		cxt.strokeStyle = 'red';
		cxt.fillStyle = 'red';
		cxt.arc(250,250,4,0,360,false);
		cxt.fill();
		cxt.stroke();
		cxt.closePath();

		cxt.save();
		cxt.lineWidth=5;
        cxt.strokeStyle="black";
        cxt.translate(250,250);
        cxt.rotate(hour * 30 * Math.PI/180);
        cxt.beginPath();
        cxt.moveTo(0,-120);
        cxt.lineTo(0,10);
        cxt.closePath();
        cxt.stroke();
        cxt.restore();

        cxt.save();
        cxt.lineWidth = 3;
        cxt.strokeStyle = 'black';
        cxt.translate(250,250);
        cxt.rotate(minute*6*Math.PI/180);
        cxt.beginPath();
        cxt.moveTo(0,-150);
        cxt.lineTo(0,15);
        cxt.closePath();
        cxt.stroke();
        cxt.restore();

        cxt.save();
        cxt.lineWidth="1.5";
        cxt.strokeStyle="red";
        cxt.translate(250,250);
        cxt.rotate(second*6*Math.PI/180);
        cxt.beginPath();
        cxt.moveTo(0,-160);
        cxt.lineTo(0,20);
        cxt.closePath();
        cxt.stroke();
        //秒针前端小点
        cxt.beginPath();
        //外环为红色
        cxt.strokeStyle="red";
        //灰色填充
        cxt.fillStyle="gray";
        cxt.arc(0,-145,4,0,360,false);
        cxt.fill();
        cxt.closePath();
        cxt.stroke();
        cxt.restore();

        cxt.beginPath();
        cxt.lineWidth = 1;
        cxt.strokeStyle = 'red';
        cxt.fillStyle = 'gray';
        cxt.arc(250,250,4,0,360,false);
        cxt.fill();
        cxt.stroke();
        cxt.closePath();
        cxt.font = '15px HEITI';
        cxt.fillStyle = 'black';
        cxt.fillText(time,160,150);
	}
	drawClock();  
    setInterval(drawClock,1000); 
}