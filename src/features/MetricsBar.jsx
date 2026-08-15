import React from "react";
import MetricsCard from '../components/ui/MetricsCard';

export default function MetricsBar({ getMetricsData }){
    return(
        <div className="flex gap-4">
            <MetricsCard cardTitle="Top Revenue" value={`₹${getMetricsData.revenue}`} />
            <MetricsCard cardTitle="Active Orders" value={getMetricsData.active} />
            <MetricsCard cardTitle="Cancelled Today" value={getMetricsData.cancelled} />
            <MetricsCard cardTitle="Average Rating" value={getMetricsData.rating} />
        </div>
    );
}