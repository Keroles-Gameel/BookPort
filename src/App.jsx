import Home from "./pages/home/Home";
import Books from "./pages/books/Books";
import Contact from "./pages/contactUs/Contact";
import Payment from "./pages/payment/Payment";
import Login from "./pages/logIn/Login";
import Register from "./pages/register/Register";
import Favorites from "./pages/favorites/Favorites";
import Cart from "./pages/cart/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import {FavoritesProvider} from "./context/FavoritesContext";

function App() {
  return (
    <>
      <FavoritesProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
