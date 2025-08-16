import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Service } from "./pages/Service/Service";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Logout } from "./pages/Logout";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider } from "./store/auth";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";
import { AdminServices } from "./pages/Admin-Services"; 
import { ScrollToTop } from "./components/ScrollToTop";



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
       <ScrollToTop /> 
        <div className="app-layout">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="users" element={<AdminUsers />} />
                <Route path="users/update/:id" element={<AdminUpdate />} />
                <Route path="contacts" element={<AdminContacts />} />
                  <Route path="services" element={<AdminServices />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
