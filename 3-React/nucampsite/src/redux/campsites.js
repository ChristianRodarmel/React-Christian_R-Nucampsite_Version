import { CAMPSITES } from '../shared/campsites';


// we chose to capitalize here but not needed, also used an arrow func but stylistic choice (could use regular func if wanted) 
export const Campsites = (state = CAMPSITES, action) => {
    switch (action.type) {
        // made it default because nothing to send through state yet
        default:
        return state;
    }
};