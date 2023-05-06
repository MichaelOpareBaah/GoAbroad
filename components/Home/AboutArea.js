import Link from 'next/link';

const AboutArea = ({ about_pt = '' }) => {
   return (
      <>
         <section className={`about__area pb-120 p-relative ${about_pt && about_pt}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-7">
                     <div className="about__thumb-wrapper d-sm-flex mr-20 p-relative">
                        <div className="about__shape">
                           <img className="about__shape-1 d-none d-sm-block" src="assets/img/about/about-shape-1.png" alt="" />
                           <img className="about__shape-2 d-none d-sm-block" src="assets/img/about/about-shape-2.png" alt="" />
                           <img className="about__shape-3" src="assets/img/about/about-shape-3.png" alt="" />
                        </div>
                        <div className="about__thumb-left mr-10">
                           <div className="about__thumb-1 mb-10">
                              <img src="assets/img/about/about-1.jpg" alt="" />
                           </div>
                           <div className="about__thumb-1 mb-10 text-end">
                              <img src="assets/img/about/about-3.jpg" alt="" />
                           </div>
                        </div>
                        <div className="about__thumb-2 mb-10">
                           <img src="assets/img/about/about-2.jpg" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-5">
                     <div className="about__content pl-70 pr-25">
                        <div className="section__title-wrapper mb-15">
                           <span className="section__title-pre">BEST EDUCATIONAL CONSULT</span>
                           <h2 className="section__title">Welcome to Go Abroad Consult</h2>
                        </div>
                        <p>Go Abroad Consult is an educational study abroad consult that specializes in helping students pursue their academic goals and career in the United States. We provide first hand US based curriculum guidance, school selection and application, intensive visa interview preparation, pre and post arrival preparation, and all the necessary Steps and guidance you'll need to settle in the United States as an international student. We are bound by a team of committed specialized education analysts, professors, admission recruiters, visa consulting agents and financial deputies who make your sure your transition to the United states is hassle free and as smooth as it can be!.  </p>

                        

                        <div className="about__btn">
                           <Link href="/about">
                              <a className="tp-btn tp-btn-2">Read more</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutArea;