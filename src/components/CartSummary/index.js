import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-bg-con">
          <h1 className="total-order-des">
            Order Total: <span className="span-text">Rs {total}/-</span>
          </h1>
          <p className="total-item-des">{totalItems} Items in cart</p>
          <Link to="/billing">
            <button type="button" className="check-out-btn">
              CHECKOUT
            </button>
          </Link>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
