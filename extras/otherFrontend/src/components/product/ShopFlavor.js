import PropTypes from "prop-types";

import { setActiveSort } from "../../helpers/product";

const ShopFlavor = ({ flavors, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Flavor </h4>
      <div className="sidebar-widget-list mt-20">
        {flavors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("flavor", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Flavors{" "}
                </button>
              </div>
            </li>
            {flavors.map((flavor, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getSortParams("flavor", flavor);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {flavor}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No flavors found"
        )}
      </div>
    </div>
  );
};

ShopFlavor.propTypes = {
  flavors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopFlavor;
