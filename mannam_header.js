var header = document.querySelector('header');
var header_ul = document.querySelector('.header_ul');
var header_ul_li = document.querySelectorAll('.header_ul_li');
var mannam_icon = document.querySelector('.mannam_icon');
var call_box = document.querySelector('.call_box');
var header_menu_box = document.querySelector('.header_menu_box');
var header_mini_menu = document.querySelectorAll('.header_mini_menu');
var mini_menu_li = document.querySelectorAll('.mini_menu_li');
var header_a = document.querySelectorAll('.header_a');
var i = document.querySelectorAll('i');

header_ul.style.height = header.clientWidth * 0.05 + 'px';
header_a[0].style.fontSize = header.clientWidth * 0.04 + 'px';
header_a[8].style.fontSize = header.clientWidth * 0.04 + 'px';
mannam_icon.style.paddingLeft = header.clientWidth * 0.02 + 'px';
call_box.style.paddingRight = header.clientWidth * 0.02 + 'px';
i[0].style.paddingRight = header.clientWidth * 0.01 + 'px';
//header_menu_box.style.top = header_ul.clientHeight + 'px';

for(let i = 0; i < header_ul_li.length; i++){
    header_ul_li[i].style.paddingRight = header.clientWidth * 0.025 + 'px';
    header_ul_li[i].style.paddingLeft = header.clientWidth * 0.025 + 'px';
}
for(let i = 1; i < 8; i++){
    header_a[i].style.fontSize = header.clientWidth * 0.02 + 'px';
}

header.addEventListener('mouseover', function(){
    header_menu_box.style.height = '500px';
    for(let i = 0; i < header_mini_menu.length; i++){
        header_mini_menu[i].style.height = 'auto';
    }
    for(let i = 0; i < mini_menu_li.length; i++){
        mini_menu_li[i].style.marginTop = '8px';
    }
})
header.addEventListener('mouseout', function(){
    header_menu_box.style.height = '0px';
    for(let i = 0; i < header_mini_menu.length; i++){
        header_mini_menu[i].style.height = '0px';
    }
    for(let i = 0; i < mini_menu_li.length; i++){
        mini_menu_li[i].style.marginTop = '0px';
    }
})

window.addEventListener('resize', function(){
    header_ul.style.height = header.clientWidth * 0.05 + 'px';
    header_a[0].style.fontSize = header.clientWidth * 0.04 + 'px';
    header_a[8].style.fontSize = header.clientWidth * 0.04 + 'px';
    mannam_icon.style.paddingLeft = header.clientWidth * 0.02 + 'px';
    call_box.style.paddingRight = header.clientWidth * 0.02 + 'px';
    i[0].style.paddingRight = header.clientWidth * 0.01 + 'px';
    //header_menu_box.style.top = header_ul.clientHeight + 'px';

    for(let i = 0; i < header_ul_li.length; i++){
        header_ul_li[i].style.paddingRight = header.clientWidth * 0.025 + 'px';
        header_ul_li[i].style.paddingLeft = header.clientWidth * 0.025 + 'px';
    }
    for(let i = 1; i < 8; i++){
        header_a[i].style.fontSize = header.clientWidth * 0.02 + 'px';
        header_ul_li[i].style.paddingRight = header.clientWidth * 0.025 + 'px';
        header_ul_li[i].style.paddingLeft = header.clientWidth * 0.025 + 'px';
    }
})