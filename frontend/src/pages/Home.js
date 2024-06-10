import React, { Fragment } from "react";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import NewsletterThree from "../wrappers/newsletter/NewsletterThree";
import HeroSliderTen from "../wrappers/hero-slider/HeroSliderTen";
import CategoryFourSlider from "../wrappers/category/CategoryFourSlider";
import MyProductSlider from "../wrappers/product/MyProductSlider";
import MySlider from "../wrappers/product/MySlider";


const Home = () => {
  
  return (
    <Fragment>
      <SEO
        title="The Cage SShop"
        titleTemplate="Home Page"
        description="The Cage SShop, Vapes, E-Liquids, Disposable Vapes, E-Cigarettes."
      />
      <LayoutOne
       
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* category */}
        <CategoryFourSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* pebble product slider */}
        <MyProductSlider
          category="pebble"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Flum Pebble&nbsp;"
        />
         {/* float product slider */}
         <MySlider
          category="float"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Flum Float&nbsp;"
        />
         {/* gio product slider */}
         <MySlider
          category="gio"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Flum Gio&nbsp;"
        />
         {/* os5000 product slider */}
         <MySlider
          category="os5000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Lost Mary OS5000&nbsp;"
        />
         {/* mo5000 product slider */}
         <MySlider
          category="mo5000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Lost Mary MO5000&nbsp;"
        />
         {/* mt15000 product slider */}
         <MySlider
          category="mt15000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Lost Mary MT15000&nbsp;"

        />
         {/* primeBar product slider */}
         <MySlider
          category="primeBar"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Prime Bar 8000&nbsp;"
        />
        {/* bc5000 product slider */}
        <MySlider
          category="bc5000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Elf Bar BC5000&nbsp;"
        />
         {/* ultra product slider */}
         <MySlider
          category="ultra"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Elf Bar Ultra BC5000&nbsp;"
        />
        
         {/* bugatti product slider */}
         <MySlider
          category="bugatti"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Bugatti Spaceship&nbsp;"
        />
        
        
       
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
