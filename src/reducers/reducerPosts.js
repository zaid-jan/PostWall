// eslint-disable-next-line linebreak-style
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
/* eslint-disable id-length */
export default function posts(state, action) {
    if (state == 'undefined') {
        return {};
    }
    console.log("Action type", action.type)
    switch (action.type) {
        case 'FormSubmitted':
            return handleSubmit(state, action);
        case 'EmptyField':
            return state;
        case 'LikeCLicked':
            return handleLike(state, action);
        case 'CommentAdded':
            return handleComment(state, action);
        default:
            return [];
    }
}

function handleComment(state, action) {
    const { id, text } = action.payload;
    let newState = state.map((post) => {
        return post;
    })
    let index = newState.findIndex(obj => {
        return obj.id == id
    })
    // console.log(newState[index].comments.size())
    newState[index].comments[newState[index].comments.length] = text;
    console.log("Obj", newState[index])

    return newState;
    // console.log(id, text)
    
}

function handleLike(state, action) {
    let newState = state.map((post) => {
        return post;
    })
    const id = action.payload;
    let index = newState.findIndex(obj => {
        return obj.id == id
    })
    if(index === -1){
        return state
    }
    else{
        if(newState[index].userLiked == true) {
            newState[index].likes -= 1;
            newState[index].userLiked = !newState[index].userLiked;
        }
        else {
            newState[index].likes += 1;
            newState[index].userLiked = !newState[index].userLike
        }
    }
    console.log('newState', newState)
    return newState;
}

function handleSubmit(state, action) {
    let newState = [];
    const defaults = {
        'name' : 'Zaid Jan',
        'designation' : 'Student of Computer Science, Taking It One Day At a Time',
        'img' : '../imgs/user.png',
    };
    let j = 0;
    newState = state.map((post) => {
        j += 1;
        return post;
    })
    newState[j] = {
        'id': j,
        'text': action.payload,
        'userLiked': false,
        'likes': 0,
        'comments':[],
        ...defaults
    };
    return newState;
}