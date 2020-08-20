import apiHelper from './apiHelper';

const login = ({username, password }) => {
  return apiHelper('post', 'https://api.taiga.io/api/v1/auth', {
    username,
    password,
    type: 'normal',
  });
}
export default login;