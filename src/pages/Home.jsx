import React, { useState } from "react";
import MetricsBar from "../features/MetricsBar";
import StatusBar from "../features/StatusBar";
import useLiveAnalytics from "../hooks/useLiveAnalytics";
import Button from "../components/ui/Button";


export default function Home() {
    const[isLive,setIsLive] = useState(false);
      const { 
        stats, 
        totalRevenue, 
        totalOrders, 
        cancelledOrdersCount,
        averageRatings
      } = useLiveAnalytics(isLive);
    
    return (
        <div className="p-4 flex flex-col gap-4">
              <Button 
                setBtnFn={() => setIsLive((prev) => !prev)} 
                btnStyle={`p-2 text-white w-[120px] rounded-full transition-colors ${isLive ? "bg-rose-500" : "bg-green-500"}`} 
                btnText={isLive ? "Stop Live" : "Go Live"}
            />
            <MetricsBar getMetricsData={{
                totalOrders,
                totalRevenue,
                cancelledOrdersCount,
                averageRatings
            }} /> 

            <StatusBar getStatusData={stats}/>
           
        </div>
    );
}