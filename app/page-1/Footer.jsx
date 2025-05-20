import React from 'react'

const Footer = () => {
  return (
 <footer>
        <div className="footer-grid">
            <div className="footer-col">
                <p>This is a third-party website offering free Unreal Engine and Unity assets. Not affiliated with Epic Games or Unity Technologies.</p>
            </div>
            <div className="footer-col">
                <h4>Categories</h4>
                <ul>
                    <li><a href="#">3D Models</a></li>
                    <li><a href="#">Materials & Textures</a></li>
                    <li><a href="#">Blueprints</a></li>
                    <li><a href="#">VFX & Particles</a></li>
                    <li><a href="#">Audio</a></li>
                    <li><a href="#">VR & AR</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Submit a Ticket</a></li>
                    <li><a href="#">Documentation</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Connect With Us</h4>
                <div className="social-links">
                    <a href="#"><i className="fab fa-discord"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="newsletter">
                    <h4>Stay Updated</h4>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2025 Free Game Engine Assets</p>
            <p>Third-Party Resource - Not affiliated with any game engine companies</p>
        </div>
    </footer>
  )
}

export default Footer;
