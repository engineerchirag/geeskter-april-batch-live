const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";

const logoAlt = "Logo";

const addToCartButtonMessage = "Add to Cart";

const getAllProductsEndpoint = "https://fakestoreapi.com/products";

const getProductCategoryEndpoint = "https://fakestoreapi.com/products/category";

const productsListHeaderTitle = "Products";

const cartHeaderTitle = "Cart";

const noCartItemsMessage = "Your cart is empty";

const cartItemExistsMessage =
  "Cannot add product as it already exists in cart.";

const goBackText = "Go Back";

const pageNotFoundMessage = "OOPS! Page not found";

const pageNotFoundLinkMessage = "Try the homepage";

const errorMessage = "An error occured fetching product";

const productCategories = [
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    name: "Electronics",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    name: "Jewelery",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
    name: "Man Clothing",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
    name: "Women Clothing",
  },
];

const carsourelImages = [
  {
    name: "Image 1",
    imageUrl: "https://i.imgur.com/eiIXOJN.png",
  },
  {
    name: "Image 2",
    imageUrl: "http://soliloquywp.com/wp-content/uploads/2019/02/nb_pss_2.jpg",
  },
];

const cartActions = {
  addItem: "ADD_ITEM",
  subtractItem: "SUBTRACT_ITEM",
  deleteItem: "DELETE_ITEM",
};

const priceTitle = "Price";

export {
  logoUrl,
  logoAlt,
  productCategories,
  carsourelImages,
  getAllProductsEndpoint,
  productsListHeaderTitle,
  addToCartButtonMessage,
  cartHeaderTitle,
  noCartItemsMessage,
  cartItemExistsMessage,
  cartActions,
  priceTitle,
  getProductCategoryEndpoint,
  goBackText,
  pageNotFoundMessage,
  pageNotFoundLinkMessage,
  errorMessage
};
