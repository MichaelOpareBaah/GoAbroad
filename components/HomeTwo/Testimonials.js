import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([ Pagination]);

const Testimonials = () => {
   // testimonialData
   const testimonialData = [
      {
         id: 1,
         img: 'assets/img/testimonial/testimonial-1.jpg',
         review: 'Great Service!',
         name: 'Eunice Yeboah',
         title: 'Student'
      },
      {
         id: 2,
         img: 'assets/img/testimonial/testimonial-2.jpg',
         review: 'Great Service!',
         name: 'Gladys Yeboah',
         title: 'Student'
      },
      {
         id: 3,
         img: 'assets/img/testimonial/testimonial-3.jpg',
         review: 'Great Service!',
         name: 'Eunice Yeboah',
         title: 'Student'
      },
      {
         id: 4,
         img: 'assets/img/testimonial/testimonial-4.jpg',
         review: 'Great Service!',
         name: 'Eunice Yeboah',
         title: 'Student'
      },
      {
         id: 5,
         img: 'assets/img/testimonial/testimonial-2.jpg',
         review: 'Code Quality!',
         name: 'Eunice Yeboah',
         title: 'Student'
      },
   ]
   return (
      <>
         <section className="testimonial__area pt-80 pb-120 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 mb-40 text-center">
                        <span className="section__title-pre-2">Testimonials</span>
                        <h3 className="section__title-2">What our students Say.</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="testimonial__slider">

                        <Swiper
                           spaceBetween={30}
                           slidesPerView={1}
                           className='testimonial__slider'
                           pagination={{ clickable: true }}
                           autoplay={{ delay: 6000 }}
                           breakpoints={{
                              550: {
                                 slidesPerView: 1,
                              },
                              768: {
                                 slidesPerView: 2,
                              },
                              992: {
                                 slidesPerView: 3,
                              },
                           }}
                        >

                           {
                              testimonialData.map(testimonial => {
                                 return <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial__item transition-3 text-center white-bg">
                                       <div className="testimonial__avater">
                                          <img src={testimonial.img} alt="" />
                                       </div>
                                       <div className="testimonial__text">
                                          <h4>{testimonial.review}</h4>
                                          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare.</p>
                                       </div>
                                       <div className="testimonial__avater-info mb-5">
                                          <h3>{testimonial.name}</h3>
                                          <span>{testimonial.title}</span>
                                       </div>
                                       <div className="testimonial__rating">
                                          <ul>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                             <li>
                                                <a href="#"><i className="fa-solid fa-star"></i></a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </SwiperSlide>
                              })
                           }

                        </Swiper>

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Testimonials;