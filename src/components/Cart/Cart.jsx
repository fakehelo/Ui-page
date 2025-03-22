import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, food_list, remove } = useContext(StoreContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [upiID, setUpiID] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null); // State to track the selected payment method

  useEffect(() => {
    let total = 0;
    food_list.forEach(item => {
      if (cartItems[item._id] > 0) {
        total += item.price * cartItems[item._id];
      }
    });
    setTotalAmount(total);
  }, [cartItems, food_list]);

  const handleUpiIDChange = (e) => {
    setUpiID(e.target.value);
  };

  const handlePayment = () => {
    if (!upiID) {
      setErrorMessage('Please enter a valid UPI ID');
      return;
    }

    const successChance = Math.random();
    console.log(`Simulating payment for UPI ID: ${upiID}, Random Chance: ${successChance}`);

    if (successChance > 0.5) {
      setPaymentStatus('success');
      setErrorMessage('');
    } else {
      setPaymentStatus('failure');
      setErrorMessage('Payment failed! Please try again later.');
    }
  };

  // Handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  // Back to payment method selection
  const handleBackToPaymentOptions = () => {
    setPaymentMethod(null);
  };

  return (
    <>
      <div className="cart" id="cart">
        <div className="cart-items">
          <div className="cart-description">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr id="line" />
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="cart-item-info">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p id="remove-item" onClick={() => remove(item._id)}>
                    x
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h1>Cart Total</h1>
          <div className="cart-total-info">
            <p>Subtotal:</p>
            <p id="subtotal">{totalAmount}</p>
          </div>
          <hr />
          <div className="cart-total-info">
            <p>Delivery Fee:</p>
            <p id="fee">{2}</p>
          </div>
          <hr />
          <div className="cart-total-info">
            <p>Total:</p>
            <p id="total">{totalAmount + 2}</p>
          </div>

          {/* Proceed to Checkout Button */}
          {!paymentMethod ? (
            <button id="checkout" onClick={() => setPaymentMethod('select')}>
              Proceed to Checkout
            </button>
          ) : paymentMethod === 'select' ? (
            <div className="payment-options">
              <h3>Select Payment Method</h3>
              <button className="upi-btn gpay" onClick={() => handlePaymentMethodSelect('gpay')}>
                <i className="fab fa-google-pay"></i> Google Pay
              </button>
              <button className="upi-btn paytm" onClick={() => handlePaymentMethodSelect('paytm')}>
                <i className="fab fa-paytm"></i> Paytm
              </button>
            </div>
          ) : (
            <div className="upi-payment">
              <button className="back-button" onClick={handleBackToPaymentOptions}>
                Back to Payment Options
              </button>

              <label htmlFor="upi-id">Enter UPI ID:</label>
              <input
                type="text"
                id="upi-id"
                value={upiID}
                onChange={handleUpiIDChange}
                placeholder="example@upi"
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              
              {/* UPI Payment Button */}
              <button className="upi-btn payment" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          )}

          {paymentStatus && (
            <div className={`payment-status ${paymentStatus}`}>
              {paymentStatus === 'success' ? (
                <h3>Payment Successful! Your order has been placed.</h3>
              ) : (
                <h3>Payment Failed. Please try again later.</h3>
              )}
            </div>
          )}
        </div>

        <div className="promocode">
          <p>If you have a promo code, enter it here</p>
          <input type="text" placeholder="Promo Code" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
