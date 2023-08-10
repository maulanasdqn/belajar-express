export type TPrefixResponse<T> = {
  data: T
}

export const prefixResponse = (items: any): TPrefixResponse<any> => {
  return {
    data: items,
  };
};
