/* eslint-disable react/no-unknown-property */
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/cartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        // eslint-disable-next-line react/no-unknown-property
        <li className="cart-item" testid="cartItem">
          <div className="cart-item-info" testid="cartItem">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div>
            <h1 className="cart-item-mobile-name">{name}</h1>
          </div>
          <div className="cart-qty-container">
            <button
              className="decrement-quantity"
              type="button"
              onClick={decreaseQuantity}
              testid="decrement-quantity"
            >
              <BsDashSquare size={16} />
            </button>
            <p testid="item-quantity" className="item-quantity">
              {quantity}
            </p>
            <button
              className="increment-quantity"
              type="button"
              onClick={increaseQuantity}
              testid="increment-quantity"
            >
              <BsPlusSquare size={16} />
            </button>
          </div>

          <div>
            <p className="price" testid="total-price">
              <FaRupeeSign size={12} /> {cost * quantity}
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
