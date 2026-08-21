import { useState, useEffect } from "react";

export default function useStaffData(storageKey, initialData = []) {

  const [staffList, setStaffList] = useState(() => {
    const savedData = localStorage.getItem(storageKey);
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(staffList));
  }, [staffList, storageKey]);


  const addStaff = (newStaff) => {
    const staffWithId = { ...newStaff, id: Date.now(), status: "Active" };
    setStaffList([staffWithId, ...staffList]);
  };


  const toggleStatus = (id) => {
    setStaffList(staffList.map(staff => 
      staff.id === id ? { ...staff, status: staff.status === "Active" ? "Offline" : "Active" } : staff
    ));
  };


  const deleteStaff = (id) => {
    setStaffList(staffList.filter(staff => staff.id !== id));
  };

  return { staffList, addStaff, toggleStatus, deleteStaff };
}