import PropTypes from "prop-types";
import { Fragment } from "react";
import FooterOne from "../wrappers/footer/FooterOne";
import ScrollToTop from "../components/scroll-to-top"
import HeaderThree from "../wrappers/header/HeaderThree";

const LayoutOne = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass
}) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterOne
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutOne;
