export type TPrefixResponse<T> = {
  data?: T | null;
};

export type TPrefixResponseError = {
  message?: string | null;
  status?: number | null;
};

export const prefixResponse = <T>(items: T): TPrefixResponse<T> => {
  return {
    data: items,
  };
};

export const prefixErrorResponse = (
  props: TPrefixResponseError,
): TPrefixResponseError => {
  return {
    message: props?.message,
    status: props?.status,
  };
};
