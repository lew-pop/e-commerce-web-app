import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import SectionTitleFour from "../../components/section-title/SectionTitleFour";

import ProductGridTwelve from "./ProductGridTwelve";

const MyProductSlider = ({ spaceBottomClass, category, colorClass, modelName }) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass, colorClass)}>
      <div className="container">
        <SectionTitleSeven
          titleText="Products"
          subtitleText="Vape Products"
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
       <SectionTitleFour
        titleText={modelName}
        positionClass="text-center"
        customClass="my-product-title"
       />
        <ProductGridTwelve
          category={category}
          limit={20}
          colorClass={colorClass}
        />
      </div>
    </div>
  );
};

MyProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default MyProductSlider;
