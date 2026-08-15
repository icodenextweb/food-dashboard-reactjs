import React from "react";

export default function MetricsCard({cardTitle,value}){
    return(
        <div className="p-2 bg-rose-200 w-1/2 rounded-lg">
            <h1>{cardTitle}</h1>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    )
}