let flag = 0

slide(flag)

function arrow(x){
    flag+=x
    slide(flag)

}

function slide(num){
    let slides = document.getElementsByClassName("slide")
    
    if(num==slides.length){flag=0;num=0;}
    
    if(num<0){flag=slides.length-1;num=slides.length-1;}

    for(let img of slides){
        img.style.display="none"
    }
    
    slides[num].style.display = 'block'
}