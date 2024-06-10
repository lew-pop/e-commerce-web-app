import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import CategoryFourSlider from "../../wrappers/category/CategoryFourSlider";
import MyProductSlider from "../../wrappers/product/MyProductSlider";
import MySlider from "../../wrappers/product/MySlider";


const Home = () => {
  
  return (
    <Fragment>
      <SEO
        titleTemplate="The Cage SShop Home"
        description="The Cage SShop, Vapes, E-Liquids, Disposable, E-Cigarettes."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* category */}
        <CategoryFourSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* os5000 product slider */}
        <MyProductSlider
          category="os5000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
        />
       
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
