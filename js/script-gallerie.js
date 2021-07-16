//////// Navbar Section ///////// 
 const navToggle = document.querySelector(".nav-toggle"); 
 const links = document.querySelector(".links"); 
 
 
 navToggle.addEventListener("click", function () { 
   links.classList.toggle("show-links"); 
 }); 
 
 
 
 
 //////// Galleries Section ///////// 
 const galleries = [ 
   { 
     id: 1, 
     title: "Saleh Abdullah", 
     category: "classic", 
     img: "../images/1gallerie.png", 
     insta: "https://www.instagram.com/salehnikon/", 
   }, 
   { 
     id: 2, 
     title: "Saleh Abdullah", 
     category: "sports", 
     img: "../images/2gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
   { 
     id: 3, 
     title: "Saleh Abdullah", 
     category: "Tunisian", 
     img: "../images/3gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
   { 
     id: 4, 
     title: "Saleh Abdullah", 
     category: "classic", 
     img: "../images/4gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
   { 
     id: 5, 
     title: "K.....E.....V.....I.....N", 
     category: "sports", 
     img: "../images/5gallerie.png", 
     insta:"https://www.instagram.com/p/CNS5maQFqGa/", 
   }, 
   { 
     id: 6, 
     title: "Saleh Abdullah", 
     category: "Tunisian", 
     img: "../images/6gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
   { 
     id: 7, 
     title: "Saleh Abdullah", 
     category: "classic", 
     img: "../images/7gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
   { 
     id: 8, 
     title: "Saleh Abdullah", 
     category: "sports", 
     img: "../images/8gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
   { 
     id: 9, 
     title: "Saleh Abdullah", 
     category: "Tunisian", 
     img: "../images/9gallerie.png", 
     insta:"https://www.instagram.com/felixgoerig/", 
   }, 
 ]; 
 // get parent element 
 const sectionCenter = document.querySelector(".section-center"); 
 const btnContainer = document.querySelector(".btn-container"); 
 const filterBtns = document.querySelectorAll(".filter-btn"); 
 // display all items when page loads 
 window.addEventListener("DOMContentLoaded", function () { 
   diplaygalleriesItems(galleries); 
 }); 
 
 
 filterBtns.forEach(function (btn) { 
   btn.addEventListener("click", function (e) { 
     const category = e.currentTarget.dataset.id; 
     const galleriesCategory = galleries.filter(function (galleriesItem) { 
       if (galleriesItem.category === category) { 
         return galleriesItem; 
       } 
     }); 
     if (category === "all") { 
       diplaygalleriesItems(galleries); 
     } else { 
       diplaygalleriesItems(galleriesCategory); 
     } 
   }); 
 }); 
 
 
 
 
 
 
 function diplaygalleriesItems(galleriesItems) { 
   let displaygalleries = galleriesItems.map(function (item) { 
 
 
     return `<article class="galleries-item"> 
           <img src=${item.img} alt=${item.title} class="photo" /> 
           <div class="item-info"> 
             <header> 
               <h4>${item.title}</h4> 
               <span class="social-icons">  <a  href=${item.insta} target="_blank"> 
                <i class="fab fa-instagram"></i> 
              </a></span> 
             </header> 
          </div> 
         </article>`; 
 
 
   }); 
   displaygalleries = displaygalleries.join(""); 
 
 
   sectionCenter.innerHTML = displaygalleries; 
 } 
