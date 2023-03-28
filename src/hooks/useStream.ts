import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { StreamDataType } from '../firebase';

interface Props<T> {
  setFileArray: React.Dispatch<React.SetStateAction<T[] | null>>;
  streamData: StreamDataType;
}

const useCallbackRef = (callback: any) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

const useStream = <T extends unknown>({
  setFileArray,
  streamData,
}: Props<T>) => {
  const addDataToFileArray = useCallbackRef(setFileArray);

  useEffect(() => {
    const unsubscribe = streamData(
      (snapshot) => {
        const updatedData: T[] = [];
        snapshot.docs.forEach((doc) => {
          updatedData.push({ ...doc.data(), id: doc.id } as T);
        });
        addDataToFileArray.current?.((prev: T[]) => updatedData);
      },
      (error) => console.log(error)
    );
    return unsubscribe;
  }, [addDataToFileArray, streamData]);
};

export default useStream;
