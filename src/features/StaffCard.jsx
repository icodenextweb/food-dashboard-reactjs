import React from "react";
import Button from "../components/ui/Button"; 

export default function StaffCard({ staff, toggleStatus, deleteStaff }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{staff.name}</h3>
          <p className="text-sm text-slate-500">{staff.role}</p>
        </div>
        <span className={`px-2 py-1 rounded-md text-xs font-bold ${staff.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
          {staff.status}
        </span>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-slate-50">
        <Button 
          btnText="Toggle Status" 
          btnStyle="flex-1 py-2 rounded-lg text-sm bg-slate-100 text-slate-700 hover:bg-slate-200"
          setBtnFn={() => toggleStatus(staff.id)}
        />
        <Button 
          btnText="Delete" 
          btnStyle="flex-1 py-2 rounded-lg text-sm bg-red-50 text-red-600 hover:bg-red-100"
          setBtnFn={() => deleteStaff(staff.id)}
        />
      </div>
      
    </div>
  );
}