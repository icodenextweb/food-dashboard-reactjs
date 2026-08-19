import useLiveStatus from "./useLiveStatus";

export default function useLiveAnalytics(isLive) {
  const stats = useLiveStatus(isLive);

  const totalRevenue = stats.reduce((acc, item) => {
    if (item.status === "Delivered") {
      return acc + (item.price || 0);
    } else if (item.status === "Cancelled") {
      return acc - (item.price || 0);
    }
    return acc;
  }, 0);
  
  const totalOrders = stats.length;

  const preparingOrdersCount = stats.filter(
    (item) => item.status === "Preparing"
  ).length;

  const readyOrdersCount = stats.filter(
    (item) => item.status === "Ready"
  ).length;

  const deliveredOrdersCount = stats.filter(
    (item) => item.status === "Delivered"
  ).length;

  const cancelledOrdersCount = stats.filter(
    (item) => item.status === "Cancelled"
  ).length;
  
  const totalRatingSum = stats.reduce((acc, item) => acc + (item.rating || 0), 0);
  const averageRatings = stats.length > 0 ? (totalRatingSum / stats.length).toFixed(1) : 0;

  return {
    stats,
    totalRevenue,
    totalOrders,
    preparingOrdersCount,
    readyOrdersCount,
    deliveredOrdersCount,
    cancelledOrdersCount,
    averageRatings
  };
}