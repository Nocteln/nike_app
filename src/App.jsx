import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Main from "./sections/Main";
import Product from "./sections/Product";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main darkMode={darkMode} onDarkMode={setDarkMode} />}
        />
        <Route path="product/:id" element={<Product darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
