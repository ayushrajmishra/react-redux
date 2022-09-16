import React from 'react'

export default function Home() {
  return (
    <div>
           
    <h1>Home Component</h1>
    <div className="add-to-cart">
    <span className="cart-count">1</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
    <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://m.media-amazon.com/images/I/71uuDYxn3XL._FMwebp__.jpg" />
        </div>
        <div className="text-wrapper item">
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button> Add to cart
           </button>
        </div>
    </div>
</div>
  )
}
