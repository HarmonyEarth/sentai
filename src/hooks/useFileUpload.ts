import React, { SetStateAction, useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { FileState } from '../components/AddTeam/TeamFormSection';

interface Props {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<{}>>;
  id: string;
}

const useFileUpload = ({ file, setFile, id }: Props) => {
  //Upload Percentage
  const [perc, setPerc] = useState<number | null>(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress);
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
            setFile((prev) => ({ ...prev, [id]: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file, setFile, id]);
};

export default useFileUpload;
