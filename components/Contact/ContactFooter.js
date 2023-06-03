import Image from 'next/image';
import Link from 'next/link';

const ContactFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area footer__black ">
               <div className="footer__top black-bg-5 pt-95 pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-1 mb-50">
                              <div className="footer__logo">
                                 <div className="logo">
                                    <Link href="/">
                                       <a >
                                          <img src="/assets/img/logo/logo-white.png" alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__widget-info">
                                    <p>Go Abroad Consult is an educational study abroad consult that specializes in helping students pursue their academic goals and career in the United States.</p>
                                    <div className="footer__social">
                                       <h4>Follow Us</h4>

                                       <ul>
                                          <li><a target="_blank" rel='noreferrer' href="https://web.facebook.com/profile.php?id=100092540997206" className="fb" ><i className="fa-brands fa-facebook-f"></i></a></li>
                                          <li><a target="_blank" rel='noreferrer' href="https://www.instagram.com/goabroadconsult/" className="tw" ><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a target="_blank" rel='noreferrer' href="https://www.tiktok.com/@goabroadconsult?lang=en" className="pin" ><i className="fa-brands fa-pinterest-p"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                           <div className="footer__widget mb-50">
                              <h3 className="footer__widget-title">Explore</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <Link href="/about">About us</Link>
                                    </li>
                                    <li>
                                       <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                       <Link href="/contact">Contact us</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                           <div className="footer__widget mb-50">
                              <h3 className="footer__widget-title">Links</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <Link href="/blog">News & Blogs</Link>
                                    </li>
                                    
                                    
                                    <li>
                                       <a href="#">Terms of service</a>
                                    </li>
                                    
                                    <li>
                                       <a target="_blank" rel='noreferrer' href="https://calendly.com/goabroadconsult2023/consult">Schedule Appointment</a>
                                    </li>
                                    
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-4 mb-50">
                              <h3 className="footer__widget-title">Newsletter</h3>

                              <div className="footer__subscribe">
                                 <p>Receive weekly newsletter with educational materials, popular books and much more!</p>
                                 <form action="#">
                                    <div className="footer__subscribe-input">
                                       <input type="text" placeholder="Email" />
                                       <button type="submit" className="tp-btn-subscribe">Subscribe</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom black-bg-5">
                  <div className="container">
                     <div className="footer__bottom-inner">
                        <div className="row">
                           <div className="col-xxl-12">
                              <div className="footer__copyright text-center">
                                 <p>© 2023 Go Abroad Consult. All Rights Reserved</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default ContactFooter;