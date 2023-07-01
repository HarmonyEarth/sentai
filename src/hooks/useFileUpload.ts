import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { FileState, Member, Team } from '../models/types';

interface Props {
  file: File;
  fileId: string;
  docId: string;
  setFile:
    | React.Dispatch<React.SetStateAction<Team>>
    | React.Dispatch<React.SetStateAction<Member>>;
  structure: string;
  year?: number | string;
}

const useCallbackRef = (callback: any) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

const useFileUpload = ({
  file,
  docId,
  fileId,
  setFile,
  structure,
  year,
}: Props) => {
  //Upload Percentage
  const [percent, setPercent] = useState<number | null>(null);

  const addFileToData = useCallbackRef(setFile);
  useEffect(() => {
    const uploadFile = () => {
      const name = fileId;
      const extensionWEBP = '.webp';
      const type = file.type;
      console.log('type', type);

      let fileURL = '';

      switch (structure) {
        case 'team':
          fileURL = 'images/teams/' + docId + '/' + name + extensionWEBP;
          break;
        case 'member':
          fileURL = 'images/members/' + docId + '/' + name + extensionWEBP;
          break;
        default:
          break;
      }

      const storageRef = ref(storage, fileURL);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPercent((prev) => progress);

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
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
            addFileToData.current?.((prev: FileState) => ({
              ...prev,
              [fileId]: downloadURL,
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file, docId, fileId, structure, year, addFileToData]);

  return percent;
};

export default useFileUpload;
