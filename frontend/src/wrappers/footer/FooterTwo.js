import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const FooterTwo = ({
  backgroundColorClass,
  copyrightColorClass,
  spaceLeftClass,
  spaceRightClass,
  footerTopBackgroundColorClass,
  footerTopSpaceTopClass,
  footerTopSpaceBottomClass,
  footerLogo,
  backgroundImage
}) => {
  return (
    <footer
      className={clsx("footer-area", backgroundColorClass, spaceLeftClass, spaceRightClass, backgroundImage && "bg-img")}
      style={{
        backgroundImage: ` ${
          backgroundImage
            ? `url(${process.env.PUBLIC_URL + backgroundImage})`
            : `url()`
        }`
      }}
    >
      <div
        className={clsx("footer-top text-center", footerTopBackgroundColorClass, footerTopSpaceTopClass, footerTopSpaceBottomClass)}
      >
        <div className="container">
          <div className="footer-logo">
            <Link to={process.env.PUBLIC_URL}>
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL +
                  `${footerLogo ? footerLogo : "/assets/img/logo/logo.png"}`
                }
              />
            </Link>
          </div>
         
          <div className="footer-social">
            <ul>
              <li>
                <a href="//www.facebook.com">
                  <i className="facebook fa fa-facebook" />
                </a>
              </li>           
             
              <li>
                <a href="//www.twitter.com">
                  <i className="twitter fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="//www.instagram.com">
                  <i className="instagram fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <div className={clsx("copyright-2", copyrightColorClass)}>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="//www.github.com/lew-pop"
                rel="noopener noreferrer"
                target="_blank"
              >
                The Cage & Blossoms
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterTwo.propTypes = {
  backgroundColorClass: PropTypes.string,
  copyrightColorClass: PropTypes.string,
  footerLogo: PropTypes.string,
  backgroundImage: PropTypes.string,
  footerTopBackgroundColorClass: PropTypes.string,
  footerTopSpaceBottomClass: PropTypes.string,
  footerTopSpaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterTwo;
