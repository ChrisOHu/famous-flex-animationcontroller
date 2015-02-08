/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2015
 */

/*global define, moment, console*/
/*eslint no-use-before-define:0, no-console:0*/

define(function(require) {

    //<webpack>
    require('famous-polyfills');
    require('famous/core/famous.css');
    require('./styles.css');
    require('./index.html');
    //</webpack>

    // import dependencies
    var Engine = require('famous/core/Engine');
    var ViewContainer = require('./ViewContainer');
    var ProfileView = require('./views/ProfileView');

    // create the main context
    var mainContext = Engine.createContext();
    var viewContainer = new ViewContainer();
    mainContext.add(viewContainer);

    // create views
    var profileView = new ProfileView();
    profileView.on('click', function() {
        viewContainer.hide({
            view: profileView
        });
    });

    viewContainer.show({
        view: profileView
    });

});