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

function like(event) {
    const id = event.target.getAttribute('compid'); 
    return {
        'type': 'LikeCLicked',
        'payload': id
    }
}

export default {
    post, 
    like
};
