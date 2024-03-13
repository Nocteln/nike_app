import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from "./sections/Main";
import Product from "./sections/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
