import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Header from "../../components/Header/Header";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingPage from "./Recording.page";
import OnChangeGroup from "././OnChangeGroup";
import OnSearchGroup from "././OnSearchGroup";
import AccountSetting from "./AccountSetting";
import GroupDetails from "./GroupDetails";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="bg-secondary md:h-full lg:h-full">
      <div>
        <Navbar />
        <Header Heading="Dashboard" />
      </div>
      <div>
        <div className="flex">
          <div>
            <Sidebar />
          </div>

          <div>
            <Switch>
              {/* <Sidebar show={true} /> */}

              <Route path="/dashboard">
                <DashboardPage />
              </Route>
              <Route path="/groups" exact>
                <OnChangeGroup />
              </Route>
              <Route path="/groups2/">
                <OnSearchGroup />
              </Route>
              <Route path="/groups/:groupId">
                <GroupDetails />
              </Route>
              <Route path="/groups2/:groupId">
                <GroupDetails />
              </Route>
              <Route path="/users" exact>
                <UsersList />
              </Route>
              <Route path="/users/:userId">
                <UserDetails />
              </Route>
              <Route path="/account/profile">
                <AccountSetting />
              </Route>
              <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                <LecturePage></LecturePage>
              </Route>
              <RecordingPage />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
