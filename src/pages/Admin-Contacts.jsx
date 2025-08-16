import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../store/auth-context";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getContactsData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data: ", data);

      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [AuthorizationToken]); // <- only re-create when token changes

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("delete successfully");
      } else {
        toast.error("Not deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, [getContactsData]); // <- now no ESLint warning

  return (
    <section className="admin-contacts-section">
      <h1>Admin Contact Data</h1>
      <div className="container admin-users">
        {contactData.map(({ username, email, message, _id }, index) => (
          <div key={index}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{message}</p>
            <button className="btn" onClick={() => deleteContactById(_id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
