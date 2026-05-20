
fetch('items.json')
  .then(response => response.json())
  .then(data => {
    allProductsJson = data;

    const omnia = document.getElementById("omnia");
    const omnia2 = document.getElementById("omnia2");

    data.forEach(product => {
      const percent_discount = product.old_price ? Math.floor((product.old_price - product.price) / product.old_price * 100) : 0;

      // إضافة المنتج إلى السلايدر الأول
      if(product.old_price){
      omnia.innerHTML += `
        <div class="product swiper-slide first-swiper">
          <span class="sale-percent">${percent_discount}% </span>
          <div class="icons">
            <span><i class="fa-solid fa-cart-shopping" data-id="${product.id}" onclick="shopping(${product.id},this)"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
          </div>
          <div class="img-product">
            <img src="${product.img}" alt="">
            <img src="${product.img_hover}" alt="" class="img-hover">
          </div>
          <div class="text-product">
            <h3>${product.name}</h3>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
            <p>$${product.price}</p>
            <p class="old-price">$${product.old_price}</p>
          </div>
        </div>
      `;}

      // إضافة المنتج إلى السلايدر الثاني إذا كان لديك بيانات مختلفة
      omnia2.innerHTML += `
        <div class="product swiper-slide product2">
          
          <div class="icons">
            <span><i class="fa-solid fa-cart-shopping" data-id="${product.id}" onclick="shopping(${product.id},this)"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
          </div>
          <div class="img-product">
            <img src="${product.img}" alt="">
            <img src="${product.img_hover}" alt="" class="img-hover">
          </div>
          <div class="text-product">
            <h3>${product.name}</h3>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
            <p>$${product.price}</p>
            
          </div>
        </div>
      `;




    //   ضافة المنتج إلى السلايدر الثالث إذا كان لديك بيانات مختلفة
      omnia3.innerHTML += `
      <div class="product swiper-slide product2">
        
        <div class="icons">
          <span><i class="fa-solid fa-cart-shopping" data-id="${product.id}" onclick="shopping(${product.id},this)"></i></span>
          <span><i class="fa-solid fa-heart"></i></span>
          <span><i class="fa-solid fa-share"></i></span>
        </div>
        <div class="img-product">
          <img src="${product.img}" alt="">
          <img src="${product.img_hover}" alt="" class="img-hover">
        </div>
        <div class="text-product">
          <h3>${product.name}</h3>
        </div>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="price">
          <p>$${product.price}</p>
          
        </div>
      </div>
    `;






    });

    // Initialize Swiper after adding all slides
    const swiper2 = new Swiper('#multiSlider', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '#multiSlider .swiper-button-next',
        prevEl: '#multiSlider .swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      },
    });

    const swiper3 = new Swiper('#multiSlider2', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '#multiSlider2 .swiper-button-next',
            prevEl: '#multiSlider2 .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });





    const swiper4 = new Swiper('#multiSlider3', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '#multiSlider3 .swiper-button-next',
            prevEl: '#multiSlider3 .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });
    
    

    
  })
  .catch(error => console.error('Error fetching data:', error));


