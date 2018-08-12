/**
 * Created by Administrator on 2017/9/22.
 */
var tool;
tool=(function(){
    function tap(curEle,callBack){
        var isMove=false;
        var startTime=null;
        var maxTime=200;
        curEle.addEventListener('touchstart',function(){
            startTime=Date.now();
            console.log('startTime:'+startTime);
            //startTime1=new Date();
            //startTime1=new Date().getTime();
            isMove=false;
        });
        curEle.addEventListener('touchmove',function(){
            isMove=true;
        })
        curEle.addEventListener('touchend',function(e){
            var times=Date.now()-startTime;
            console.log('times:'+times)
            if(times>maxTime||isMove)return;
            callBack(e);
        });
    }
    return{
        tap:tap
    }
})();