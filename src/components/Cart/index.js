import {Component} from 'react'

import NavBar from '../NavBar'
import Footer from '../Footer'

import CartContext from '../../context/cartContext'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          return (
            <>
              <NavBar />
              <div className="cart-container">
                {isCartEmpty ? <EmptyCartView /> : <CartListView />}
              </div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
