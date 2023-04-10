import React from 'react';

function AdminPage() {

  const topUsers = [
    { id: 1, name: "user1", endpoint: "/api/v1/pokemon/:id" },
    { id: 2, name: "user2", endpoint: "/api/v1/pokemon" },
    { id: 3, name: "user1", endpoint: "/api/v1/pokemons" },
  ];

  const fourxxErrors = [
    { id: 1, method: "GET", status: "404", endpoint: "/api/v1/pokemon/:id" },
    { id: 2, method: "GET", status: "401", endpoint: "/api/v1/pokemon" },
    { id: 3, method: "GET", status: "404", endpoint: "/api/v1/pokemons" },
    { id: 4, method: "GET", status: "400", endpoint: "/api/v1/pokemon/:id" },
  ];

  const recentErrors = [
    { id: 1, method: "GET", status: "500", endpoint: "/api/v1/pokemon/:id" },
    { id: 2, method: "GET", status: "400", endpoint: "/api/v1/pokemons" },
    { id: 3, method: "GET", status: "404", endpoint: "/api/v1/pokemon" },
    { id: 4, method: "POST", status: "400", endpoint: "/api/v1/pokemon" },
  ];

  const tableHeaders = ["User", "Endpoint"];
  const tableRows = topUsers.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.endpoint}</td>
    </tr>
  ));

  const fourxxTableHeaders = ["Method", "Status", "Endpoint"];
  const fourxxTableRows = fourxxErrors.map(error => (
    <tr key={error.id}>
      <td>{error.method}</td>
      <td>{error.status}</td>
      <td>{error.endpoint}</td>
    </tr>
  ));

  const recentErrorsTableHeaders = ["Method", "Status", "Endpoint"];
  const recentErrorsTableRows = recentErrors.map(error => (
    <tr key={error.id}>
      <td>{error.method}</td>
      <td>{error.status}</td>
      <td>{error.endpoint}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Admin Page!</h1>

      <h2>Top Users for Each Endpoint</h2>
      <table>
        <thead>
          <tr>
            {tableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>

      <h2>4xx Errors by Endpoint</h2>
      <table>
        <thead>
          <tr>
            {fourxxTableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fourxxTableRows}
        </tbody>
      </table>

      <h2>Recent 4xx/5xx Errors</h2>
      <table>
        <thead>
          <tr>
            {recentErrorsTableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recentErrorsTableRows}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;



// import React, { useEffect, useState } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import axios from 'axios';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Unique API Users Over Time',
//     },
//   },
// };



// export function AdminPage() {
//   const [uniqueUsers, setUniqueUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUniqueUsers() {
//       const { data } = await axios.get('/api/v1/unique-users');
//       setUniqueUsers(data);
//     }
//     fetchUniqueUsers();
//   }, []);

//   return (
//     <Bar options={options} data={uniqueUsers} />
//   );
// }

// export default AdminPage;
