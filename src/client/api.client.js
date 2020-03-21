import { prop } from 'ramda';
/**
 * @external AxiosStatic
 * @typedef {{myinfo: myinfo}} apiClient
 */

/**
 *
 * @param {AxiosStatic} http
 * @param {appConfig} config
 * @return {apiClient}
 */
export default function Api(http, config) {
  /**
   * Request MyInfo data
   * @typedef myinfo
   * @param {string} authorizationCode
   * @return {Promise}
   */
  function myinfo(authorizationCode) {
    return http
      .get(`${config.api.url}/myinfo?code=${authorizationCode}`)
      .then(prop('data'));
  }
  return { myinfo };
}
