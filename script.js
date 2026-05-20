//#region open and close the bage cart
const bageCart=document.querySelector(".badge-cart");

//1-open
function openCart(){
    bageCart.classList.add("active");
}
//2-close
function closeCart(){
    bageCart.classList.remove("active");
}

//#endregion



const swiper = new Swiper('#simbleSlider', {
    // Optional parameters
  
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });


var allProductsJson;
const items_in_cart=document.querySelector(".items-in-cart");
const productCard=[];




function shopping(id,btn){
  productCard.push( allProductsJson[id]);
  btn.classList.add("activeShop");
  addToCard();
}


function addToCard(){
  let total=0;
  var bagOfShopping="";
  for(let i=0;i<productCard.length;i++){
  
  bagOfShopping+=`
  <div class="item-cart">
            <img src="${productCard[i].img}" alt="">
            <div class="content-project">
                <h4>${productCard[i].name}
                </h4>
                <p class="price-product">$${productCard[i].price}</p>
                
            </div>
            <button onclick="removeFromCard(${i})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
  `
  ;



total+=productCard[i].price;



 }

 //نظبط السعر الكلي
 const totalCost=document.getElementById("totalCost");
totalCost.innerHTML="$" +total;

const cost=document.querySelector(".cost");
cost.innerHTML="$" +total;


    //k=نظبط ال كونت
    const count =document.querySelector(".count-item");
    count.innerHTML=productCard.length;
    console.log(productCard.length);


    const count2=document.getElementById("count2");
    count2.innerHTML="(" + productCard.length + " item(s) in cart )";


  console.log(bagOfShopping);
items_in_cart.innerHTML=bagOfShopping;
}




function removeFromCard(index){
  productCard.splice(index,1);
  addToCard();

  let allActiveShoping=document.querySelectorAll(".fa-cart-shopping");



  
  for(let i=0; i<allActiveShoping.length;i++){
    allActiveShoping[i].classList.remove("activeShop");






    productCard.forEach(product => {
      allActiveShoping.forEach(icon => {
          // تأكدي من أن id المنتج صحيح
          if (product.id === parseInt(icon.getAttribute('data-id'))) {
              icon.classList.add("activeShop");
          }
      });
  });
    
  }

}


//back to top
const back=document.querySelector(".back-to-top");
back.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
});









