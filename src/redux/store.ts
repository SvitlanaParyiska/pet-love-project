import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { UserState } from "../types/auth";
import { dataBaseReducer } from "./dataBase/dataBaseSlice";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    user: persistReducer<UserState>(persistConfig, userReducer),
    daseData: dataBaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
