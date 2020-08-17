function loginReducer(state, action) {
    switch (action.type) {
        case 'reset-errors': {
            return {
                ...state,
                usernameError: null,
                passwordError: null,
            };
        }
        case 'field': {
            return {
                ...state,
                [action.field]: action.value,
            };
        }
        default:
            break;
    }
    return state;
}

export default loginReducer;