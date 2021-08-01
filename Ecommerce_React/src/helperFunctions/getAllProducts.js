import { getAllProductsEndpoint } from "../Constants";

let getAllProducts = () => {
  return fetch(getAllProductsEndpoint).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  });
};

export default getAllProducts;
