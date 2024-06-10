import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualFlavors,
  getProductsIndividualBrands
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopFlavor from "../../components/product/ShopFlavor";
import ShopBrand from "../../components/product/ShopBrand";
import ShopTag from "../../components/product/ShopTag";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueFlavors = getIndividualFlavors(products);
  const uniqueBrands = getProductsIndividualBrands(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />

      {/* filter by flavor */}
      <ShopFlavor flavors={uniqueFlavors} getSortParams={getSortParams} />

      {/* filter by brand */}
      <ShopBrand brands={uniqueBrands} getSortParams={getSortParams} />

      {/* filter by tag */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
