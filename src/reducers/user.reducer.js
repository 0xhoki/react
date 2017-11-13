export const USER_LOGIN = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const RESTORE_PASSWORD = 'RESTORE_PASSWORD';
export const RESTORE_PASSWORD_FAIL = 'RESTORE_PASSWORD_FAIL';

export const INIT_STATE = {
  id: localStorage.getItem('$app.user.id'),
  token: JSON.parse(localStorage.getItem('$app.user.token') || '{}'),
  userInfo: JSON.parse(localStorage.getItem('$app.user.info') || '{}'),
  permissions: JSON.parse(localStorage.getItem('$app.user.permissions') || '[]')
};

export default function (state = INIT_STATE, {type, payload}) {
  const $state = {...state};
  switch (type) {
    case USER_LOGIN:

      $state.token = {
        accessToken: payload.accessToken,
        accessTokenExpire: payload.accessTokenExpire
      };

      $state.info = {
        name: payload.authInfo.displayName,
        pictureUrl: payload.authInfo.pictureUrl,
        email: payload.authInfo.email
      };

      $state.id = payload.authInfo.userId;

      $state.permissions = payload.authInfo.permissions || [];
      $state.permissions.push('user');

      localStorage.setItem('$app.user.id', $state.id);
      localStorage.setItem('$app.user.token', JSON.stringify($state.token));
      localStorage.setItem('$app.user.info', JSON.stringify($state.info));
      localStorage.setItem('$app.user.permissions', JSON.stringify($state.permissions));

      return $state;
    case USER_LOGOUT:
      localStorage.removeItem('$app.user.id');
      localStorage.removeItem('$app.user.token');
      localStorage.removeItem('$app.user.info');
      localStorage.removeItem('$app.user.permissions');

      return {...INIT_STATE};
    default:
      return $state;
  }
}
