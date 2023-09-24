import Header from '../Header'
import CartContext from '../../context/CartContext'
import './index.css'

const Billing = () => (
    <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      let discount = 0;
      let promocode = 0;
      return (
        <>
          <Header />
          <div className='billing-main-container'>
            <div className="billing-container">
              <div className="address-container">
                  <h3 className='address-title'>Enter Delivery Address</h3>
                  <div className='address-sub-container'>
                      <input className='custom-input' id="name" placeholder='Name' type='text' />
                      <input className='custom-input' id="mobileNumber" placeholder='10-digit mobile number' type='text' />
                  </div>
                  <div className='address-sub-container'>
                      <input className='custom-input' id="Area" placeholder='Pincode' type='text' />
                      <input className='custom-input' id="Area" placeholder='Locality' type='text' />
                  </div>
                  <div className='address-sub-container'>
                      <textarea className='custom-input-street' id="name" placeholder='Address (Area and Street)' type='text-area' ></textarea>
                  </div>
                  <div className='address-sub-container'>
                      <input className='custom-input' id="City" placeholder='City/District/Town' type='text' />
                      <input className='custom-input' id="State" placeholder='State' type='text' />
                  </div>
                  <div className='address-sub-container'>
                      <input className='custom-input' id="Landmark" placeholder='Landmark (Optional)' type='text' />
                      <input className='custom-input' id="Landmark" placeholder='Alternative Phone (Optional)' type='text' />
                  </div>
                  <p className='address-type'>Address Type</p>
                  <div className='address-type-container'>
                      <div>
                        <input name='address' className='radio-input' id="Home" type='radio' />
                        <label className='custom-lebel' htmlFor="Home">Home (All day delivery)</label>
                      </div>
                      <div>
                        <input name='address' className='radio-input' id="Office" type='radio' />
                        <label className='custom-lebel' htmlFor="Office">Work (Delivery Between 10 AM - 5 PM)</label>
                      </div>
                  </div>
              </div>
              <div className="payment-container">
                  <h3 className='payment-title'>Payment Details</h3>
                  <div className='payment-card-container'>
                    <h3 className='card-type'>Credit / Debit / ATM Card</h3>
                    <input className='card-details' placeholder='Enter Card Number' type='text' />
                    <div className=''>
                    <h5 className='valid-thru'>Valid Thru</h5>
                    <select className='card-details-valid-thru' id="monthSelect">
                        <option value="01">MM</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>

                    </select>
                    <select className='card-details-valid-thru' id='yearSelect'>
                        <option value="01">YY</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="39">40</option>
                    </select>
                      <input className='card-details-cvv' type='text' placeholder='CVV' />
                    </div>
                  </div>
                  <div className='payment-sub-container'>
                    <div className='total-container'>
                      <h3 className='summary-title'>Order Summary</h3>
                      <div className='promo-container'>
                        <input type='text' className='promocode-input' placeholder='Promocode' /> 
                        <button className='apply-btn' type='button'>Apply</button>
                      </div>
                      <div className='offer-container'>
                        <p className='sub-total'>Subtotal:</p>
                        <p className='sub-total'>Rs. {total}/-</p>
                      </div>
                      <div  className='offer-container'>
                        <p className='discount'>Discount:</p>
                        <p className='sub-total'>Rs. {discount}/-</p>
                      </div>
                      <div  className='offer-container'>
                        <p className='promocode'>Promocode:</p>
                        <p className='sub-total'>Rs. {promocode}/-</p>
                      </div>
                      <div  className='offer-container'>
                        <p className='total'>Total:</p>
                        <p className='sub-total'>Rs. {total}/-</p>
                      </div>
                    </div>
                    <button className='pay-button' type='button'>Pay Rs. {total}/-</button>
                  </div>
                </div>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Billing