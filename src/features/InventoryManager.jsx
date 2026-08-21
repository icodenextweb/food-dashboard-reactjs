import React, { useState } from "react";
import useInventoryData from "../hooks/useInventory"; 
import Button from "../components/ui/Button"; 

export default function InventoryManager({ 
  title, 
  storageKey, 
  initialData, 
  defaultCategory, 
  defaultUnit 
}) {
  const { items, addItem, updateItem, deleteItem } = useInventoryData(storageKey, initialData);

  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState(""); 

  const handleAdd = () => {
    if (newItemName.trim() === "" || newItemPrice.trim() === "") return;
    
    addItem({
      name: newItemName,
      category: defaultCategory,
      price: Number(newItemPrice),
      qty: 15,
      unit: defaultUnit
    });
    
    setNewItemName(""); 
    setNewItemPrice(""); 
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
      
        <div className="mb-6 flex justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Item Name..."
              className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40"
            />
            <input 
              type="number" 
              value={newItemPrice}
              onChange={(e) => setNewItemPrice(e.target.value)}
              placeholder="Price (₹)..."
              className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-28"
            />
        
            <Button 
              btnText="+ Add" 
              btnStyle="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              setBtnFn={handleAdd}
            />
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock Level</th>
                <th className="p-4 text-center">Manage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">{item.name}</td>
                  <td className="p-4 font-medium text-emerald-600">₹{item.price}</td>
                  <td className="p-4">
                    <span className="font-semibold">{item.qty} {item.unit}</span>
                  </td>
                  <td className="p-4 flex justify-center gap-2">
                    
        
                    <Button 
                      btnText="-"
                      btnStyle="w-8 h-8 bg-slate-100 rounded-lg hover:bg-slate-200"
                      setBtnFn={() => updateItem(item.id, { qty: item.qty - 1 })}
                    />
                    
                 
                    <Button 
                      btnText="+"
                      btnStyle="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
                      setBtnFn={() => updateItem(item.id, { qty: item.qty + 5 })}
                    />
                    
                    <Button 
                      btnText="Delete"
                      btnStyle="px-3 py-1 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 ml-4"
                      setBtnFn={() => deleteItem(item.id)}
                    />
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}