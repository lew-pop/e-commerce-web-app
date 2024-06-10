// get products
export const getProducts = (products, category, type, limit) => {
  const finalProducts = category
    ? products.filter(
        product => product.category.filter(single => single === category)
      )
    : products;

  if (type && type === "new") {
    const newProducts = finalProducts.filter(single => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }
  if (type && type === "saleItems") {
    const saleItems = finalProducts.filter(
      single => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, flavor, brand) => {
  let productInCart = cartItems.find(
    single =>
      single.id === product.id &&
      (single.selectedProductFlavor
        ? single.selectedProductFlavor === flavor
        : true) &&
      (single.selectedProductBrand ? single.selectedProductBrand === brand : true)
  );
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.find(
        single =>
          single.id === product.id &&
          single.selectedProductFlavor === flavor &&
          single.selectedProductBrand === brand
      ).quantity;
    } else {
      return cartItems.find(single => product.id === single.id).quantity;
    }
  } else {
    return 0;
  }
};

export const cartItemStock = (item, flavor, brand) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation
      .filter(single => single.flavor === flavor)[0]
      .brand.filter(single => single.name === brand)[0].stock;
  }
};

//get products based on category
export const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "category") {
      return products.filter(
        product => product.category.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "tag") {
      return products.filter(
        product => product.tag.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "flavor") {
      return products.filter(
        product =>
          product.variation &&
          product.variation.filter(single => single.flavor === sortValue)[0]
      );
    }
    if (sortType === "brand") {
      return products.filter(
        product =>
          product.variation &&
          product.variation.filter(
            single => single.brand.filter(single => single.name === sortValue)[0]
          )[0]
      );
    }
    if (sortType === "filterSort") {
      let sortProducts = [...products];
      if (sortValue === "default") {
        return sortProducts;
      }
      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }
  return products;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = products => {
  let productCategories = [];
  products &&
    products.map(product => {
      return (
        product.category &&
        product.category.map(single => {
          return productCategories.push(single);
        })
      );
    });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};

// get individual tags
export const getIndividualTags = products => {
  let productTags = [];
  products &&
    products.map(product => {
      return (
        product.tag &&
        product.tag.map(single => {
          return productTags.push(single);
        })
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

// get individual flavors
export const getIndividualFlavors = products => {
  let productFlavors = [];
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return productFlavors.push(single.flavor);
        })
      );
    });
  const individualProductFlavors = getIndividualItemArray(productFlavors);
  return individualProductFlavors;
};

// get individual brands
export const getProductsIndividualBrands = products => {
  let productBrands = [];
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return single.brand.map(single => {
            return productBrands.push(single.name);
          });
        })
      );
    });
  const individualProductBrands = getIndividualItemArray(productBrands);
  return individualProductBrands;
};

// get product individual brands
export const getIndividualBrands = product => {
  let productBrands = [];
  product.variation &&
    product.variation.map(singleVariation => {
      return (
        singleVariation.brand &&
        singleVariation.brand.map(singleBrand => {
          return productBrands.push(singleBrand.name);
        })
      );
    });
  const individualBrands = getIndividualItemArray(productBrands);
  return individualBrands;
};

export const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  );
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
