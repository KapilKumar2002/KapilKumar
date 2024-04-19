export function formatDate(dateString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const month = months[monthIndex];
    return `${month}, ${year}`;
  }