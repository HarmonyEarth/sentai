import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

interface Props {
  file: File;
  id: string;
  setFile: React.Dispatch<React.SetStateAction<{}>>;
  teamId: string;
  structure: string;
  heroId?: string;
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
  id,
  setFile,
  teamId,
  structure,
  heroId,
  year,
}: Props) => {
  //Upload Percentage
  const [percent, setPercent] = useState<number | null>(null);

  const addFileToData = useCallbackRef(setFile);
  useEffect(() => {
    const uploadFile = () => {
      const fileExtension = (file: File) => {
        let extension = file.name.split('.').pop();

        return extension;
      };
      const name = id;
      const type = file.type;
      console.log('type', type);

      let fileURL = '';
      if (structure === 'team') {
        fileURL =
          'images/' + teamId + '/' + name + year + '.' + fileExtension(file);
      } else if (structure === 'member') {
        fileURL =
          'images/' +
          teamId +
          '/teamMembers/' +
          heroId +
          '/' +
          name +
          '.' +
          fileExtension(file);
      } else {
        fileURL = 'images/' + teamId + '/' + name + '.' + fileExtension(file);
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
            addFileToData.current?.((prev: any) => ({
              ...prev,
              [id]: downloadURL,
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file, id, teamId, heroId, structure, year, addFileToData]);

  return percent;
};

export default useFileUpload;
