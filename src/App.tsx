import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./HOC/RequireAuth";
import useStream from "./hooks/useStream";
import { useAppDispatch } from "./hooks/reduxTypedHooks";
import { logUserIn, logUserOut } from "./rtk/slice/userSlice";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./components/Navbar/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import { Member, Team } from "./types";
import { streamMembers, streamTeams } from "./firebase";
import { trackAuthStatus } from "./auth";
import Footer from "./components/Footer/Footer";

const Series = lazy(() => import("./pages/Series"));
const Heroes = lazy(() => import("./pages/Heroes"));
const HeroDetails = lazy(() => import("./pages/HeroDetails"));
const TeamDetails = lazy(() => import("./pages/TeamDetails"));
const CMS = lazy(() => import("./pages/CMS"));
const EditTeam = lazy(() => import("./pages/EditTeam"));
const EditMember = lazy(() => import("./pages/EditMember"));

function App() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [members, setMembers] = useState<Member[] | null>(null);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const completeMembers = members
    ? members.filter((member) => Object.values(member).every((value) => value))
    : [];

  const completeTeams = teams
    ? teams.filter(
        (team) =>
          completeMembers.some((member) => member.teamId === team.teamId) &&
          Object.values(team).every((value) => value)
      )
    : [];

  return (
    <>
      <Navbar />
      <Toaster />
      <ScrollToTop />
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
            path="/heroes"
            element={
              <Suspense fallback={<Loading />}>
                <Heroes
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
                  <EditMember members={members} teams={teams} mobile={mobile} />
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
      <Footer />
    </>
  );
}

export default App;
