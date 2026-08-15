import React from "react";

export default function Table({displayStatus}){
    return(
<div className="mt-[20px]">
<div className="">
    <li className="flex gap-4 p-4 justify-between w-full bg-rose-300">
        <ul>Item Id</ul>
        <ul>Item Name</ul>
        <ul>Item Price</ul>
        <ul>Item Status</ul>
    </li>
    <li className="flex gap-4 p-4 justify-between w-fulll">
        <ul>{displayStatus}</ul>
    </li>
</div>
        </div>
    )
}