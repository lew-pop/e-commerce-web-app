import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import ProductGridNine from "./ProductGridNine";

const ProductSliderFour = ({ spaceBottomClass, category }) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitleSeven
          titleText="The Cage SShop"
          subtitleText="Vapes, Smoke, and Accessories."
          spaceClass="mb-55"
          borderClass="no-border"
          positionClass="text-center"
        />
        <div className="row">
          <ProductGridNine
            category={category}
            limit={6}
            type="new"
          />
        </div>
        <div className="row">
          <ProductGridNine
            category={category}
            limit={6}
            type="new"
          />
        </div>
        <div className="row">
          <ProductGridNine
            category={category}
            limit={6}
            type="new"
          />
        </div>
        <div className="row">
          <ProductGridNine
            category={category}
            limit={6}
            type="new"
          />
        </div>
      </div>
    </div>
  );
};

ProductSliderFour.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSliderFour;
