/* eslint-disable linebreak-style */
function post(event) {
    const { id, text } = event;
    if (text === '') {
        return {
            'type': 'EmptyField'
        };
    }

        document.getElementById(id).value = '';

    return {
                'payload': text,
                'type': 'FormSubmitted'
            };


    }

export default {
    post
};
