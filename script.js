/* RocketChat-Pivotal Integration Script */
/* Version: 0.1 */
/* Author: Nick Busey */
/* License: GNU GPLv3 */

/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

class Script {
  /**
   * @params {object} request
   */
  process_incoming_request({ request }) {
    return {
      content:{
        text: request.content.message+" "+request.content.primary_resources[0].name+" "+request.content.primary_resources[0].url,
        "attachments": [{
           "fields": [{
             "short": true
           }]
        }]
      }
    };
  }
}