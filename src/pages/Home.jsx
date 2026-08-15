import React, { useState } from "react";
import MetricsBar from "../features/MetricsBar";
import StatusBar from "../features/StatusBar";
import { useLiveMetrics } from "../hooks/useLiveMetrics"; 
import { useLiveStatus } from "../hooks/useLiveStatus";


export default function Home() {
    const [isLive, setIsLive] = useState(false); 
    const metrics = useLiveMetrics(isLive);    
    const status = useLiveStatus();

    return (
        <div className="p-4">
            <button 
                onClick={() => setIsLive((fn) => !fn)}
                className="px-4 py-2 bg-rose-500 text-white rounded mb-4"
            >
                {isLive ? "Pause Live Updates" : "Start Live Updates"}
            </button>

            <MetricsBar getMetricsData={metrics} /> 
            <StatusBar getStatusData = {status}/>
        </div>
    );
}