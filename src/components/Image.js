import React, {useState, useContext} from "react";
import PropTypes from 'prop-types';
import {Context} from "../Context"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false);
    const [isInCart, setIsInCart] = useState(false);
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context);
    function handleCartClick (img) {
        if (isInCart) {
            removeFromCart(img.id);

        } else {
            addToCart(img);
        }
        setIsInCart(prev => !prev);
    }

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }

    }
    function cartIcon() {
        if(isInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => handleCartClick(img)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => handleCartClick(img)}></i>
        }
    }



    return (
        <div
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
