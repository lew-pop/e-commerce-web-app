import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";

const ProductGridSingleTwelve = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass,
  colorClass,
  titlePriceClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap-2", spaceBottomClass, colorClass)}>
        <div className="product-title"></div>
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.image[0]}
              alt=""
            />
            {product.image.length > 1 ? (
              <img
                className="hover-img"
                src={process.env.PUBLIC_URL + product.image[1]}
                alt=""
              />
            ) : (
              ""
            )}
          </Link>
          {product.discount || product.new ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="purple">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="pink">New</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action-2">
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Buy now"
              >
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </a>
            ) : product.variation && product.variation.length >= 1 ? (
              <Link
                to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                title="Select options"
              >
                <i className="fa fa-cog"></i>
              </Link>
            ) : product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                className={
                  cartItem !== undefined && cartItem.quantity > 0
                    ? "active"
                    : ""
                }
                disabled={cartItem !== undefined && cartItem.quantity > 0}
                title={cartItem !== undefined ? "Added to cart" : "Add to cart"}
              >
                {" "}
                <i className="fa fa-shopping-cart"></i>{" "}
              </button>
            ) : (
              <button disabled className="active" title="Out of stock">
                <i className="fa fa-shopping-cart"></i>
              </button>
            )}

            <button onClick={() => setModalShow(true)} title="Quick View">
              <i className="fa fa-eye"></i>
            </button>
          </div>
        </div>
        <div className="product-content-2">
          <div
            className={`title-price-wrap-2 ${
              titlePriceClass ? titlePriceClass : ""
            }`}
          >
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </Link>
            </h3>
            <div className="price-2">
              {discountedPrice !== null ? (
                <Fragment>
                  <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
                  <span className="old">
                    {currency.currencySymbol + finalProductPrice}
                  </span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + finalProductPrice} </span>
              )}
            </div>
          </div>
          <div className="my-pro-cart-2">
            {product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                className={
                  cartItem !== undefined && cartItem.quantity > 0
                    ? "active"
                    : ""
                }
                disabled={cartItem !== undefined && cartItem.quantity > 0}
                title={cartItem !== undefined ? "Added to cart" : "Add to cart"}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>{" "}
              </button>
            ) : (
              <button disabled className="active" title="Out of stock">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </button>
            )}
          </div>
          <div className="pro-wishlist-2">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => dispatch(addToWishlist(product))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor" //I like that #FF3EA5
                class="bi bi-hearts"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridSingleTwelve.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
};

export default ProductGridSingleTwelve;
