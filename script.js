let items = document.querySelectorAll('.slider .list .items')
let next = document.getElementById('next');
let previo = document.getElementById('previo');

let countItem = items.length;
let itemActive = 0;

// next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if (itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}


// prepious click 
previo.onclick = function(){
    itemActive = itemActive -1;
    if (itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}
//  run slider
    let refreshinterval = setInterval(() => {
        next.click();
    },4000)

 function showSlider(){
        // remove item active old
        let itemActiveOld = document.querySelector('.slider .list .items.active')
        itemActiveOld.classList.remove('active');
        
        // active new item
        items[itemActive].classList.add('active');
       
       // run slider
        clearInterval(refreshInterval);
        refreshinterval = setInterval(() => {
        next.click()

    }, 7000)   
        

 }


//  nav open close button

const menuOpenButton = document.querySelector("#menu-open-button");
menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});