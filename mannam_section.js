var image_scroll_box = document.querySelector('.image_scroll_box');
var image_box = document.querySelector('.image_box');
var section_image = document.querySelectorAll('.section_image');

image_scroll_box.style.height = window.innerHeight + 'px';
image_box.style.height = window.innerHeight * 3 + 'px';
for(let i = 0; i < section_image.length; i++){section_image[i].style.height = window.innerHeight + 'px';}

//섹션 이미지
for(let i = 0; i < section_image.length; i++){
    section_image[i].addEventListener('wheel', function(e){
        if(e.deltaY > 0){image_scroll_box.scrollTo({top:section_image[i+1].offsetTop, behavior:'smooth'});}
        else{image_scroll_box.scrollTo({top:section_image[i-1].offsetTop, behavior:'smooth'});}
        e.preventDefault();
    })
}

window.addEventListener('resize', function(){
    image_scroll_box.style.height = window.innerHeight + 'px';
    image_box.style.height = window.innerHeight * 3 + 'px';
    for(let i = 0; i < section_image.length; i++){section_image[i].style.height = window.innerHeight + 'px';}
})