import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HeroDetails from './pages/HeroDetails';
import Series from './pages/Series';
import TeamDetails from './pages/TeamDetails';
import CMS from './pages/CMS';
import Teams from './pages/Teams';
import { Member, Team } from './models/team';
import { Toaster } from 'react-hot-toast';

import RequireAuth from './HOC/RequireAuth';
import useStream from './hooks/useStream';
import { useAppDispatch } from './hooks/reduxTypedHooks';
import { trackAuthStatus } from './auth';
import { logUserIn, logUserOut } from './rtk/slice/userSlice';
import EditTeam from './pages/EditTeam';
import EditMember from './pages/EditMember';
import { streamMembers, streamTeams } from './firebase';
import { useMediaQuery, useTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [members, setMembers] = useState<Member[] | null>(null);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useAppDispatch();

  useStream({ setFileArray: setTeams, streamData: streamTeams });
  useStream({ setFileArray: setMembers, streamData: streamMembers });

  useEffect(() => {
    trackAuthStatus((user) => {
      if (user) {
        dispatch(logUserIn());
      } else {
        dispatch(logUserOut());
      }
    });
  }, [dispatch]);

  if (!teams || !members)
    return (
      <>
        <h1>Loading</h1>
      </>
    );

  const completeTeams = teams.filter((team) =>
    Object.values(team).every((value) => value)
  );

  const completeMembers = members.filter((member) =>
    Object.values(member).every((value) => value)
  );

  return (
    <>
      <Navbar />
      <Toaster />
      <HelmetProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Series
                teams={completeTeams}
                members={completeMembers}
                mobile={mobile}
              />
            }
          />
          <Route path="/teams" element={<Teams />} />
          <Route
            path="/:teamId"
            element={
              <TeamDetails
                teams={completeTeams}
                members={completeMembers}
                mobile={mobile}
              />
            }
          />
          <Route
            path="/:teamId/:heroId"
            element={
              <HeroDetails
                members={completeMembers}
                teams={completeTeams}
                mobile={mobile}
              />
            }
          />
          <Route
            path="/cms"
            element={
              <RequireAuth>
                <CMS teams={teams} members={members} />
              </RequireAuth>
            }
          />
          <Route
            path="/cms/team/:id"
            element={
              <RequireAuth>
                <EditTeam teams={teams} />
              </RequireAuth>
            }
          />
          <Route
            path="/cms/member/:id"
            element={
              <RequireAuth>
                <EditMember
                  members={members}
                  teams={completeTeams}
                  mobile={mobile}
                />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h1>Error 404</h1>
                <p>Page Not Found</p>
              </>
            }
          />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
