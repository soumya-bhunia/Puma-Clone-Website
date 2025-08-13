import React from 'react'
import logo from './assets/puma.png'
import 'remixicon/fonts/remixicon.css'
import one from './assets/one.png'
import two from './assets/two.png'
import InfiniteTimer from './Components/Timer';
import t_one from './assets/three-one.png';
import t_two from './assets/three-two.png';
import t_three from './assets/three-three.png';
import t_four from './assets/three-four.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';
import s_one from './assets/six-one.png';
import s_two from './assets/six-two.png';
import s_three from './assets/six-three.png';
import s_four from './assets/six-four.png';
import e_one from './assets/eight-one.png';
import e_two from './assets/eight-two.png';
import e_three from './assets/eight-three.png';
import e_four from './assets/eight-four.png';
import e_five from './assets/eight-five.png';
import n_one from './assets/nine-one.png';
import n_two from './assets/nine-two.png';
import n_three from './assets/nine-three.png';
import n_four from './assets/nine-four.png';
import card from './assets/cards.png';
import ind from './assets/india.png';


function App() {
  return (
    <>
      <div className="main">
        <nav>
          <img src={logo} alt="logo" />
          {/* <h1>Puma</h1> */}
          <span1>
          <div className="under"></div>
          <h3>New</h3>
          <i className="ri-arrow-down-double-line"></i>
          </span1>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Sports</h3>
          <h3>Motorsport</h3>
          <h3>Lifestyle</h3>
          <h3>Kids</h3>
          <h3>Sale</h3>
          <h3>Nitro</h3>
          <button>
            <i className="ri-search-2-line"></i>
            SEARCH
          </button>
          <i className="i ri-heart-line"></i>
          <i className="i ri-shopping-cart-line"></i>
          <i className="i ri-user-3-line"></i>
        </nav>

        <div className="one">
            <img src={one} alt="one bg" />
            <div className="time">
              <h1>UP TO 50% + EXTRA 15% OFF</h1>
              <p>Discount auto-applied at checkout</p>
              <p>Ends in</p>
              <InfiniteTimer/>
              <div className="buts">
              <button>FOR HIM</button>
              <button>FOR HER</button>
              <button>FOR KIDS</button>
              </div>
            </div>
        </div>

        <div className="one-under">
          <h1>STEAL THE DEALS- EXTRA 15% OFF</h1>
        </div>

        <div className="two">
            <img src={two} alt="two bg" />
            <div className="buts-2">
              <button>FOR HIM</button>
              <button>FOR HER</button>
            </div>
        </div>

        <div className="two-under">
          <h1>ICONS, REINVENTED</h1>
          <h3>SHOP THE LATEST & GREATEST</h3>
        </div>

        <div className="three">
          <img src={t_one} alt="" />
          <img src={t_two} alt="" />
          <img src={t_three} alt="" />
          <img src={t_four} alt="" />
        </div>

        <div className="four">
          <img src={four} alt="" />
          <div className="buts-3">
              <button>SIGN UP NOW</button>
          </div>
        </div>

        <div className="five">
          <img src={five} alt="" />
          <div className="buts-4">
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="six">
          <img src={six} alt="" />
          <div className="buts-5">
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="six-under">
          <h1>STEP INTO THE SPOTLIGHT</h1>
          <h3>THE NEW DROP SHINES BRIGHT</h3>
        </div>

        <div className="seven">
          <img src={s_one} alt="" />
          <img src={s_two} alt="" />
          <img src={s_three} alt="" />
          <img src={s_four} alt="" />          
        </div>

        <div className="seven-under">
          <h2>GEAR UP FOR SPORTS</h2>
        </div>

        <div className="eight">
          <img src={e_one} alt="" />
          <img src={e_two} alt="" />
          <img src={e_three} alt="" />
          <img src={e_four} alt="" />
          <img src={e_five} alt="" />
        </div>

        <div className="eight-under">
          <h2>STEP INTO STYLE</h2>
        </div>

        <div className="nine">
          <img src={n_one} alt="" />
          <img src={n_two} alt="" />
          <img src={n_three} alt="" />
          <img src={n_four} alt="" />          
        </div>

        <div className="nine-under">
        </div>

        <div className="footer">

          <div className="up">

            <div className="col1">
              <h1>SUPPORT</h1>
              <h4>Contact us</h4>
              <h4>Promotions & Sale</h4>
              <h4>Track Order</h4>
              <h4>Shoe Care</h4>
              <h4>Tech Glossary</h4>
              <h4>Initiate Return / Exchange</h4>
              <h4>Sneakers</h4>
              <h4>Nitro</h4>
              <h4>Sitemap</h4>
            </div>

            <div className="col2">
              <h4>FAQs</h4>
              <h4>My Account</h4>
              <h4>Exchange & Return Policy</h4>
              <h4>Privacy Policy</h4>
              <h4>Terms & Conditions</h4>
              <h4>Shoes</h4>
              <h4>Running Shoes</h4>
              <h4>End of Season Sale</h4>
              <h4>Cookie Settings</h4>
            </div>

            <div className="col3">
              <h1>ABOUT</h1>
              <h4>GO WILD</h4>
              <h4>Company</h4>
              <h4>Corporate News</h4>
              <h4>Press Center</h4>
              <h4>Investors</h4>
              <h4>Sustainbility</h4>
              <h4>Careers</h4>
              <h4>Store Locator</h4>
              <h4>PUMA Articles</h4>
            </div>

            <div className="col4">
              <h1>STAY UP TO DATE</h1>
              <div className="socials">
                <i class="ii ri-youtube-fill"></i>
                <i class="ii ri-twitter-x-line"></i>
                <i class="ii ri-pinterest-fill"></i>
                <i class="ii ri-instagram-line"></i>
                <i class="ii ri-facebook-circle-fill"></i>
              </div>
              <h1>EXPLORE</h1>
              <div className="buts10">
                <button>
                  <img src={logo} alt="" />
                  APP
                </button>
                <button>
                  <img src={logo} alt="" />
                  TRAC
                </button>
              </div>
            </div>

          </div>

          <div className="line"></div>

          <div className="down">
            <img src={card} alt="" />
            <button>
              <img src={ind} alt="" />
              <h1>INDIA</h1>
            </button>
            <span>
              <h2>© This is a Clone of the Official Puma Website.</h2>
              <h2>Made By Soumya Bhunia</h2>
            </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
