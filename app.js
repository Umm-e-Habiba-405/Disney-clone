
const videoCard=document.querySelectorAll('.video-card');
videoCard.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.play();
    })
    item.addEventListener('mouseLeave',()=>{
        let video=item.children[1];
        vedio.pause();
    })
})