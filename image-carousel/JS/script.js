const imgs=document.getElementById('imgs');
const img=document.querySelectorAll('#imgs img');
const left=document.getElementById('left');
const right=document.getElementById('right');

let index = 0;

let interval=setInterval(run,2000);


function run(){
    index++;
    changeImages() 
}

function changeImages(){
    if(index >img.length-1 ){
        index=0;
    }
    else if(index<0){
      index=img.length-1;
    }
    imgs.style.transform = `translateX(${index * -500}px)`;
}



left.addEventListener('click',()=>{
    index--;
    changeImages();
    resetInverval();
})


function  resetInverval(){
    clearInterval(interval);
    interval=setInterval(run,2000);
}


right.addEventListener('click',()=>{
    index++;
    changeImages();
    resetInverval();
})

