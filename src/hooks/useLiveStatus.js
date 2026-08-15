import foodData from '../data/foodData.json'
import { useState,useEffect } from 'react'
import React from 'react'

export function useLiveStatus(){
    const name = foodData[0].name
    return name;
}