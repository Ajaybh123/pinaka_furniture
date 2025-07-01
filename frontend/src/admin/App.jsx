import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import QuotePage from "./pages/QuotePage";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Admin Routes */}
      {token ? (
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="orders" element={<QuotePage />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}

      {/* Redirect unmatched routes */}
      <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
    </Routes>
  );
};

export default App;


// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import CategoryPage from "./pages/CategoryPage";
// import ProductPage from "./pages/ProductPage";

// const App = () => {
//   const token = localStorage.getItem("token");

//   return (
//     <Routes>
//       {/* Protected Admin Layout */}
//       {token ? (
//         <Route path="" element={<Dashboard />}>
//           <Route index element={<Navigate to="categories" />} />
//           <Route path="categories" element={<CategoryPage />} />
//           <Route path="products" element={<ProductPage />} />
//         </Route>
//       ) : (
//         <>
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           {/* Redirect unauthenticated /admin access */}
//           <Route path="*" element={<Navigate to="/admin/login" />} />
//         </>
//       )}

//       {/* Catch-all: go to login or dashboard */}
//       <Route
//         path="*"
//         element={<Navigate to={token ? "/admin" : "/admin/login"} />}
//       />
//     </Routes>
//   );
// };

// export default App;

