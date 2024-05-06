import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { Purpose } from "../constants";

interface Props<T> {
  file: File;
  fileId: Purpose;
  docId: string;
  setFile: React.Dispatch<React.SetStateAction<T>>;
  structure: Purpose;
}

const useCallbackRef = (callback: any) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

const useFileUpload = <T>({
  file,
  docId,
  fileId,
  setFile,
  structure,
}: Props<T>) => {
  //Upload Percentage
  const [percent, setPercent] = useState<number | null>(null);

  const addFileToData = useCallbackRef(setFile);
  useEffect(() => {
    const uploadFile = () => {
      const extensionWEBP = ".webp";
      // const type = file.type;
      // console.log("type", type);

      let fileURL = "";

      switch (structure) {
        case Purpose.Team:
          fileURL = "images/teams/" + docId + "/" + fileId + extensionWEBP;
          break;
        case Purpose.Member:
          fileURL = "images/members/" + docId + "/" + fileId + extensionWEBP;
          break;
        default:
          break;
      }

      const storageRef = ref(storage, fileURL);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercent((prev) => progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addFileToData.current?.((prev: T) => ({
              ...prev,
              [fileId]: downloadURL,
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file, docId, fileId, structure, addFileToData]);

  return percent;
};

export default useFileUpload;
