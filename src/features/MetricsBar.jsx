import React from "react";
import Card from '../components/ui/Card';

export default function MetricsBar({ getMetricsData }){
    return(
        <div className="flex gap-4">
            <Card cardTitle="Top Revenue" value={`₹${getMetricsData.totalRevenue}`} />
            <Card cardTitle="Active Orders" value={getMetricsData.totalOrders} />
            <Card cardTitle="Cancelled Today" value={getMetricsData. cancelledOrdersCount} />
            <Card cardTitle="Average Rating" value={getMetricsData.averageRatings} />
        </div>
    );
}