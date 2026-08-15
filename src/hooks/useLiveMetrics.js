import { useState, useEffect } from 'react';
import data from '../data/foodData.json';


function getInitialMetrics() {
    const saved = localStorage.getItem('live_metrics');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error(e);
        }
    }
    return {
        revenue: 15400,
        active: data.filter(item => item.status === "Preparing" || item.status === "Ready").length,
        cancelled: data.filter(item => item.status === "Cancelled").length,
        rating: 4.5
    };
}

export function useLiveMetrics(isLive = true) {
    const [metrics, setMetrics] = useState(getInitialMetrics);

    useEffect(() => {
        if (!isLive) return;
        const intervalId = setInterval(() => {
            setMetrics((prev) => {
                const updated = {
                    ...prev,
                    revenue: prev.revenue + 250,
                    active: prev.active + 1
                };
               
                localStorage.setItem('live_metrics', JSON.stringify(updated));
                return updated;
            });
        }, 3000);
        return () => clearInterval(intervalId);
    }, [isLive]);

    return metrics;
}