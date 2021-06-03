import { PARTNERS } from '../shared/partners';


// we chose to capitalize here but not needed, also used an arrow func but stylistic choice (could use regular func if wanted) 
export const Partners = (state = PARTNERS, action) => {
    switch (action.type) {
        // made it default because nothing to send through state yet
        default:
        return state;
    }
};