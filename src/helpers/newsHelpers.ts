export const getDateFormat = (newsDate: string) => {
  const formatDate = new Date(newsDate);
  const year = formatDate.getFullYear().toString();
  const month = formatDate.getMonth().toString();
  const day = formatDate.getDate().toString();
  return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
};
