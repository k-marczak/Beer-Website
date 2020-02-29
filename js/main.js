AOS.init({
    offset: 200,
    duration: 1000
});

const bars = document.querySelector('.open');
const close = document.querySelector('.close');
const nav_list = document.querySelector('.nav-list');


bars.addEventListener('click', function(){
    nav_list.classList.add('active');
    bars.classList.add('display');
})


close.addEventListener('click', function(){
    nav_list.classList.remove('active');
    bars.classList.remove('display');
})

document.getElementById('btn').addEventListener('click', function(){
    TweenMax.to('#image', 1, {opacity: 1, x:0});
    TweenMax.to('#para', 1, {opacity: 1, x:0});

});


