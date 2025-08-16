import { useEffect, useCallback, useState } from "react";
import { useAuth } from "../store/auth-context";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { AuthorizationToken } = useAuth();

  const getAllUsersData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, [AuthorizationToken]);

  // delete the user on delete button

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users after delete: ${data}`);

      // table refresh
      getAllUsersData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  return (
    <>
      <section className="admin-users-section">
        <div className="container-admin">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container-admin admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                   <Link to={`/admin/users/update/${curUser._id}`}>Edit</Link>

                    </td>
                    <td>
                      <button
                        className="btn-action btn-delete"
                        onClick={() => deleteUser(curUser._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
