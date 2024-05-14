import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, listAll, ref } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { db, storage } from "../../firebase";
import { Purpose } from "../../constants";

interface Props {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  docId: string;
  purpose: Purpose;
}

const DeleteButton: React.FC<Props> = ({
  clicked,
  setClicked,
  docId,
  purpose,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setShowConfirmation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleConfirm = async () => {
    setShowConfirmation(false);
    if (purpose === Purpose.Member) {
      let memberImageListRef = ref(storage, `images/members/${docId}/`);

      try {
        setClicked((prev) => true);
        toast.loading(`Deleting Member...`);
        await deleteFolder(memberImageListRef.fullPath);
        await deleteDoc(doc(db, "members", docId));
        toast.dismiss();
        toast.success("Successfully deleted!");
      } catch (err) {
        console.log("error", err);
        toast.dismiss();
        toast.error("Failed to delete member!");
      } finally {
        setClicked((prev) => false);
      }
    }
    if (purpose === Purpose.Team) {
      let teamImageListRef = ref(storage, `images/teams/${docId}/`);

      try {
        setClicked((prev) => true);
        toast.loading(`Deleting Team...`);
        await deleteFolder(teamImageListRef.fullPath);
        await deleteDoc(doc(db, "teams", docId));
        toast.dismiss();
        toast.success("Successfully deleted!");
      } catch (err) {
        console.log("error", err);
        toast.dismiss();
        toast.error("Failed to delete team!");
      } finally {
        setClicked((prev) => false);
      }
    }
  };

  const handleClick = () => {
    setShowConfirmation(true);
  };
  const handleDecline = () => {
    setShowConfirmation(false);
  };
  return (
    <>
      <button onClick={handleClick} disabled={clicked} type="button">
        Delete
      </button>
      {showConfirmation && (
        <dialog open ref={dialogRef}>
          <p>Are you sure you wish to delete? Yes or no?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleDecline}>No</button>
        </dialog>
      )}
    </>
  );
};

export default DeleteButton;

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
  } catch (err) {
    console.error(err);
  }
};
