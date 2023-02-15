import user_types from "./types";
const init_state = {
    id: 0,
    username: "",
    name: "",
    email: "",
    isAdmin: 0
}

function userReducer(state = init_state, action){
    if (action.type === user_types.USER_LOGIN) {
        return {
          ...state,
          id: action.payload.id,
          username: action.payload.username,
          name: action.payload.name,
          email: action.payload.email,
          isAdmin: action.payload.isAdmin,
        };
    }
    else if (action.type === user_types.USER_LOGOUT) {
        return init_state;
    }
    return state
}

export default userReducer