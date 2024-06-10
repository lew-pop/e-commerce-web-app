import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
        <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Vapes")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("Vape Brands")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/geekBar"}>
                      {t("Geek Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/lostMary"}>
                      {t("Lost Mary")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/primeBar"}>
                      {t("Prime Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/funkyLands"}>
                      {t("Funky Lands")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/breeze"}>
                      {t("Breeze Smoke")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/elfBar"}>
                      {t("Elf Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/plena"}>
                      {t("Plena 18k")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/flum"}>
                      {t("Flum")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/elux"}>
                      {t("Elux")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/hyppe"}>
                      {t("Hyppe")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/bugatti"}>
                      {t("Bugatti")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/disposables"}>
                      {t("Vape Flavors")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/exotic"}>
                      {t("Exotic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/sweet"}>
                      {t("Sweet")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/fruity"}>
                      {t("Fruity")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/tobacco"}>
                      {t("Tobacco")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/dessert"}>
                      {t("Dessert")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-filtered-grid/citrus"}
                    >
                      {t("Citrus")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/mint"}>
                      {t("Mint")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/candy"}>
                      {t("Candy")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/sweetIce"}>
                      {t("Sweet Ice")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/sweetCitrus"}>
                      {t("Sweet Citrus")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/fruityIce"}>
                      {t("Fruity Ice")}
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("Tanks & Mods")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/geekVape"}>
                      {t("Geek Vape")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/smok"}>
                      {t("Smok")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vaporesso"}>
                      {t("Vaporesso")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/voopoo"}>
                      {t("VooPoo")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/freemax"}>
                      {t("FreeMax")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-filtered-grid/lostVape"}
                    >
                      {t("Lost Vape")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/uwell"}>
                      {t("UWELL")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/sourin"}>
                      {t("Suorin")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-filtered-grid/miPod"}
                    >
                      {t("Mi-Pod")}
                    </Link>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/eliquid"}>
              {" "}
              {t("E-Liquid")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/miPod"}>
                      {t("E-Liquid")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vapetasia"}>
                      {t("Vapetasia")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/podJuice"}>
                      {t("Pod Juice")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/candyKings"}>
                      {t("Candy Kings")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/cloudNerdz"}>
                      {t("Cloud Nurdz Iced")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/juiceHead"}>
                      {t("Juice Head")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/coastalClouds"}>
                      {t("Coastal Clouds")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-filtered-grid/orgnx"}
                    >
                      {t("Orgnx")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/daze"}>
                      {t("Reds & Daze")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/naked"}>
                      {t("Naked 100")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/twist"}>
                      {t("Twist")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/humble"}>
                      {t("Humble")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid"}>
                      {t("Salt Nic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/dazeSalt"}>
                      {t("Daze Salt Series")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/airFactory"}>
                      {t("Air Factory")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vapetasiaSalts"}>
                      {t("Vapetasia Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/saltNkd"}>
                      {t("Salt Nkd 100")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/podJuice"}>
                      {t("Pod Juice")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-filtered-grid/orgnxSalt"}
                    >
                      {t("Orgnx Salt Nic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/juiceHeadSalts"}>
                      {t("Juice Head Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/cloudNurdzSalts"}>
                      {t("Cloud Nurdz Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/ccloudSalt"}>
                      {t("Coastal Clouds")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/twistSalt"}>
                      {t("Twist Nicotine Salt")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/smoke"}>
              {t("Smoke")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vaporizers"}>
                  {t("Vaporizers")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/dabRigs"}>
                  {t("Dab Rigs")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/handPipes"}>
                  {t("Hand Pipes")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/waterPipes"}>
                  {t("Water Pipes")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/custom"}>
                  {t("Custom Glass")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/rollPapers"}>
                  {t("Rolling Papers")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/hookahs"}>
                  {t("Hookahs")}
                </Link>
              </li>
             
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/accessories"}>
              {t("Accessories")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/grinder"}>
                  {t("Grinders & Trays")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/coils"}>
                  {t("Replacement Coils")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/parts"}>
                  {t("Replacement Parts")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/specialty"}>
                  {t("Specialty Items")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("contact_us")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
