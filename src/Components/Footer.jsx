import './Footer.css'

const Footer = ()=>{
    return(
        <div className="main-footer-div">
            <div>
                <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                </ul>
            
            </div>
            <div>
            <p>© 2024 Farm2Kitchen. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer