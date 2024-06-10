import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const Home = lazy(() => import("./pages/home/Home"));


// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopFilteredGrid = lazy(() => import("./pages/shop/ShopFilteredGrid"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));


// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<Home/>}
              />

              {/* Homepages */}
              <Route
                path={process.env.PUBLIC_URL + "/home"}
                element={<Home />}
              />
              

              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                element={<ShopGridStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-filtered-grid/:id"}
                element={<ShopFilteredGrid/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                element={<ShopGridFilter/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-list-standard"}
                element={<ShopListStandard/>}
              />
             
            

              {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                element={<Product />}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                element={<ProductTabLeft/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                element={<ProductTabRight/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                element={<ProductSticky/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-slider/:id"}
                element={<ProductSlider/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                element={<ProductFixedImage/>}
              /> 

              {/* Blog pages */}
              <Route
                path={process.env.PUBLIC_URL + "/blog-standard"}
                element={<BlogStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                element={<BlogNoSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                element={<BlogRightSidebar/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/blog-details-standard"}
                element={<BlogDetailsStandard/>}
              /> 

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                element={<About/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                element={<MyAccount/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                element={<LoginRegister/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                element={<Cart/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                element={<Wishlist/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/compare"}
                element={<Compare/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                element={<Checkout/>}
              /> 

              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;