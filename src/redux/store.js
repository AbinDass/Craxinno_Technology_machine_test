import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { balanceSlice } from "./slice/balanceSlice";

const persistConfigPost = { key: "account", storage, version: 1 };

const BalancepersistedReducer = persistReducer(persistConfigPost, balanceSlice.reducer);
export const store = configureStore({
    reducer: {
        account: BalancepersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
