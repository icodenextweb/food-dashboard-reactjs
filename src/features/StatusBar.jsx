import React from "react";
import Table from "../components/ui/Table";

export default function StatusBar({getStatusData}){
    return(
        <Table displayStatus = {getStatusData}/>
    )
}