<script>
import { ref } from "vue";

export default {
  setup() {},
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  mounted() {
    this.toggleMenu();
  },
  methods: {
    toggleMenu() {
      let searchForm = document.querySelector(".search-form");
      let shopCart = document.querySelector(".shopping-cart");
      let loginForm = document.querySelector(".login-form");
      let narbar = document.querySelector(".navbar");

      document.querySelector("#search-btn").onclick = () => {
        searchForm.classList.toggle("active");
        shopCart.classList.remove("active");
        loginForm.classList.remove("active");
        narbar.classList.remove("active");
      };

      document.querySelector("#shop-btn").onclick = () => {
        shopCart.classList.toggle("active");
        searchForm.classList.remove("active");
        loginForm.classList.remove("active");
        narbar.classList.remove("active");
      };

      document.querySelector("#user-btn").onclick = () => {
        loginForm.classList.toggle("active");
        searchForm.classList.remove("active");
        shopCart.classList.remove("active");
        narbar.classList.remove("active");
      };

      document.querySelector("#menu-btn").onclick = () => {
        narbar.classList.toggle("active");
        searchForm.classList.remove("active");
        shopCart.classList.remove("active");
        loginForm.classList.remove("active");
      };
    },
    onScroll() {
      let searchForm = document.querySelector(".search-form");
      let shopCart = document.querySelector(".shopping-cart");
      let loginForm = document.querySelector(".login-form");
      let narbar = document.querySelector(".navbar");

      narbar.classList.remove("active");
      searchForm.classList.remove("active");
      shopCart.classList.remove("active");
      loginForm.classList.remove("active");
    },
  },
};
</script>

