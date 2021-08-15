import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import LoginPage from "./Login.page";
import SignUpPage from "./Signup.page";

interface Props { }

const Auth: FC<Props> = (props) => {
    return (
        <div className="flex  justify-between ">
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>

            </Switch>
            <AuthHero />
        </div>
    );
};

Auth.defaultProps = {};

export default memo(Auth);
