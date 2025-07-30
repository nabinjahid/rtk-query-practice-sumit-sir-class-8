import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import counterReducer from "../features/counters/countersSlice";
import editeModeReducer from "../features/editeMode/editeModeSlice";
import editePostReducer from "../features/editPost/editePostSlice"

// custom middleware
// const myLogger = (store) => (next) => (action) => {
//     console.log(`Action is ${JSON.stringify(action)}`);
//     console.log(`Current state is ${JSON.stringify(store.getState())}`);

//     return next(action);
// };

const store = configureStore({
    reducer: {
        counters: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        editeMode:editeModeReducer,
        editePost:editePostReducer
    },
    middleware: (getDefaultMidlewares) =>
        getDefaultMidlewares().concat(apiSlice.middleware),
});

// setupListeners(store.dispatch);

export default store;
