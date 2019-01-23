
import * as types from './types';

let actions = {
    [types.VIEW_FOOT]:({commit},payload) => commit(types.VIEW_FOOT,payload),
    [types.VIEW_LOAD]:({commit},payload) => commit(types.VIEW_LOAD,payload)
};

export default actions;