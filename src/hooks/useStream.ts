import React, { useEffect } from "react";
import { StreamDataType } from "../firebase";

interface Props<T> {
  setFileArray: React.Dispatch<React.SetStateAction<T[] | null>>;
  streamData: StreamDataType;
}

const useStream = <T>({ setFileArray, streamData }: Props<T>) => {
  useEffect(() => {
    const unsubscribe = streamData(
      (snapshot) => {
        const updatedData: T[] = snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as T)
        );
        setFileArray(updatedData);
      },
      (error) => console.error(error)
    );

    return unsubscribe;
  }, [setFileArray, streamData]);

  return streamData;
};

export default useStream;
