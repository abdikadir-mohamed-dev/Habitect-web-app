import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminProperties from "./pages/AdminProperties";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";
import ManageUsers from "./pages/ManageUsers";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/admin/properties" element={<AdminProperties />} />

          <Route path="/admin/properties/new" element={<AddProperty />} />

          <Route path="/admin/properties/edit/:id" element={<EditProperty />} />

          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/properties/update" element={<EditProperty />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;