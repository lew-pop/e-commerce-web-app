import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const Home = lazy(() => import("./pages/Home"));


// shop pages
const ShopGridStandard = lazy(() => import("./pages/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/ShopGridFilter"));
const ShopFilteredGrid = lazy(() => import("./pages/ShopFilteredGrid"));
const ShopBrandGrid = lazy(() => import("./pages/ShopBrandGrid"));




// product pages
const Product = lazy(() => import("./pages/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/ProductTabLeft")
);

const ProductSticky = lazy(() => import("./pages/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/ProductFixedImage")
);

// blog pages
const BlogNoSidebar = lazy(() => import("./pages/BlogNoSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MyAccount = lazy(() => import("./pages/MyAccount"));
const LoginRegister = lazy(() => import("./pages/LoginRegister"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
                element={<Home/>}
              />
             

              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                element={<ShopGridStandard/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                element={<ShopGridFilter/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/shop-filtered-grid/:id"}
                element={<ShopFilteredGrid/>}
              />
             <Route
                path={process.env.PUBLIC_URL + "/shop-brand-grid/:id"}
                element={<ShopBrandGrid/>}
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
                path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                element={<BlogNoSidebar/>}
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