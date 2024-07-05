let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-bar")
menu.onclick = function () {
    menu.classList.toggle('fa-times');

    navbar.classList.toggle("active");
}
// 
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

 openShopping.addEventListener('click', () => {
//     // body.classList.add('active');
     cardd.style.display="block"
})
let cardd = document.querySelector(".cardd")
closeShopping.addEventListener('click', () => {
//     // body.classList.remove('active');
     cardd.style.display = "none"


 })
// document.querySelector(".ma").onclick=function(){
//     cardd.style.display ="none" 

// }
// openShopping.onclick=function(){
//     cardd.style.width = "100%" 

// }



let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Image-19.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'Image-22.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'Image-23.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'Image-24.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'Image-25.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'Image-27.jpg',
        price: 120000
    },
     {
        id: 7,
        name: 'PRODUCT NAME 6',
        image: 'Image-1.jpg',
        price: 120000
    }
    ,
    {
        id: 8,
        name: 'PRODUCT NAME 6',
        image: 'Image-8.jpg',
        price: 120000
    }
    ,
    {
        id: 9,
        name: 'PRODUCT NAME 6',
        image: 'Image-2.jpg',
        price: 120000
    }
    ,
    {
        id: 10,
        name: 'PRODUCT NAME 6',
        image: 'Image-17.jpg',
        price: 120000
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
             <div class="d-flex align-items-center justify-content-center gap-2 my-3 star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>

                </div>
                <div class="card-badge">-15%</div>
<div class="iconss">
<a href="#" class="fa fa-heart"></a>
<a href="#" class="fa fa-share"></a>
<a href="PRODUCT1/indx.html" class="fa fa-eye"></a>
</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})" class="but" ><i class="fa-solid fa-cart-shopping"></i> Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();



}

// 
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 4,
        },
    },
});
// 

var play = document.querySelector(".play-btn")
var video = document.querySelector(".vido")

var clo = document.querySelector(".markk")

play.onclick=function(){
    video.classList.add("active")
}
clo.onclick = function (){
    video.classList.remove("active")
 
}
// button
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})




function loader() {
    document.querySelector(".loading-page").classList.add("active");
}
function fadeOut() {
    setTimeout(loader, 4000);
}
fadeOut()

