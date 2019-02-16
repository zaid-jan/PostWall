function post(data) {
    var temp = document.getElementById('text').value;
    if(temp === ''){
        return {
            type:'EmptyField',
        }
    }
    else{
        document.getElementById('text').value ='';
        return{
            type:'FormSubmitted',
            payload: temp,
        }
    }
   
}

module.exports = {
    post,
}