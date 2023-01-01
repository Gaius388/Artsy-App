import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import SharedProductLayout from "./components/SharedProductLayout";
import SharedCart from "./components/SharedCart";
import SingleProduct from "./components/marketplace/SingleProduct";
import HomePage from "./components/homepage/Homepage";
import Marketplace from "./components/marketplace/Marketplace";
import Auction from "./components/auctions/Auction";
import Drops from "./components/drops/Drops";
import Cart from "./components/cart/Cart";
import PaymentDetails from "./components/cart/PaymentDetails";
import ShippingDetails from "./components/cart/ShippingDetails";
import Congrats from "./components/congrats/Congrats";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="marketplace" element={<SharedProductLayout />}>
            <Route index element={<Marketplace />} />
            <Route path=":marketplaceId" element={<SingleProduct />} />
          </Route>
          <Route path="auctions" element={<Auction />} />
          <Route path="drop" element={<Drops />} />
          <Route path="cart" element={<SharedCart />}>
            <Route index element={<Cart />} />
            <Route path="shipping" element={<ShippingDetails />} />
            <Route path="payment" element={<PaymentDetails />} />
          </Route>
          <Route path="congrats" element={<Congrats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
