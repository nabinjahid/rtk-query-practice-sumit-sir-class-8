import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import counterReducer from "../features/counters/countersSlice";

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
    },
    middleware: (getDefaultMidlewares) =>
        getDefaultMidlewares().concat(apiSlice.middleware),
});

// setupListeners(store.dispatch);

export default store;
