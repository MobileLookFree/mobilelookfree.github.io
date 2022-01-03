interface IElem {
  [key: string]: number | string;
}

export const keyBy = (array: IElem[] = [], key: string): object => {
  const object: any = {};
  array.forEach((element: IElem) => {
    object[element[key]] = element;
  });
  return object;
};