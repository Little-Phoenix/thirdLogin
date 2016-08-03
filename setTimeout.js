function a(){
  var date1 = new Date().getTime();
  setTimeout(()=>{
    console.log(new Date().getTime() - date1)
  }, 3010)//此处是0时，输出什么，<3000时，输出什么；
  while(new Date().getTime() - date1 < 3000){
     //执行某逻辑
  }
}

var count = 0
function b(){
  var date1 = new Date().getTime();
  while(new Date().getTime()-date1 < 1000){
    //执行某漏记
  }
}
var interval = setInterval(()=>{
  count++;
  if(count == 10){
    clearInterval(interval)
  }
  b();
  console.log(new Date().getTime());
}, 200)
