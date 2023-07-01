import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './HOC/RequireAuth';
import useStream from './hooks/useStream';
import { useAppDispatch } from './hooks/reduxTypedHooks';
import { trackAuthStatus } from './auth';
import { logUserIn, logUserOut } from './rtk/slice/userSlice';
import { streamMembers, streamTeams } from './firebase';
import { useMediaQuery, useTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import Loading from './components/Loading/Loading';
import { Member, Team } from './models/types';

const Series = lazy(() => import('./pages/Series'));
const HeroDetails = lazy(() => import('./pages/HeroDetails'));
const TeamDetails = lazy(() => import('./pages/TeamDetails'));
const CMS = lazy(() => import('./pages/CMS'));
const Teams = lazy(() => import('./pages/Teams'));
const EditTeam = lazy(() => import('./pages/EditTeam'));
const EditMember = lazy(() => import('./pages/EditMember'));

function App() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [members, setMembers] = useState<Member[] | null>(null);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const extraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const small = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const large = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const extraLarge = useMediaQuery(theme.breakpoints.up('xl'));

  const screenSizes = {
    extraSmall,
    small,
    large,
    extraLarge,
  };

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

  if (!teams || !members) return <Loading />;

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
              <Suspense fallback={<Loading />}>
                <Series
                  teams={completeTeams}
                  members={completeMembers}
                  mobile={mobile}
                />
              </Suspense>
            }
          />
          <Route path="/teams" element={<Teams />} />
          <Route
            path="/:teamId"
            element={
              <Suspense fallback={<Loading />}>
                <TeamDetails
                  teams={completeTeams}
                  members={completeMembers}
                  mobile={mobile}
                />
              </Suspense>
            }
          />
          <Route
            path="/:teamId/:heroId"
            element={
              <Suspense fallback={<Loading />}>
                <HeroDetails
                  members={completeMembers}
                  teams={completeTeams}
                  mobile={mobile}
                  screenSizes={screenSizes}
                />
              </Suspense>
            }
          />
          <Route
            path="/cms"
            element={
              <RequireAuth>
                <Suspense fallback={<Loading />}>
                  <CMS teams={teams} members={members} />
                </Suspense>
              </RequireAuth>
            }
          />
          <Route
            path="/cms/team/:id"
            element={
              <RequireAuth>
                <Suspense fallback={<Loading />}>
                  <EditTeam teams={teams} mobile={mobile} />
                </Suspense>
              </RequireAuth>
            }
          />
          <Route
            path="/cms/member/:id"
            element={
              <RequireAuth>
                <Suspense fallback={<Loading />}>
                  <EditMember
                    members={members}
                    teams={completeTeams}
                    mobile={mobile}
                    screenSizes={screenSizes}
                  />
                </Suspense>
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
