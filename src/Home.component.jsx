import React from "react";
import Product from "./Product.component";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.gadgets360cdn.com/large/amazon_prime_day_2020_banner_1595319525844.jpg?downsize=950:*&output-quality=80"
          alt="Banner"
        />

        <div className="home__row">
          <Product
            id="125461"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="125462"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="125463"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="125464"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="125465"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="125466"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
