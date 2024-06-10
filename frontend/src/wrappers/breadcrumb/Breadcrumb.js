import PropTypes from "prop-types";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

const BreadcrumbWrap = ({pages, backgroundImage}) => {
  return (
    <div className="breadcrumb-area pt-120 pb-120 bg-gray-3 bg-img"
    style={{
      backgroundImage: ` ${
        backgroundImage
          ? `url(${process.env.PUBLIC_URL + backgroundImage})`
          : `url()`
      }`
    }}
    >
      <div className="container">
        <Breadcrumb>
            {pages?.map(({ path, label }, i) => i !== pages.length - 1 ? (
                <Breadcrumb.Item key={label} linkProps={{to: path}} linkAs={Link}>
                  {label}
                </Breadcrumb.Item>
            ) : (                
              <Breadcrumb.Item key={label} active>
                {label}
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </div>
    </div>
  );
};

BreadcrumbWrap.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })).isRequired
}

export default BreadcrumbWrap;
