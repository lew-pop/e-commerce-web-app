import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import ProductGridTwelve from "./ProductGridTwelve";

const MyProductSlider = ({ spaceBottomClass, category, colorClass }) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitleSeven
          titleText="Our Products"
          subtitleText="Vapes and Smoking Accessories."
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
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
