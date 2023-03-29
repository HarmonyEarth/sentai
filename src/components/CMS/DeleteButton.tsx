import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, listAll, ref } from 'firebase/storage';
import React from 'react';
import { toast } from 'react-hot-toast';
import { db, storage } from '../../firebase';

interface Props {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  docId: string;
  purpose: string;
}

const deleteFile = async (filePath: string) => {
  const fileToRemoveRef = ref(storage, filePath);

  return await deleteObject(fileToRemoveRef);
};
const deleteFolderRecursive = async (folderPath: string) => {
  const listRef = ref(storage, folderPath);
  const list = await listAll(listRef);
  let filesDeleted = 0;

  for await (const fileRef of list.items) {
    await deleteFile(fileRef.fullPath);
    filesDeleted++;
  }
  for await (const folderRef of list.prefixes) {
    filesDeleted += await deleteFolderRecursive(folderRef.fullPath);
  }
  return filesDeleted;
};
// Usage
const deleteFolder = async (folderPath: string) => {
  try {
    const filesDeleted = deleteFolderRecursive(folderPath);
    console.log(`${filesDeleted} files has been deleted`);
    // you can now, for instance, unblock the UI at this point
  } catch (err) {
    // probably denied permissions or 'path/to/storage/folder' is not a folder
    console.error(err);
  }
};

const DeleteButton: React.FC<Props> = ({
  clicked,
  setClicked,
  docId,
  purpose,
}) => {
  const handleClick = async () => {
    if (purpose === 'member') {
      let memberImageListRef = ref(storage, `images/members/${docId}/`);

      try {
        setClicked((prev) => true);
        toast.loading(`Deleting Member...`);
        await deleteFolder(memberImageListRef.fullPath);
        await deleteDoc(doc(db, 'members', docId));
        toast.dismiss();
        toast.success('Successfully deleted!');
      } catch (err) {
        console.log('error', err);
        toast.dismiss();
        toast.error('Failed to delete member!');
      } finally {
        setClicked((prev) => false);
      }
    }
    if (purpose === 'team') {
      let teamImageListRef = ref(storage, `images/teams/${docId}/`);

      try {
        setClicked((prev) => true);
        toast.loading(`Deleting Team...`);
        await deleteFolder(teamImageListRef.fullPath);
        await deleteDoc(doc(db, 'teams', docId));
        toast.dismiss();
        toast.success('Successfully deleted!');
      } catch (err) {
        console.log('error', err);
        toast.dismiss();
        toast.error('Failed to delete team!');
      } finally {
        setClicked((prev) => false);
      }
    }
  };
  return (
    <button onClick={handleClick} disabled={clicked} type="button">
      Delete
    </button>
  );
};

export default DeleteButton;
