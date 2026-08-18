import { useState, useEffect } from "react";
import foodData from "../data/foodData.json";

export default function useLiveStatus() {
  const [stats, setStats] = useState([
    { ...foodData[0], status: "Preparing" }
  ]);

  useEffect(() => {
    const addItemInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * foodData.length);
      const newItem = {
        ...foodData[randomIndex],
        status: "Preparing" 
      };
      setStats((prevStats) => [newItem, ...prevStats]);
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
            const finalStatus = Math.random() > 0.8 ? "Cancelled" : "Delivered"; 
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
  }, []);
  return stats;
}