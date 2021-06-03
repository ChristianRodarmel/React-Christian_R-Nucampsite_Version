import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// we chose to capitalize here but not needed, also used an arrow func but stylistic choice (could use regular func if wanted) 
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
            case ActionTypes.ADD_COMMENT:
                const comment = action.payload;
                comment.id = state.length;
                comment.date = new Date().toISOString();
                return state.concat(comment);
        default:
        return state;
    }
};

// made it default because nothing to send through state yet