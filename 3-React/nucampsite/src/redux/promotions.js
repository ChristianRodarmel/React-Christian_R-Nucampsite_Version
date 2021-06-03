import { PROMOTIONS } from '../shared/promotions';


// we chose to capitalize here but not needed, also used an arrow func but stylistic choice (could use regular func if wanted) 
export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        // made it default because nothing to send through state yet
        default:
        return state;
    }
};