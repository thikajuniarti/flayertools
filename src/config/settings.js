import { getEnvironment } from "./environment";

const env = getEnvironment();

const default_setting = {
    backend: "https://be-sales-flyer.herokuapp.com",
    userStorage: "user"
}

const settings = {
  development: {
    ...default_setting
  },
  production: {
    ...default_setting
  },
  staging: {
    ...default_setting
  }
};

const setting = settings[env];

export default setting;
