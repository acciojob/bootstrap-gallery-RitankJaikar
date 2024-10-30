//your JS code here. If required.
/*
const cards= document.querySelectorAll(".card");
const myCarousel= document.querySelector("#myCarousel");
const myCarouselInner= document.querySelector(".carousel-inner");
const myCarouselItems= document.querySelectorAll(".carousel-item");


cards.forEach(card => {
    card.addEventListener("click", e => {
        myCarouselItems.forEach(item => {
            if(item.classList.contains(e.currentTarget.id)) {
                console.log(item);
                item.classList.add("active");
            }
        })

        myCarousel.classList.remove("d-none");
        myCarousel.classList.add("d-block");
    })
})

myCarousel.addEventListener("click", e => {
    if(e.target===myCarousel || e.target===myCarouselInner) {
        myCarousel.classList.add("d-none");
        myCarousel.classList.remove("d-block");
        myCarouselItems.forEach(item => {
            item.classList.remove("active");
        })
    }
})
*/