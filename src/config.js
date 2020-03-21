/**
 * @typedef appConfig
 */
const config = {
  api: {
    url: process.env.REACT_APP_API_URL,
  },
  myinfo: {
    authApiUrl: process.env.REACT_APP_MYINFO_AUTH_URL,
    clientId: process.env.REACT_APP_MYINFO_CLIENT_ID,
    redirectUrl: process.env.REACT_APP_MYINFO_REDIRECT_URL,
    attributes: process.env.REACT_APP_MYINFO_ATTRIBUTES,
  },
};
export default config;
