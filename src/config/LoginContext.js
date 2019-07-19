import React from "react";

import { initUser } from "../helpers/user";

const LoginContext = React.createContext({
  ...initUser
});

export default LoginContext;
