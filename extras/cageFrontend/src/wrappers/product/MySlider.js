import PropTypes from "prop-types";
import clsx from "clsx";
import ProductGridTwelve from "./ProductGridTwelve";

const MySlider = ({ spaceBottomClass, category, colorClass }) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
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
