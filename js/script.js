$(document).ready(function() {

    $('.all__articles').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    $('.all__articles-sm').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    });
    $('.testimonial__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    $('.testimonial__items-sm').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    

})


const priceSwitcher=document.getElementById('price-switcher')
const basicPrice=document.getElementById('basic-price')
const advancePrice=document.getElementById('advance-price')
const priceTime1=document.querySelector('.price-time1')
const priceTime2=document.querySelector('.price-time2')
priceSwitcher.addEventListener('click',function(e) {
    if(e.target.checked){
        basicPrice.innerHTML="$120"
        advancePrice.innerHTML="$600"
        priceTime1.innerHTML="/ Per year"
        priceTime2.innerHTML="/ Per year"
    }
    else{
        basicPrice.innerHTML="$12"
        advancePrice.innerHTML="$50"
        priceTime1.innerHTML="/ Per month"
        priceTime2.innerHTML="/ Per month"
    }
})