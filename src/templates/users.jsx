import React, { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Read users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        console.log(storedUsers)
        setUsers(storedUsers);
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Saved Users</h2>

            {users.length === 0 ? (
                <p>No users found in localStorage.</p>
            ) : (
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.email}</td>
                                <td>{u.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
