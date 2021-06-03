import { COMMENTS } from '../shared/comments';


// we chose to capitalize here but not needed, also used an arrow func but stylistic choice (could use regular func if wanted) 
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        // made it default because nothing to send through state yet
        default:
        return state;
    }
};