import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import AboutArea from "../../../components/Home/AboutArea";
import Header from "../../../components/Home/Header";
import HomeCourses from "../../../components/Home/HomeCourses";
import BrandArea from "../../../components/HomeTwo/BrandArea";
import TeamArea from "../../../components/HomeTwo/TeamArea";
import Testimonials from "../../../components/HomeTwo/Testimonials";
import SEO from "../../../components/seo";
import Vission from "../../../components/Home/Vission";

const About = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <Header />
      <BreadCrumb title="Services" subtitle="Services" />
      {/* <AboutArea about_pt="pt-120" /> */}
      <Vission />
      {/* <HomeCourses /> */}
      {/* <TeamArea /> */}
      {/* <Testimonials /> */}
      {/* <BrandArea /> */}
      <Footer />
    </>
  );
};

export default About;
