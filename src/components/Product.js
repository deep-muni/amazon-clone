import React from 'react';
import './Product.css';

function Product({id, title, price, image, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map(i => {
                            return <span role="img" aria-label="star">⭐</span> 
                        })
                    }
                </div>
            </div>
            <img src={image} alt="" className="product__image"/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product

