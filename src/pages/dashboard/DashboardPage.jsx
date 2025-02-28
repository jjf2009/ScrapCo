import React, { useEffect, useState } from "react";
import axios from "axios";

// Loading Component
const Loading = () => <div className="text-center text-gray-500">Loading...</div>;

// Error Component
const Error = ({ message }) => <div className="text-red-500">Error: {message}</div>;

// DashboardStats Component
const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-blue-200 p-4 rounded-lg text-center">
        <h3 className="text-lg font-bold">Total Dealers</h3>
        <p className="text-xl">{stats.totalDealers}</p>
      </div>
      <div className="bg-green-200 p-4 rounded-lg text-center">
        <h3 className="text-lg font-bold">Total Transactions</h3>
        <p className="text-xl">{stats.totalTransactions}</p>
      </div>
      <div className="bg-yellow-200 p-4 rounded-lg text-center">
        <h3 className="text-lg font-bold">Total Scrap Collected</h3>
        <p className="text-xl">{stats.totalScrapWeight} kg</p>
      </div>
      <div className="bg-red-200 p-4 rounded-lg text-center">
        <h3 className="text-lg font-bold">Total Revenue</h3>
        <p className="text-xl">${stats.totalRevenue}</p>
      </div>
    </div>
  );
};

// DealerList Component
const DealerList = ({ dealers }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Registered Scrap Dealers</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Dealer Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Total Transactions</th>
            <th className="py-2 px-4">Total Scrap Bought (kg)</th>
          </tr>
        </thead>
        <tbody>
          {dealers.map((dealer) => (
            <tr key={dealer.id} className="border-b">
              <td className="py-2 px-4">{dealer.name}</td>
              <td className="py-2 px-4">{dealer.email}</td>
              <td className="py-2 px-4">{dealer.totalTransactions}</td>
              <td className="py-2 px-4">{dealer.totalScrapWeight} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// DashboardPage (Main Component)
const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/admin/dashboard")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Scrap Marketplace Dashboard</h1>
      <DashboardStats stats={data.stats} />
      <DealerList dealers={data.dealers} />
    </div>
  );
};

export default DashboardPage;
