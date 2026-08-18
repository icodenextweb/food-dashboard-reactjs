import React, { useState } from "react";
import MetricsBar from "../features/MetricsBar";
import StatusBar from "../features/StatusBar";
import useLiveAnalytics from "../hooks/useLiveAnalytics";
import Button from "../components/ui/Button";


export default function Home() {
      const { 
        stats, 
        totalRevenue, 
        totalOrders, 
        cancelledOrdersCount,
        averageRatings
      } = useLiveAnalytics();
    
    return (
        <div className="p-4 flex flex-col gap-4">
            <Button btnStyle="p-4 bg-rose-400 text-white w-[140px] rounded-lg" btnText="Live Status"/>
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