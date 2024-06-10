import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>{t("Home")}</Link>
        </li>
        <li className="menu-item-has-children">
        <li className="my-active">
        <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vape"}>
            {t("Vapes")}
          </Link>
        </li>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
            <li className="my-active">
            <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vape"}>
                {t("Vape Brands")}
              </Link>
              
            </li>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/geekBar"}
                  >
                    {t("Geek Bar")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/lostMary"}
                  >
                    {t("Lost Mary")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/primeBar"}
                  >
                    {t("Prime Bar")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/funkyLands"
                    }
                  >
                    {t("Funky Lands")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/breeze"}
                  >
                    {t("Breeze Smoke")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/elfBar"}
                  >
                    {t("Elf Bar")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/plena"}
                  >
                    {t("Plena 18k")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/flum"}
                  >
                    {t("Flum")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/elux"}
                  >
                    {t("Elux")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/hyppe"}
                  >
                    {t("Hyppe")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/bugatti"}
                  >
                    {t("Bugatti")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <li className="my-active">
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/vape"}>
                  {t("Vape Flavors")}
                </Link>
              </li>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/exotic"}
                  >
                    {t("Exotic")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/sweet"}
                  >
                    {t("Sweet")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/fruity"}
                  >
                    {t("Fruity")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/tobacco"}
                  >
                    {t("Tobacco")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/dessert"}
                  >
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
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/mint"}
                  >
                    {t("Mint")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/candy"}
                  >
                    {t("Candy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/sweet-ice"
                    }
                  >
                    {t("Sweet Ice")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-filtered-grid/sweet-citrus"
                    }
                  >
                    {t("Sweet Citrus")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/fruity-ice"
                    }
                  >
                    {t("Fruity Ice")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <li className="my-active">
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/mods"}>
                  {t("Tanks & Mods")}
                </Link>
              </li>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/geekVapes"
                    }
                  >
                    {t("Geek Vape")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/smok"}
                  >
                    {t("Smok")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/vaporesso"
                    }
                  >
                    {t("Vaporesso")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/voopoo"}
                  >
                    {t("VooPoo")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/freeMax"}
                  >
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
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/uwell"}
                  >
                    {t("UWELL")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/suorin"}
                  >
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

        <li className="menu-item-has-children">
          <li className="my-active">
            <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/e-liquid"}>
              {t("E-Liquid")}
            </Link>
          </li>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <li className="my-active">
                <Link
                  to={process.env.PUBLIC_URL + "/shop-filtered-grid/eliquid"}
                >
                  {t("E-Liquid")}
                </Link>
              </li>

              <ul className="sub-menu">
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/vapetasia"
                    }
                  >
                    {t("Vapetasia")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/podJuice"}
                  >
                    {t("Pod Juice")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/candyKings"
                    }
                  >
                    {t("Candy Kings")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/cnurdz"}
                  >
                    {t("Cloud Nurdz Iced")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/juiceHead"
                    }
                  >
                    {t("Juice Head")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/cclouds"}
                  >
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
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/daze"}
                  >
                    {t("Reds & Daze")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/naked"}
                  >
                    {t("Naked 100")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/twist"}
                  >
                    {t("Twist")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <li className="my-active">
                <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/salt"}>
                  {t("Salt Nic")}
                </Link>
              </li>

              <ul className="sub-menu">
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/daze-salt"
                    }
                  >
                    {t("Daze Salt Series")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/airFactory"
                    }
                  >
                    {t("Air Factory")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-filtered-grid/vapetasia-salt"
                    }
                  >
                    {t("Vapetasia Salts")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-filtered-grid/saltNkd"}
                  >
                    {t("Salt Nkd 100")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-filtered-grid/podJuice-salt"
                    }
                  >
                    {t("Pod Juice")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/orgnx-salt"
                    }
                  >
                    {t("Orgnx Salt Nic")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-filtered-grid/juiceHead-salt"
                    }
                  >
                    {t("Juice Head Salts")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/cnurdz-salt"
                    }
                  >
                    {t("Cloud Nurdz Salts")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-filtered-grid/cclouds-salt"
                    }
                  >
                    {t("Coastal Clouds")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-filtered-grid/twist-salt"
                    }
                  >
                    {t("Twist Nicotine Salt")}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/smoke"}>
            {t("Smoke")}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/shop-filtered-grid/vaporizers"}
              >
                {t("Vaporizers")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/dab"}>
                {t("Dab Rigs")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/pipe"}>
                {t("Hand Pipes")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/bong"}>
                {t("Water Pipes")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/custom"}>
                {t("Custom Glass")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/papers"}>
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
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/accessories"}>
            {t("Accessories")}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid/gat"}>
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
              <Link
                to={process.env.PUBLIC_URL + "/shop-filtered-grid/specialty"}
              >
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
        <li>
          <Link to={process.env.PUBLIC_URL + "/my-account"}>
            {t("Account")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
