const initialState = {
    currentUser: {},
    authenticated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload, authenticated: true};
        case 'LOGOUT_USER':
            return {...state, currentUser: {}, authenticated: false};
        default:
            return state;
    }
}