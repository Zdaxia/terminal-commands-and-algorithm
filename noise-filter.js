/**
 *Filter1
 */

outPut = (Input.x * kFilteringFactor) + (outPut * (1.0 – kFilteringFactor));

/**
 *Filter2
 */

var filter1=function(){
var containerX=[];
var containerY=[];
var containerSpace=0;

var boxNumber=10;

var sumX=0;
var sumY=0;

var avCaculater=setInterval(function updateScreen(){
	if(containerSpace<boxNumber){
		containerX[containerSpace]=dataX;
		containerY[containerSpace]=dataY;
		sumX+=containerX[containerSpace];
		sumY+=containerY[containerSpace];
		containerSpace++;
	}else if(containerSpace==boxNumber){
		dateXStable=Math.round((sumX/10)*10)/10;
		dateYStable=Math.round((sumY/10)*10)/10;
		console.log(‘X ‘+dateXStable);
		console.log(‘Y ‘+dateYStable);
		sumX=0;
		sumY=0;
		containerSpace=0;
	};

}, 1000/30);
}();
