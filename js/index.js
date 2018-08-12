// 加载完毕事件 在该事件中 写的js代码 去获取dom元素 就一定不会出现找不到
window.onload=function(){
	// 顶部的通栏 滚动的效果
	heardScroll();
	// 倒计时效果
	cutDownTime();
	//轮播图
	banner();
};

function heardScroll(){
	var jd_nav=document.querySelector('.jd_nav');
	var maxDistance=jd_nav.offsetHeight+jd_nav.offsetTop;
	console.log(maxDistance);
	var jd_header=document.querySelector('.header');
	jd_header.style.backgroundColor='rgba(201,21,35,0)';
	window.onscroll=function(){
		//var maxBodyDis=document.querySelector('.jd_container').scrollTop;
		var maxBodyDis=document.body.scrollTop;
		var precent=maxBodyDis/maxDistance;
		console.log(maxBodyDis)
		//console.log(precent)
		if(precent>1){
			precent=1;
		}else{
			jd_header.style.backgroundColor='rgba(201,21,35,'+precent+')';
		}
	}
}
//倒计时
function cutDownTime(){
	var oLis=document.querySelectorAll(' .main_content:nth-child(1) .main_top ul:nth-of-type(1) li');
		//console.log(oLis);
		var times=3*60*60;
		var timer=window.setInterval(function(){
			times--;
			if(times<=0){
				window.clearInterval(timer);
				return;
			}
			var hours=Math.floor(times/3600);
			var minutes=Math.floor(times%3600/60);
			var secounds=Math.floor(times%60);
			oLis[0].innerHTML=Math.floor(hours/10);
			oLis[1].innerHTML=hours%10;
			oLis[3].innerHTML=Math.floor(minutes/10);
			oLis[4].innerHTML=minutes%10;
			oLis[6].innerHTML=Math.floor(secounds/10);
			oLis[7].innerHTML=secounds%10;
		},1000);

}
function banner(){
	var width=document.body.offsetWidth;
	var moveUl=document.querySelector('.images');
	var indexs=document.querySelectorAll('.oImgCount li');
	var index=1;
	moveUl.style.transform='translateX('+width*-1+'px)';
	var timer=window.setInterval(function(){
		index++;
		moveUl.style.transition = 'all .3s';
		moveUl.style.transform='translateX('+index*width*-1+'px)';

	},1000)
	moveUl.addEventListener('webkitTransitionEnd',function(){
		console.log('过度结束');
		if(index>8){
			index=1;
			moveUl.style.transition='';
			moveUl.style.transform='translateX('+index*width*-1+'px)';
		}
		if(index<1){
			index=8;
			moveUl.style.transition='';
			moveUl.style.transform='translateX('+index*width*-1+'px)';
		}
		for(var i=0;i<indexs.length;i++){
			indexs[i].className='';
			}
		indexs[index-1].className='current';
		});


	var start=0;
	var moveX=0;
	moveUl.addEventListener('touchstart',function(e){
		window.clearInterval(timer);

		start=e.touches[0].clientX;

	});
	moveUl.addEventListener('touchmove',function(e){
		moveX=e.touches[0].clientX-start;
		this.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
	});
	moveUl.addEventListener('touchend',function(e){
		var maxDisc=width/3;
		if(Math.abs(moveX)>maxDisc){
			if(moveX>0){
				index--;
			}else{
				index++;
			}
			this.style.transition = 'all .3s';
			this.style.transform = 'translateX('+(index*-1*width)+'px)';
		}else{
			this.style.transition = 'all .3s';
			this.style.transform = 'translateX('+(index*-1*width)+'px)';
		}
			
		 timer=window.setInterval(function(){
			index++
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform='translateX('+index*width*-1+'px)';

	},1000);

	});
	
}
//轮播图、
