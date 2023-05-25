import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([ Pagination]);

const Testimonials = () => {
   // testimonialData
   const testimonialData = [
     
      {
         id: 1,
         img: 'assets/img/testimonial/testimonial-2.jpeg',
         review: 'Go Abroad Consult is an amazing program that helped me with my plans on studying abroad. They made the process really stress-free and with absolute simplicity. There was no lack of proper communication as I was able to get subsequent information on every stage of the process. If you’re looking for any program to help you with this process, you’re at the right place.',
         name: 'David Ebe',
         title: 'Student'
      },
      {
         id: 2,
         img: 'assets/img/testimonial/testimonial-1.jpeg',
         review: 'Go Abroad Consult worked with me through my process of study abroad. They made it easy and they were super good at communicating. They helped through the visa process, traveling process, and also helped me settle in my school.',
         name: 'Daniella Obot',
         title: 'Student'
      },
      {
         id: 3,
         img: 'assets/img/testimonial/testimonial-3.jpg',
         review: 'I was looking for a trusted agency to handle my admission, and visa process. I found “Go abroad consult” which made it easier than I thought the process would be. They took care of every little detail, and made sure to inform me about everything I needed to know. If you are looking for a well trusted, and professional agency, Go abroad consult should be your go to.',
         name: 'Diane Sandrine Kabore',
         title: 'Student'
      },
      {
         id: 4,
         img: 'assets/img/testimonial/testimonial-1.jpeg',
         review: 'Go Abroad Consult is an amazing program that helped me with my plans on studying abroad. They made the process really stress-free and with absolute simplicity. There was no lack of proper communication as I was able to get subsequent information on every stage of the process. If you’re looking for any program to help you with this process, you’re at the right place.',
         name: 'Daniella Obot',
         title: 'Student'
      },
      {
         id: 5,
         img: 'assets/img/testimonial/testimonial-2.jpeg',
         review: 'Go Abroad Consult is an amazing program that helped me with my plans on studying abroad. They made the process really stress-free and with absolute simplicity. There was no lack of proper communication as I was able to get subsequent information on every stage of the process. If you’re looking for any program to help you with this process, you’re at the right place.',
         name: 'David Ebe',
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
                                          <p>{testimonial.review}</p>
                                          
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