<template>
  <header class="header">
    <a href="#" class="logo"
      ><font-awesome-icon icon="basket-shopping" />jaguar</a
    >
    <nav class="navbar">
      <a href="#home">home</a>
      <a href="#features">features</a>
      <a href="#products">products</a>
      <a href="#review">review</a>
      <a href="#blogs">blogs</a>
    </nav>
    <div class="icons">
      <div id="menu-btn"><font-awesome-icon icon="bars" /></div>
      <div id="search-btn"><font-awesome-icon icon="magnifying-glass" /></div>
      <div id="shop-btn"><font-awesome-icon icon="cart-shopping" /></div>
      <div id="user-btn"><font-awesome-icon icon="user" /></div>
    </div>

    <form class="search-form">
      <input type="search" id="search-box" placeholder="Search here..." />
      <label for="search-box"
        ><font-awesome-icon icon="magnifying-glass"
      /></label>
    </form>

    <div class="shopping-cart">
      <div class="box">
        <font-awesome-icon icon="trash-can" />
        <img src="src/assets/4.png" alt="" />
        <div class="content">
          <h3>lemon</h3>
          <span class="price">$4.00/-</span>
          <span class="quantity">qty: 1</span>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon icon="trash-can" />
        <img src="src/assets/2.png" alt="" />
        <div class="content">
          <h3>orange</h3>
          <span class="price">$5.00/-</span>
          <span class="quantity">qty: 1</span>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon icon="trash-can" />
        <img src="src/assets/3.png" alt="" />
        <div class="content">
          <h3>cabbage</h3>
          <span class="price">$10.00/-</span>
          <span class="quantity">qty: 1</span>
        </div>
      </div>
      <div class="total">total : $19.00/-</div>
      <a href="#" class="btn">checkout</a>
    </div>

    <form class="login-form">
      <h3>login now</h3>
      <input type="email" placeholder="email" class="box" />
      <input type="password" placeholder="password" class="box" />
      <p class="forget">forget your password <a href="#">click here</a></p>
      <p>don't have an account <a href="#">create now</a></p>
      <input type="submit" value="login now" class="btn" />
    </form>
  </header>

  <!-- section home -->
  <section class="home" id="home">
    <div class="content">
      <h3>fresh and <span> organic</span> products for your</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga
        aperiam distinctio reprehenderit voluptas iure possimus consequatur
        cupiditate veniam ea numquam consectetur.
      </p>
      <a href="#" class="btn">shop now</a>
    </div>
  </section>
  <!-- section home -->

  <!-- section features -->
  <section class="features" id="features">
    <h1 class="heading">our <span>features</span></h1>
    <div class="box-container">
      <div class="box">
        <img src="src/assets/fe-1.png" alt="" />
        <h3>fresh and organic</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam
          dolorum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
      <div class="box">
        <img src="src/assets/fe-2.png" alt="" />
        <h3>free delivery</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam
          dolorum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
      <div class="box">
        <img src="src/assets/fe-3.png" alt="" />
        <h3>easy payment</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam
          dolorum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
    </div>
  </section>
  <!-- section features -->

  <!-- section products -->
  <section class="products" id="products">
    <h1 class="heading">our <span>products</span></h1>
    <div class="product-slider">
      <div class="warpper">
        <div class="box">
          <img src="src/assets/1.png" alt="" />
          <h3>watermelon</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/2.png" alt="" />
          <h3>orange</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/3.png" alt="" />
          <h3>cabbage</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/4.png" alt="" />
          <h3>lemon</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/5.png" alt="" />
          <h3>tomato</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/6.png" alt="" />
          <h3>broccoli</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/7.png" alt="" />
          <h3>avocado</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
        <div class="box">
          <img src="src/assets/8.png" alt="" />
          <h3>grape</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star-half-stroke" />
          </div>
          <a href="#" class="btn">add to cart</a>
        </div>
      </div>
    </div>
  </section>
  <!-- section products -->

  <!-- section review -->
  <section class="review" id="review">
    <h1 class="heading">customer's <span>review</span></h1>
    <div class="box-container">
      <div class="box">
        <img src="src/assets/man.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          distinctio aspernatur possimus cupiditate doloremque iste neque
          ratione ea ad porro.
        </p>
        <h3>John Doe</h3>
        <div class="stars">
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star-half-stroke" />
        </div>
      </div>
      <div class="box">
        <img src="src/assets/girl.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          distinctio aspernatur possimus cupiditate doloremque iste neque
          ratione ea ad porro.
        </p>
        <h3>Anna brown</h3>
        <div class="stars">
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star-half-stroke" />
        </div>
      </div>
      <div class="box">
        <img src="src/assets/gamer.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          distinctio aspernatur possimus cupiditate doloremque iste neque
          ratione ea ad porro.
        </p>
        <h3>stew mol</h3>
        <div class="stars">
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star" />
          <font-awesome-icon icon="star-half-stroke" />
        </div>
      </div>
    </div>
  </section>
  <!-- section review -->

  <!-- section blogs -->
  <section class="blogs" id="blogs">
    <h1 class="heading">our <span>blogs</span></h1>
    <div class="box-container">
      <div class="box">
        <img src="src/assets/blog-1.jpg" alt="" />
        <div class="content">
          <div class="icons">
            <a href="#"><font-awesome-icon icon="user" />by user</a>
            <a href="#"><font-awesome-icon icon="calendar" />1st may, 2022</a>
          </div>
          <h3>organic vegitables</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellendus, illo consectetur aspernatur perspiciatis qui magni
            voluptatum dolores officia veniam.
          </p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>
      <div class="box">
        <img src="src/assets/blog-2.jpg" alt="" />
        <div class="content">
          <div class="icons">
            <a href="#"><font-awesome-icon icon="user" />by user</a>
            <a href="#"><font-awesome-icon icon="calendar" />1st may, 2022</a>
          </div>
          <h3>organic fruits</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellendus, illo consectetur aspernatur perspiciatis qui magni
            voluptatum dolores officia veniam.
          </p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>
      <div class="box">
        <img src="src/assets/blog-3.jpg" alt="" />
        <div class="content">
          <div class="icons">
            <a href="#"><font-awesome-icon icon="user" />by user</a>
            <a href="#"><font-awesome-icon icon="calendar" />1st may, 2022</a>
          </div>
          <h3>fresh fruits</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellendus, illo consectetur aspernatur perspiciatis qui magni
            voluptatum dolores officia veniam.
          </p>
          <a href="#" class="btn">read more</a>
        </div>
      </div>
    </div>
  </section>
  <!-- section blogs -->

  <!-- section footer -->
  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3>jaguar <font-awesome-icon icon="basket-shopping" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="icon">
          <div><font-awesome-icon icon="hashtag" /></div>
          <div><font-awesome-icon icon="cart-shopping" /></div>
          <div><font-awesome-icon icon="share-nodes" /></div>
        </div>
      </div>
      <div class="box">
        <h3>quick links</h3>
        <a href="#home" class="links"
          ><font-awesome-icon icon="chevron-right" />home</a
        >
        <a href="#features" class="links"
          ><font-awesome-icon icon="chevron-right" />features</a
        >
        <a href="#products" class="links"
          ><font-awesome-icon icon="chevron-right" />products</a
        >
        <a href="#review" class="links"
          ><font-awesome-icon icon="chevron-right" />review</a
        >
        <a href="#blogs" class="links"
          ><font-awesome-icon icon="chevron-right" />blogs</a
        >
      </div>
      <div class="box">
        <h3>contact</h3>
        <a href="#" class="links"
          ><font-awesome-icon icon="phone" />+123-456-7890</a
        >
        <a href="#" class="links"
          ><font-awesome-icon icon="phone" />+111-222-0000</a
        >
        <a href="#" class="links"
          ><font-awesome-icon icon="envelope" />jaguar@gmail.com</a
        >
        <a href="#" class="links" id="location"
          ><font-awesome-icon icon="location-dot" />bangkok, thailand</a
        >
      </div>
      <div class="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <input type="submit" class="btn" value="subscribe" />
      </div>
    </div>

    <div class="credit">
      created by <span>mr. pittawat</span> | all rights reserved
    </div>
  </section>
  <!-- section footer -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Poppins:wght@100;300;400;500;600&display=swap");

