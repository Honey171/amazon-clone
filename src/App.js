import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/product/:id"
        element={<Product />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/signUp"
        element={<SignUp />}
      />
      <Route
        path="/signIn"
        element={<SignIn />}
      />
    </Routes>
  );
}

export default App;
