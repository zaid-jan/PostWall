/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
/* eslint-disable id-length */
export default function posts(state, action) {
    if (state == 'undefined') {
        return {};
    }
    // console.log("Action type", action.type)
    switch (action.type) {
        case 'FormSubmitted':
            const newState = [];
            let j = 0;
            newState[j] = {
                'id': j,
                'text': action.payload
            };
            j += 1;
            for (let i = state.length - 1; i >= 0; i -= 1) {
                newState[j] = {
                    'id': j,
                    'text': state[i].text
                };
                j += 1;
            }

return newState;
        case 'EmptyField':
            return state;
        default:
            return [];
    }
}
