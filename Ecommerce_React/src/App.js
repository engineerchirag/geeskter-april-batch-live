import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Main from "./components/Main";
import Category from "./components/Category";
import PageNotFound from "./components/PageNotFound";
import AppContext from "./components/Context";
import { cartItemExistsMessage, cartActions } from "./Constants";
import "./styles/App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  let addProductsToCart = (product) => {
    const index = cartItems.findIndex((x) => x.id === product.id);
    if (index === -1) {
      setCartItems((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);
      return;
    }
    setShowAlert(true);
  };

  let updateCartItems = (id, action) => {
    switch (action) {
      case cartActions.addItem:
        setCartItems((prev) => {
          let newCartItem = JSON.parse(JSON.stringify(prev));
          newCartItem[id].quantity += 1;
          return newCartItem;
        });
        break;
      case cartActions.subtractItem:
        setCartItems((prev) => {
          let newCartItem = JSON.parse(JSON.stringify(prev));
          if (newCartItem[id].quantity > 1) {
            newCartItem[id].quantity -= 1;
          }
          return newCartItem;
        });
        break;
      case cartActions.deleteItem:
        setCartItems((prev) => {
          let newCartItem = JSON.parse(JSON.stringify(prev));
          newCartItem.splice(id, 1);
          return newCartItem;
        });
        break;
    }
  };

  return (
    <Router>
      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
          className="alert"
        >
          <Alert.Heading>{cartItemExistsMessage}</Alert.Heading>
        </Alert>
      )}
      <AppContext.Provider
        value={{
          cartItems,
          addProductsToCart,
          updateCartItems,
        }}
      >
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/category/:categrory" exact component={Category} />
          <Route component={PageNotFound} />
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
