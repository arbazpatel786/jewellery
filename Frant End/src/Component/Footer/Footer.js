import './Footer.css';

const Footer = ()=>{
    return (
        <>
        <footer>
      <div class="footer py-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-md-start text-center text-lg-start"> 
              <div class="footer-logo text-muted mb-3 mb-md-0"> 
                © 2022. TOTAL CODING . All rights reserved.
              </div>
            </div>
            <div class="col-md-6 text-center text-lg-end">
              <div class="footer-social pt-1">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}
export default Footer;