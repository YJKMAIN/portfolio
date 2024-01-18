

/*제목*/
const title = document.querySelector('h2');
setInterval(function(){
    if(title.querySelector('.tit2').style.display == 'none'){
        title.querySelector('.tit2').style.display = 'inline-block';
        title.querySelector('.tit1').style.display = 'none';
    }else{
        title.querySelector('.tit2').style.display = 'none';
        title.querySelector('.tit1').style.display = 'inline-block';
    }
},1500);



/*마우스 휠*/
const mouseImg = document.querySelector('.mouse_scroll');
setInterval(function(){
    mouseImg.classList.toggle('secondBg');
},1000);



/*card 배경*/
function changeBG(bgName,elePosition){
    let count =1;
    setInterval(function(){
        count++;
        if(count>3){count=1;}
        /*let bgImage =``;*/
        elePosition.style.backgroundImage = `url('../images/${bgName}${count}.jpg')`;
    },1500);
}

changeBG('detail',document.querySelector('#card1'));
changeBG('banner',document.querySelector('#card2'));
changeBG('package',document.querySelector('#card3'));



/*슬라이드*/
const slideBox = document.querySelectorAll('.slide-box');
const slideContainer = document.querySelector('.slide-container');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let num = 1;

next.addEventListener('click',function(e){
    e.preventDefault();
    if(num==slideBox.length){
        slideContainer.style.transform = `translateX(${0}%)`;
        num=1;
    }else{
        let slidePosition = -(num * (100 / 3));
        slideContainer.style.transform = `translateX(${slidePosition}%)`;
        num++;
    }
});

prev.addEventListener('click',function(e){
    e.preventDefault();
    if(num==1){
        slideContainer.style.transform = `translateX(-${(100/3)*2}%)`;
        num=slideBox.length;
    }else{
        num--;
        let slidePosition = -((num-1) * (100 / 3));
        slideContainer.style.transform = `translateX(${slidePosition}%)`;
    }
});