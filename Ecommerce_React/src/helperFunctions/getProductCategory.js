import { getProductCategoryEndpoint } from "../Constants";

let getProductCategory = (category) => {
  return fetch(`${getProductCategoryEndpoint}/${category}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  });
};

export default getProductCategory;
