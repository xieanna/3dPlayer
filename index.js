var btn = document.querySelector('button');
var video = document.querySelectorAll('video')
var len = video.length
btn.addEventListener('click',function(){
  for(let i = 0; i < len; i++){
    if(video[i].paused){  //判断是否处于暂停状态
      video[i].play();  //开启播放
       }else{
        video[i].pause();  //停止播放
        }
  }
})