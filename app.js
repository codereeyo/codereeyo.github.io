document.addEventListener('DOMContentLoaded', function(){
    const menuList = document.getElementById("menuList");
    const menu = document.getElementById("menu");
    
    menuList.style.maxHeight = "0px";
    
    menu.addEventListener("click", function () {
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "430px";
        }
        else{
            menuList.style.maxHeight = "0px";
        }
    })
    
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });  

    // SCROLL REVEAL 
    // const scrollRevealOption = {
    //     distance: "200px",
    //     origin: "bottom",
    //     duration: 1000,
    // }

    // ScrollReveal().reveal(".proj-container-image-left", {
    //     ...scrollRevealOption,
    //     origin: "right",
    // });
    // ScrollReveal().reveal(".proj-container-image-right", {
    //     ...scrollRevealOption,
    //     origin: "left",
    // });

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    
})