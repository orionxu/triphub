const initialState = {
    currentUser: {},
    user_tags : [],
    authenticated: false,
    waitForAuth: false,
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'WAIT_FOR_AUTH':
            return {...state, waitForAuth: true};
        case 'LOGIN_USER':
            const tags_list = action.payload.tags.split(',');
            return {...state, currentUser: action.payload.user, user_tags: tags_list, authenticated: true, waitForAuth: false};
        case 'LOGOUT_USER':
            return {...state, currentUser: {}, authenticated: false};
        default:
            return state;
    }
}