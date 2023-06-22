import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favouritesReducer } from './favourites/favourites.slice';
import { userSilce } from './user/user.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger'

// const logger = createLogger({
//     collapsed: true,
// })
const reducers = combineReducers({
    favourites: favouritesReducer,
    user: userSilce.reducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
        // .concat(logger),
})

export default store;