:root {
  --orange: #ff7800;
  --black: #130f40;
  --light-color: #666;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  --border: 0.2rem solid rgba(0, 0, 0, 0.1);
  --outline: 0.1rem solid rgba(0, 0, 0, 0.1);
  --outline-hover: 0.2rem solid var(--black);
}

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 10em;
  font-size: 62.5%;
}

body {
  background: #eee;
}

section {
  padding: 2rem 9%;
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.8rem 3rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--black);
  color: var(--black);
  cursor: pointer;
  background: none;
}

.heading {
  text-align: center;
  padding: 2rem 0;
  padding-bottom: 3rem;
  font-size: 3rem;
  color: var(--black);
}

.heading span {
  background: var(--orange);
  color: #fff;
  font-size: 3rem;
  padding: 0.5rem 3rem;
  clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%);
}

.btn:hover {
  background: var(--orange);
  color: #fff;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;
  background: #fff;
  box-shadow: var(--box-shadow);
}

.header .logo {
  font-size: 2.2rem;
  font-weight: bolder;
  color: var(--black);
  text-transform: uppercase;
}

.header .logo svg {
  font-size: 2.5rem;
  margin-right: 1rem;
  color: var(--orange);
}

.header .navbar a {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--black);
}

.header .navbar a:hover {
  color: var(--orange);
}

.header .icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .icons div {
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  border-radius: 0.5rem;
  background: #eee;
  color: var(--black);
  font-size: 2rem;
  margin-left: 0.3rem;
  text-align: center;
  cursor: pointer;
}

.header .icons div:hover {
  background: var(--orange);
  color: #fff;
}

.header .icons div svg {
  font-size: 1.5rem;
}

#menu-btn {
  display: none;
}

.header .search-form {
  position: absolute;
  top: 16%;
  right: -110%;
  width: 30rem;
  height: 4rem;
  background: #fff;
  border-radius: 5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  opacity: 0;
  box-shadow: var(--box-shadow);
  transition: right 0.4s;
}

.header .search-form.active {
  position: fixed;
  right: 2rem;
  opacity: 1;
  transition: 0.4s linear;
}

.header .search-form input {
  height: 100%;
  width: 100%;
  background: none;
  text-transform: none;
  font-size: 1.5rem;
  color: var(--black);
  padding: 1rem 2rem;
}

.header .search-form input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

.header .search-form label {
  font-size: 2.2rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--black);
}

.header .search-form label:hover {
  color: var(--orange);
}

.header .shopping-cart {
  position: absolute;
  top: 16%;
  right: -110%;
  opacity: 0;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  width: 32rem;
  background: #fff;
  transition: right 0.4s;
}

.header .shopping-cart.active {
  position: fixed;
  right: 2rem;
  opacity: 1;
  transition: 0.4s linear;
}

.header .shopping-cart .box {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 2rem;
}

