import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Member, Team } from '../models/team';
import { streamMembers, streamTeams } from '../firebase';
interface Props {
  setFileArray:
    | React.Dispatch<React.SetStateAction<Team[] | null>>
    | React.Dispatch<React.SetStateAction<Member[] | null>>;
  dataStream: string;
}

const useCallbackRef = (callback: any) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

const useStream = ({ dataStream, setFileArray }: Props) => {
  const addDataToFileArray = useCallbackRef(setFileArray);

  useEffect(() => {
    if (dataStream === 'teams') {
      const unsubscribe = streamTeams(
        (snapshot) => {
          const updatedTeams: Team[] = [];
          snapshot.docs.forEach((doc) => {
            updatedTeams.push({ ...doc.data(), id: doc.id } as Team);
          });
          addDataToFileArray.current?.((prev: Team[]) => updatedTeams);
        },
        (error) => console.log(error)
      );
      return unsubscribe;
    } else if (dataStream === 'members') {
      const unsubscribe = streamMembers(
        (snapshot) => {
          const updatedMembers: Member[] = [];
          snapshot.docs.forEach((doc) => {
            updatedMembers.push({ ...doc.data(), id: doc.id } as Member);
          });
          addDataToFileArray.current?.((prev: Member[]) => updatedMembers);
        },
        (error) => console.log(error)
      );
      return unsubscribe;
    }
  }, [addDataToFileArray, dataStream]);
};

export default useStream;
