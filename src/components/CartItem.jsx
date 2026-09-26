import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
} from '../CartSlice';
import './CartItem.css';

function CartItem() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const calculateItemTotal = (item) => item.price * item.quantity;

    const calculateCartTotal = () =>
        cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };


    const handleContinueShopping = () => {
        navigate('/plants');
    };


    const closeModal = () => {
        setShowCheckoutModal(false);
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-container">
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added any plants yet. Let's fix that!</p>
                    <button
                        className="continue-shopping-btn"
                        onClick={handleContinueShopping}
                    >
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <header className="cart-header">
                <h1> Your Shopping Cart</h1>
                <p>
                    You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}{' '}
                    in your cart
                </p>
            </header>


            <div className="cart-items-list">
                {cartItems.map((item) => (
                    <div key={item.name} className="cart-item">

                        <div className="cart-item-image-wrapper">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-image"
                            />
                        </div>


                        <div className="cart-item-info">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <p className="cart-item-unit-price">
                                Unit price: ${item.price.toFixed(2)}
                            </p>
                        </div>


                        <div className="quantity-controls">
                            <button
                                className="qty-btn qty-decrease"
                                onClick={() => dispatch(decreaseQuantity(item.name))}
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>
                            <span className="qty-display">{item.quantity}</span>
                            <button
                                className="qty-btn qty-increase"
                                onClick={() => dispatch(increaseQuantity(item.name))}
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>


                        <div className="cart-item-total">
                            ${calculateItemTotal(item).toFixed(2)}
                        </div>


                        <button
                            className="delete-btn"
                            onClick={() => dispatch(removeItem(item.name))}
                            aria-label={`Remove ${item.name} from cart`}
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>


            <div className="cart-summary">
                <div className="cart-total-row">
                    <span className="cart-total-label">Total Cart Amount:</span>
                    <span className="cart-total-amount">
                        ${calculateCartTotal().toFixed(2)}
                    </span>
                </div>

                <div className="cart-actions">
                    <button
                        className="continue-shopping-btn"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                    <button className="checkout-btn" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>


            {showCheckoutModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Coming Soon!</h2>
                        <p>
                            Our checkout feature is still growing.
                            <br />
                            We're working hard to bring it to you very soon.
                        </p>
                        <button className="modal-close-btn" onClick={closeModal}>
                            Got it!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartItem;