const Validator = require('validator');
const isEmpty =require( './is-empty');

module.exports =   function validatePostInput(data){
    let errors = {};
   
    data.text = !isEmpty(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, {min: 5, max:300})){
        errors.text = 'post must be between 5 - 300 characters long';
    }
    if(Validator.isEmpty(data.text)){
        errors.text = 'text field is required';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    };
};