export const getBirthday = (data: string) => {
  const formatDate = new Date(data);
  const year = formatDate.getFullYear().toString();
  const month = (formatDate.getMonth() + 1).toString();
  const day = formatDate.getDate().toString();
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
};
