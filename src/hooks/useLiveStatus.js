import { useState, useEffect } from "react";
import foodData from "../data/foodData.json";

export default function useLiveStatus(isLive) {

  const [stats, setStats] = useState(() => {
    const saveStatsData = localStorage.getItem("liveAnalytics");
    if (saveStatsData) {
      return JSON.parse(saveStatsData);
    }
    return [{ ...foodData[0], status: "Preparing" }]; 
  });

  useEffect(() => {
    localStorage.setItem("liveAnalytics", JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    if (!isLive) {
      return;
    }
   const addItemInterval = setInterval(() => {
      setStats((prevStats) => {
        if (prevStats.length >= 50) return prevStats; 
        
        const foodStock = JSON.parse(localStorage.getItem("foodStockData")) || [];
        const drinksStock = JSON.parse(localStorage.getItem("drinksStockData")) || [];
        
     
        let combinedInventory = [...foodStock, ...drinksStock];

        if (combinedInventory.length === 0) {
            combinedInventory = foodData;
        }

        const randomIndex = Math.floor(Math.random() * combinedInventory.length);
        const newItem = {
          ...combinedInventory[randomIndex],
          status: "Preparing" 
        };
        return [newItem, ...prevStats];
      });
    }, 3000);
   
  
    const updateStatusInterval = setInterval(() => {
      setStats((newStats) => {
          return newStats.map((item) => {
          const changeStatus = Math.random() > 0.5; 
          if (!changeStatus) return item; 
          
          if (item.status === "Preparing") {
            return { ...item, status: "Ready" };
          } 
          else if (item.status === "Ready") {
            const finalStatus = Math.random() > 0.9 ? "Cancelled" : "Delivered"; 
            return { ...item, status: finalStatus }; 
          }
          return item;
        });
      });
    }, 2000);

    return () => {
      clearInterval(addItemInterval);
      clearInterval(updateStatusInterval);
    };
  }, [isLive]);

  return stats;
}