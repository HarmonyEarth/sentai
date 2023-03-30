export const deepClone = <T>(arrayData: T[]): T[] => {
  let deepCloneArray = arrayData.map((arrayDataItem) =>
    Array.isArray(arrayDataItem) ? deepClone(arrayDataItem) : arrayDataItem
  );
  return deepCloneArray as T[];
};
