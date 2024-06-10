import PropTypes from "prop-types";
import clsx from "clsx";
import ProductGridTwelve from "./ProductGridTwelve";
import SectionTitleFour from "../../components/section-title/SectionTitleFour";

const MySlider = ({ spaceBottomClass, category, colorClass, modelName }) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
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

MySlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default MySlider;
