import PropTypes from "prop-types";

import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualFlavors,
  getProductsIndividualBrands,
  setActiveSort
} from "../../helpers/product";

const ShopTopFilter = ({ products, getSortParams }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueFlavors = getIndividualFlavors(products);
  const uniqueBrands = getProductsIndividualBrands(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className="product-filter-wrapper" id="product-filter-wrapper">
      <div className="product-filter-wrapper__inner">
        <div className="row">
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Categories</h5>
              {uniqueCategories ? (
                <ul>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("category", category);
                            setActiveSort(e);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>

          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Flavor</h5>
              {uniqueFlavors ? (
                <ul>
                  {uniqueFlavors.map((flavor, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("flavor", flavor);
                            setActiveSort(e);
                          }}
                        >
                          {flavor}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No flavors found"
              )}
            </div>
          </div>
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Brand</h5>
              {uniqueBrands ? (
                <ul>
                  {uniqueBrands.map((brand, key) => {
                    return (
                      <li key={key}>
                        <button
                          className="text-uppercase"
                          onClick={e => {
                            getSortParams("brand", brand);
                            setActiveSort(e);
                          }}
                        >
                          {brand}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No brands found"
              )}
            </div>
          </div>
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter product-filter--tag">
              <h5>Tag</h5>
              {uniqueTags ? (
                <ul>
                  {uniqueTags.map((tag, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("tag", tag);
                            setActiveSort(e);
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No tags found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array
};

export default ShopTopFilter;
