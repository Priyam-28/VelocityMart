import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Sidebar from "../components/Sidebar/Sidebar";
import LogInNav from "../components/LogInNav/LogInNav";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkingUserIsAuth = !user && loading;

  if (checkingUserIsAuth) {
    return <span className="loading loading-ball loading-lg"></span>;
  }

  return (
    <div className={`flex ${canRenderNavbar ? "flex-col" : "flex-row"}`}>
      {/* sidebar on the left */}
      {canRenderSidebar && (
        <div className="w-70 md:w-240">
          <Sidebar />
        </div>
      )}
      {canRenderNavbar && <LogInNav />}
      {/* the page content on the right */}
      <div className="flex-1 w-full md:w-auto mx-auto">{children}</div>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
