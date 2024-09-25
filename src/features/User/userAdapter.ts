import { User, UserAPI } from './userTypes';

/**
 * @description Adapta o UserAPI para o modelo de User.
 */
function toUser(userApi: UserAPI): User {
  return {
    id: userApi.id,
    email: userApi.email,
  };
}

export const userAdapter = {
  toUser,
};
