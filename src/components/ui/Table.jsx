import React from "react";

export default function Table({ displayStatus }) {
  return (
    <div className="relative max-h-[400px] overflow-y-auto overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-500 border-collapse">
        <thead className="sticky top-0 z-10 bg-gray-100 text-gray-700 uppercase font-semibold">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200 bg-white">
          {displayStatus.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors even:bg-gray-50/50">
              <td className="px-6 py-3 font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-3">{item.price}</td>
              <td className="px-6 py-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}