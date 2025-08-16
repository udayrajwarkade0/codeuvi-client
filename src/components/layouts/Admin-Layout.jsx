// AdminLayout.jsx
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import "./AdminLayout.css";
import { useAuth } from "../../store/auth-context";

export const AdminLayout = () => {
  const { user, isLoding } = useAuth();

  console.log("admin layout", user);

  // 🔹 Step 1: Jab tak backend se user data fetch ho raha hai
  if (isLoding) {
    return <h1>Loading......</h1>;
  }

  // 🔹 Step 2: Agar user login nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔹 Step 3: Agar user login hai lekin admin nahi hai
  if (!user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  // 🔹 Step 4: Sirf admin ke liye actual layout render karo
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaMessage /> Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">
                  <FaRegListAlt /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
