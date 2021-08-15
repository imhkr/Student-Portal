import { FC, memo, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_AUTH_TOKEN } from "../src/api/base";
import { Suspense } from "react";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { useAppSelector } from "./store";
import { meSelector } from "./selectors/auth.selectors";
import { FiLoader } from "react-icons/fi";
import { authActions } from "./actions/auth.actions";
import { me } from "./api/auth";
interface Props {}

const App: FC<Props> = (props) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const user = useAppSelector(meSelector);
  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => authActions.fetch(u));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user && token) {
    return (
      <div>
        <FiLoader className="w-16 h-16 mx-auto my-28 animate-spin text-green-400 via-transparent" />
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <FiLoader className="mx-auto my-48 w-52 h-52 animate-spin text-green-600"></FiLoader>
      }
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
          </Route>

          <Route
            path={[
              "/dashboard",
              "/groups",
              "/groups2",
              "/groups/:groupId",
              "/groups2/:groupId",
              "/recording",
              "/users",
              "account_settings",
              "/batch/:batchNumber/lecture/:lectureNumber",
              "/account/profile",
            ]}
            exact
          >
            {user ? <AppContainerLazy /> : <Redirect to="/login" />}
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

App.defaultProps = {};

export default memo(App);
