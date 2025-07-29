import React, { useState } from "react";

const ordersData = [
  {
    id: 1,
    name: "Order #1001",
    status: "Processing",
    progress: 40,
  },
  {
    id: 2,
    name: "Order #1002",
    status: "Shipped",
    progress: 80,
  },
  {
    id: 3,
    name: "Order #1003",
    status: "Delivered",
    progress: 100,
  },
];

const statusOptions = ["Processing", "Shipped", "Delivered"];

const OrderManagement = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status: newStatus,
              progress:
                newStatus === "Processing"
                  ? 40
                  : newStatus === "Shipped"
                  ? 80
                  : 100,
            }
          : order
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Order</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Progress</th>
            <th className="px-4 py-2 text-left">Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="px-4 py-2">{order.name}</td>
              <td className="px-4 py-2">{order.status}</td>
              <td className="px-4 py-2 w-1/4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${
                      order.status === "Processing"
                        ? "bg-yellow-400"
                        : order.status === "Shipped"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${order.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs ml-2">{order.progress}%</span>
              </td>
              <td className="px-4 py-2">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
