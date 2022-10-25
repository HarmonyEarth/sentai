import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Member, Team } from '../models/team';
import { streamMembers, streamTeams } from '../firebase';
interface Props {
  setFileArray:
    | React.Dispatch<React.SetStateAction<Team[]>>
    | React.Dispatch<React.SetStateAction<Member[]>>;
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
          const updatedTeams = snapshot.docs.map(
            (docSnapshot) => docSnapshot.data() as Team
          );
          addDataToFileArray.current?.((prev: Team[]) => updatedTeams);
        },
        (error) => console.log(error)
      );
      return unsubscribe;
    } else if (dataStream === 'members') {
      const unsubscribe = streamMembers(
        (snapshot) => {
          const updatedMembers = snapshot.docs.map(
            (docSnapshot) => docSnapshot.data() as Member
          );
          addDataToFileArray.current?.((prev: Member[]) => updatedMembers);
        },
        (error) => console.log(error)
      );
      return unsubscribe;
    }
  }, [addDataToFileArray, dataStream]);
};

export default useStream;
