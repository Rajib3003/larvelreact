
import { useEffect, useState } from "react";
// import React from "react";
export default function List() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from the API
      fetch("http://127.0.0.1:8000/api/customers")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setCustomers(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <div>
         <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <p>
              Name: {customer.first_name} {customer.last_name}
            </p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Address: {customer.address}</p>
            <p>Date of Birth: {customer.date_of_birth}</p>
            <p>Gender: {customer.gender}</p>
            <p>Created At: {new Date(customer.created_at).toLocaleString()}</p>
            <p>Updated At: {new Date(customer.updated_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
