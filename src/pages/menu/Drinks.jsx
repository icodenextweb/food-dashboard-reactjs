import React from "react";
import InventoryManager from "../../features/InventoryManager";

export default function Drinks() {
  const defaultDrinks = [
    { id: 101, name: "Coca Cola", category: "Beverage", price: 40, qty: 120, unit: "cans" },
    { id: 102, name: "Orange Juice", category: "Juice", price: 80, qty: 15, unit: "liters" }
  ];

  return (
    <InventoryManager 
      title="🥤 Drinks Inventory" 
      storageKey="drinksStockData" 
      initialData={defaultDrinks} 
      defaultCategory="Beverage" 
      defaultUnit="bottles" 
    />
  );
}