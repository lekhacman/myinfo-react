/**
 *
 * @param {Event} event
 * @return {function(...[*]=)}
 */
import config from '../../config';

export function goToSingPass(event) {
  const { myinfo } = config;
  const url = `${myinfo.authApiUrl}?client_id=${myinfo.clientId}&attributes=${myinfo.attributes}&purpose=fun&state=0&redirect_uri=${myinfo.redirectUrl}`;
  return function(dispatch, getState, { api }) {
    event.preventDefault();
    api.redirect(url);
  };
}
