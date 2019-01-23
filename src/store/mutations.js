import {VIEW_FOOT,VIEW_LOAD} from './types';
let mutations ={
    [VIEW_FOOT]:(state,payload) => state.bFoot = payload,
    [VIEW_LOAD]:(state,payload) => state.loading = payload
};

export default mutations;