import * as ActionTypes from './ActionTypes';

// we chose to capitalize here but not needed, also used an arrow func but stylistic choice (could use regular func if wanted) 
export const Comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return{...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
            case ActionTypes.ADD_COMMENT:
                const comment = action.payload;
                return {...state,comments: state.comments.concat(comment)};
        default:
        return state;
    }
};

// made it default because nothing to send through state yet