.header .shopping-cart .box img {
  height: 10rem;
  width: 40%;
  object-fit: contain;
}

.header .shopping-cart .box svg {
  font-size: 1.6rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  cursor: pointer;
  color: var(--light-color);
  transform: translateY(-50%);
}

.header .shopping-cart .box svg:hover {
  color: var(--orange);
}

.header .shopping-cart .box .content {
  margin: 0 1rem;
}

.header .shopping-cart .box .content h3 {
  color: var(--black);
  font-size: 1.4rem;
  padding-bottom: 1rem;
}

.header .shopping-cart .box .content span {
  color: var(--light-color);
  font-size: 1.2rem;
}

.header .shopping-cart .box .content .quantity {
  padding-left: 1rem;
}

.header .shopping-cart .total {
  font-size: 1.6rem;
  padding: 1rem 0;
  text-align: center;
  color: var(--black);
}

.header .shopping-cart .btn {
  display: block;
  text-align: center;
  margin: 2rem;
  text-transform: uppercase;
}

.header .login-form {
  position: absolute;
  top: 16%;
  right: -110%;
  width: 32rem;
  opacity: 0;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius: 0.5rem;
  background: #fff;
  text-align: center;
  transition: right 0.4s;
}

.header .login-form.active {
  position: fixed;
  right: 2rem;
  opacity: 1;
  transition: 0.4s linear;
}

.header .login-form h3 {
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--black);
  margin-bottom: 1rem;
}

.header .login-form .box {
  margin: 0.8rem 0;
  background: #eee;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: var(--black);
  text-transform: none;
  width: 100%;
}

.header .login-form p {
  font-size: 1.2rem;
  padding: 0.5rem 0;
  color: var(--light-color);
}

.header .login-form p a {
  font-size: 1.2rem;
  color: var(--orange);
  text-decoration: underline;
}

.header .login-form .forget {
  margin-top: 1rem;
}

.header .login-form .btn {
  display: block;
  width: 100%;
  margin-top: 2rem;
  text-transform: uppercase;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("src/assets/bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 20rem;
  padding-bottom: 12rem;
}

.home .content {
  text-align: center;
  width: 60rem;
}

.home .content h3 {
  color: var(--black);
  font-size: 3rem;
}

.home .content h3 span {
  color: var(--orange);
  font-size: 3rem;
}

.home .content p {
  color: var(--light-color);
  font-size: 1.5rem;
  padding: 1rem 0;
  line-height: 1.8;
}

.home .content .btn {
  text-transform: uppercase;
}

.features .box-container,
.review .box-container,
.blogs .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.features .box-container .box,
.review .box-container .box {
  padding: 3rem 2rem;
  background: #fff;
  outline: var(--outline);
  outline-offset: -1rem;
  text-align: center;
  box-shadow: var(--box-shadow);
}

.features .box-container .box:hover,
.review .box-container .box:hover {
  outline: var(--outline-hover);
}

.features .box-container .box img {
  margin: 1rem 0;
  height: 16rem;
}

.features .box-container .box h3 {
  font-size: 2rem;
  line-height: 1.8;
  color: var(--black);
  margin-top: 2rem;
}

.features .box-container .box p,
.review .box-container .box p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: var(--light-color);
  padding: 1rem 0;
}

.review .box-container .box img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
}

.review .box-container .box h3 {
  font-size: 2rem;
  color: var(--black);
  margin-top: 1rem;
}

.review .box-container .box .stars {
  font-size: 2.5rem;
  color: var(--orange);
  margin-top: -0.5rem;
}

.products .product-slider {
  padding-top: 1rem;
}

.products .product-slider:first-child {
  margin-bottom: 2rem;
}

.products .product-slider .warpper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2.5rem;
}

.products .product-slider .box {
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
  padding: 3rem 2rem;
  outline-offset: -1rem;
  outline: var(--outline);
  box-shadow: var(--box-shadow);
}

.products .product-slider .box:hover {
  outline: var(--outline-hover);
}

.products .product-slider .box img {
  margin: 1rem 0;
  height: 12rem;
}

.products .product-slider .box h3 {
  font-size: 1.6rem;
  color: var(--black);
  margin-top: 1rem;
}

.products .product-slider .box .price {
  font-size: 1.2rem;
  color: var(--light-color);
  padding: 0.5rem 0;
}

