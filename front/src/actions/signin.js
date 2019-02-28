export const signinAuth = (user, token) => ({
  type: 'SIGNIN',
  user,
  token,
});

export const logout = () => ({
  type: 'SIGNOUT',
});
