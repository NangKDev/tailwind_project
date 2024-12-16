const menu=document.querySelector("#menu");

const toggle = document.querySelector("#toggle");

toggle.onclick = () => {
    menu.classList.toggle('hidden');
    toggle.querySelector("i").classList.toggle('fa-xmark');
}

$(document).ready(function () {
    $(".home").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout:7000,
    });

    $(".gallery").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        
    });
    

});