.products .product-slider .box .stars {
  font-size: 2.5rem;
  color: var(--orange);
  padding: 0.5rem 0;
}

.blogs {
  padding-bottom: 8rem;
}

.blogs .box-container .box {
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  background: #fff;
}

.blogs .box-container .box img {
  height: 25rem;
  width: 100%;
  object-fit: cover;
}

.blogs .box-container .box .content {
  padding: 2rem;
}

.blogs .box-container .box .content .icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: var(--border);
}

.blogs .box-container .box .content .icons a {
  color: var(--light-color);
  font-size: 1.5rem;
}

.blogs .box-container .box .content .icons a:hover {
  color: var(--black);
}

.blogs .box-container .box .content .icons svg {
  color: var(--orange);
  font-size: 1.6rem;
  padding-right: 0.8rem;
}

.blogs .box-container .box .content h3 {
  line-height: 1.6;
  color: var(--black);
  font-size: 2rem;
  padding: 0.5rem 0;
}

.blogs .box-container .box .content p {
  color: var(--light-color);
  font-size: 1.4rem;
  padding: 1.5rem 0;
}

.blogs .box-container .box .content a {
  float: right;
}

.footer {
  background: #fff;
}

.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 1.5rem;
}

.footer .box-container .box h3 {
  font-size: 1.6rem;
  color: var(--black);
  padding: 1rem 0;
  text-transform: uppercase;
}

.footer .box-container .box h3 svg {
  font-size: 2.4rem;
  margin-left: 0.5rem;
  color: var(--orange);
}

.footer .box-container .box a {
  display: block;
  font-size: 1.5rem;
  color: var(--light-color);
  padding: 1rem 0;
}

.footer .box-container .box a svg {
  font-size: 1.6rem;
  color: var(--orange);
  padding-right: 1rem;
}

.footer .box-container .box a:hover svg {
  padding-right: 2rem;
}

.footer .box-container .box p {
  line-height: 1.6;
  font-size: 1.5rem;
  color: var(--light-color);
  padding: 1rem 0;
}

.footer .box-container .box #location {
  margin-left: 0.2rem;
}

.footer .box-container .box #location svg {
  margin-right: 0.2rem;
}

.footer .box-container .box .btn {
  background: var(--orange);
  color: #fff;
  border: none;
}

.footer .box-container .box .btn:hover {
  background: #fff;
  color: var(--orange);
  border: 1px solid var(--black);
}

.footer .box-container .box .icon{
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
}

.footer .box-container .box .icon div{
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  border-radius: 0.5rem;
  background: #eee;
  color: var(--black);
  font-size: 2rem;
  margin-left: 0.3rem;
  text-align: center;
  cursor: pointer;
}

.footer .box-container .box .icon div svg{
  font-size: 1.5rem;
}

.footer .box-container .box .icon div:hover {
  background: var(--orange);
  color: #fff;
}

.footer .credit {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  padding-top: 2.5rem;
  font-size: 1.5rem;
  color: var(--black);
  border-top: var(--border);
}

.footer .credit span {
  font-size: 1.5rem;
  color: var(--orange);
}

@media (max-width: 1150px) {
  * {
    font-size: 55%;
  }

  .header {
    padding: 2rem 9%;
  }
}

@media (max-width: 991px) {
  #menu-btn {
    display: inline-block;
  }

  section {
    padding: 2rem;
  }

  .header .navbar {
    position: fixed;
    top: 13%;
    right: -110%;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    background: #fff;
    width: 25%;
  }

  .header .navbar.active {
    right: 2rem;
    transition: 0.4s linear;
  }

  .header .navbar a {
    font-size: 2rem;
    margin: 2rem 2.5rem;
    display: block;
  }

  .header .login-form,
  .header .shopping-cart,
  .header .search-form {
    top: 13%;
    width: 36%;
  }
}

@media (max-width: 790px) {
  .header .login-form,
  .header .shopping-cart,
  .header .search-form,
  .header .navbar {
    width: 50%;
  }
}

@media (max-width: 500px) {
  * {
    font-size: 50%;
  }

  .header .login-form,
  .header .shopping-cart,
  .header .search-form,
  .header .navbar {
    width: 90%;
  }

  .heading,
  .heading span {
    font-size: 2rem;
  }
}
</style>
