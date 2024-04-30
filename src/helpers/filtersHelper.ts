export const getOptions = (listOptions: string[], text: string) => {
  const newArr = listOptions.map((item: string) => {
    return { value: item, label: item[0].toUpperCase() + item.slice(1) };
  });
  if (text) {
    return [{ value: "", label: text }, ...newArr];
  } else {
    return newArr;
  }
};
