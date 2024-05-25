export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

