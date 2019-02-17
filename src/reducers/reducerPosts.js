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
                'text': action.payload,
                'id': j
            };
            j += 1;
            for (let i = state.length - 1; i >= 0; i -= 1) {
                newState[j] = {
                    'text': state[i].text,
                    'id': j
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
