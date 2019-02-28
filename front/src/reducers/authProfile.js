const initialState = {
  user: {
    email: '',
    password: '',
  },
  token: '',
};

const authProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN':
      console.log('action-signinProfile:', action);
      return {
        user: { ...action.user },
        token: action.token,
      };
    case 'SIGNOUT':
      return { initialState };
    default:
      return state;
  }
};

export default authProfile;
