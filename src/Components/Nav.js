import React from 'react'
import './Nav.css'

function Nav  ()  {
  return (
    
    <nav className="flex-container">

            <a href="/"><img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="three lines" width="50" height="30" className="threelines"/>
            </a>

            <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" alt="Udemy" width="91" height="34" className="udemy"/></a>

            <a href="/teaching/?ref=teach_header" className="categories">
                <span>Categories</span>
            </a>

            
                <a href="/teaching/?ref=teach_header" className="searchimg">
                <button type="submit" id="buttonsearch"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" alt="serch" width="24" height="24"/>
                </a>
           

            <input id="searchbar" type="text" placeholder="Search for anything" value="" role="combobox" className="search"/>

            <div className="upsidebar">
                <a href="/teaching/?ref=teach_header">
                    <span>Udemy Business</span>
                </a>


                <a href="/teaching/?ref=teach_header">
                    <span>Teach on Udemy</span>
                </a>
            </div>

            <a href="/cart/" className="cart">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Antu_amarok_cart_view.svg" alt="cart" width="26" height="26"/>
            </a>


            <div className="loginsmall">
                <a href="https://www.udemy.com/join/login-popup/?locale=en_US&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2F" className="login">
                    <span>Log in</span>
                </a>
            </div>

            <div className="signupsmall">
                <button className="signup">
                    Sign up </button>
                </div>

                <div className="earthsmall">
                    <a href="/earth/" className="earth">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Cib-realm_%28CoreUI_Icons_v1.0.0%29.svg" alt="earth" width="21" height="19"/>
                    </a>
                </div>

            </nav>

  )
}
export default Nav
