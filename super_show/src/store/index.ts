import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
sagaMiddleware.run(rootSaga)
