export const getOptions = (listOptions: string[]) => {
  const newArr = listOptions.map((item: string) => {
    return { value: item, label: item[0].toUpperCase() + item.slice(1) };
  });
  return [{ value: "", label: "Show all" }, ...newArr];
};
