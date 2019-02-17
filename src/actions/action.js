function post(event) {
    const { id, text } = event;
    if(text === ''){
        return {
            type:'EmptyField',
        }
    }
    else{
        document.getElementById(id).value = '';
        return{
            type:'FormSubmitted',
            payload: text,
        }
    }
   
}

module.exports = {
    post,
}