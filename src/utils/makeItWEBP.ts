import { toast } from 'react-hot-toast';
import convertToWEBP from './convertToWEBP';
import { FileState } from '../models/types';

interface FileConvertProps {
  filename: string;
  rawFile: File;
  setImage: React.Dispatch<React.SetStateAction<FileState>>;
}

const makeItWEBP = async ({
  filename,
  rawFile,
  setImage,
}: FileConvertProps) => {
  try {
    toast.loading(`Converting ${filename} to WEBP`);
    let newWEBP = await convertToWEBP({ rawFile });
    setImage(newWEBP);
    toast.dismiss();
    toast.success(`Successfully converted ${filename} to WEBP!`);
  } catch (err) {
    toast.dismiss();
    toast.error(`Failed to convert ${filename}, due to ${err}!`);
  } finally {
  }
};

export default makeItWEBP;
