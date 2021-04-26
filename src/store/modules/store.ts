// redux
import { createStore, applyMiddleware } from "redux";

// persist
import { persistStore } from "redux-persist";
import { rootPersist } from "./rootPersist";

// saga
import createSagaMiddleware from "redux-saga";

// reducers
import { reducers } from "./rootReducer";

// criar a saga
const sagaMiddleware = createSagaMiddleware();

// criar a store, usar persist, aplicar a saga
const store = createStore(
	rootPersist(reducers),
	applyMiddleware(sagaMiddleware)
);

// lançar o persistor
const persistor = persistStore(store);

// lançar a saga
// sagaMiddleware.run(sagas);

export { store, persistor };
export default store;

// config typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
