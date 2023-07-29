import logger from 'redux-logger';
//rc-redux-model，它提供一个 action API，只需记住一个 action，就能修改 state 的任意值
import RcReduxModel from 'rc-redux-model';
import { legacy_createStore as createStore , applyMiddleware, combineReducers } from 'redux';
// 👇 引入我们写好的 model
import globalModel from './globalModel';
import resumeModel from './resumeModel';
import templateModel from './templateModel';

// 👇 这里只需要调用 RcReduxModel 实例化一下得到最后的 reduxModel
const reduxModel = new RcReduxModel([globalModel, resumeModel, templateModel]);

// 👇 无侵入式的使用 Redux，即使你写最原始的 reducer 也照样支持
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));


