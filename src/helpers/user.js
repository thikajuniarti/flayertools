import setting from "../config/settings";

export const initUser = {
  user: {
    id: null,
    name: null,
    email: null
  },
  token: null,
  canExpired: true
}

const getExpired = () => {
  let expiredAt = new Date();
  return expiredAt.setHours(expiredAt.getHours() + setting.session_duration);
};

export const setUser = value => {
  if (!value) {
    return null;
  }
  value = { ...value, expiredAt: getExpired() };
  try {
    const user = JSON.stringify(value);
    localStorage.setItem(setting.userStorage, user);
  } catch (e) {}
};

export const getUser = () => {
  const storage = localStorage.getItem(setting.userStorage);
  let user = null;
  try {
    user = JSON.parse(storage);
    if (!user.email) {
      return null;
    }

    // check expired
    const now = new Date().getTime();
    if (now > user.expiredAt) {
      removeUser();
      return null;
    }
  } catch (e) {}
  return user;
};

export const removeUser = () => localStorage.removeItem(setting.userStorage);
