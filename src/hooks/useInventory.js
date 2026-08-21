import { useState, useEffect } from "react";

export default function useInventoryData(storageKey, initialData = []) {
  
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : initialData; 
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, storageKey]);

  const addItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() }; 
    setItems([...items, itemWithId]); 
  };

  const updateItem = (id, updatedFields) => {
    setItems(items.map(item => item.id === id ? { ...item, ...updatedFields } : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id)); 
  };

  return { items, addItem, updateItem, deleteItem };
}