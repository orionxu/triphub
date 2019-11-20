const initialState = {
    currentUser: {},
    authenticated: false,
    waitForAuth: false,
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'WAIT_FOR_AUTH':
            return {...state, waitForAuth: true};
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload, authenticated: true, waitForAuth: false};
        case 'LOGOUT_USER':
            return {...state, currentUser: {}, authenticated: false};
        default:
            return state;
    }
}