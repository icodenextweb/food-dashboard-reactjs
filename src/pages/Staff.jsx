import React, { useState } from "react";
import Button from "../components/ui/Button"; 
import StaffCard from "../features/StaffCard"; 
import useStaffData from "../hooks/useStaffData"; 
import { User} from 'lucide-react';

export default function Staff() {
  const defaultStaff = [
    { id: 1, name: "Rahul", role: "Chef", status: "Active" },
    { id: 2, name: "Amit", role: "Delivery Boy", status: "Offline" }
  ];

  const { staffList, addStaff, toggleStatus, deleteStaff } = useStaffData("staffData", defaultStaff);

  const [formData, setFormData] = useState({ name: "", role: "" });

  const handleAddStaff = () => {
    if (!formData.name.trim() || !formData.role.trim()) return;
    addStaff({ name: formData.name, role: formData.role });
    setFormData({ name: "", role: "" }); 
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-4 justify-center items-center">
            <User size={25} /> 
          <h2 className="text-2xl font-bold text-slate-800">
            Staff
            </h2>
            </div>
          
          <div className="flex gap-2 items-center flex-wrap">
            <input 
              type="text" 
              placeholder="Name..." 
              className="px-3 py-2 border rounded-lg w-32 sm:w-auto"
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          
            <input 
              type="text" 
              placeholder="Role..." 
              className="px-3 py-2 border rounded-lg w-32 sm:w-auto"
              value={formData.role} 
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
            
            <Button 
              btnText="+ Add" 
              btnStyle="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              setBtnFn={handleAddStaff}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffList.length === 0 ? (
            <p className="text-slate-500 col-span-full text-center">No staff added.</p>
          ) : (
            staffList.map((staff) => (
              <StaffCard 
                key={staff.id} 
                staff={staff} 
                toggleStatus={toggleStatus} 
                deleteStaff={deleteStaff} 
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}