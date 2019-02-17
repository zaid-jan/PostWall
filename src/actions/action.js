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

function comment(event) {
    const { id, text, compid } = event;
    if (text === '') {
        return {
            'type': 'EmptyField'
        };
    }
    console.log("id", id)
    document.getElementById(id).value = '';
    let obj = {
        'text': text,
        'id': compid
    }
    return {
        'payload': obj,
        'type': 'CommentAdded'
    };
}

export default {
    post, 
    like,
    comment
};
