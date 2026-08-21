import React from "react";
import foodData from "../../data/foodData.json";
import InventoryManager from "../../features/InventoryManager";

export default function FoodInventory() {
  return (
    <InventoryManager 
      title="🍕 Food Inventory" 
      storageKey="foodStockData" 
      initialData={foodData} 
      defaultCategory="General" 
      defaultUnit="pcs" 
    />
  );
}