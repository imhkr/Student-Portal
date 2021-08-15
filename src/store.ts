import { combineReducers, createStore, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { userReducer } from "./reducers/user.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/group.reducer";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware } from "./saga";
import { watchGroupQueryChanged} from "./saga/groups.sagas";

const reducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    groups: groupReducer,
    sidebar: sidebarReducer,
});


export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchGroupQueryChanged);
export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
