'use strict';

/* --------------------------------------------------------------
 events.js 2016-02-25
 Gambio GmbH
 http://www.gambio.de
 Copyright (c) 2016 Gambio GmbH
 Released under the GNU General Public License (Version 2)
 [http://www.gnu.org/licenses/gpl-2.0.html]
 --------------------------------------------------------------
 */

jse.libs.template.events = jse.libs.template.events || {};

/**
 * ## Honeygrid Event Constants Library
 * 
 * Contains all triggered custom event names. Use the methods to get the event names.
 *
 * @module Honeygrid/Libs/events
 * @exports jse.libs.template.events
 */
(function (exports) {

	'use strict';

	/**
  * OPEN_FLYOUT Constant
  * 
  * @return {string}
  */

	exports.OPEN_FLYOUT = function () {
		return 'OPEN_FLYOUT';
	};

	/**
  * TRANSITION Constant
  *
  * @return {string}
  */
	exports.TRANSITION = function () {
		return 'TRANSITION';
	};

	/**
  * TRANSITION_FINISHED Constant
  *
  * @return {string}
  */
	exports.TRANSITION_FINISHED = function () {
		return 'TRANSITION_FINISHED';
	};

	/**
  * TRANSITION_STOP Constant
  *
  * @return {string}
  */
	exports.TRANSITION_STOP = function () {
		return 'TRANSITION_STOP';
	};

	/**
  * BREAKPOINT Constant
  *
  * @return {string}
  */
	exports.BREAKPOINT = function () {
		return 'BREAKPOINT';
	};

	/**
  * CART_OPEN Constant
  *
  * @return {string}
  */
	exports.CART_OPEN = function () {
		return 'CART_DROPDOWN_OPEN';
	};

	/**
  * CART_CLOSE Constant
  *
  * @return {string}
  */
	exports.CART_CLOSE = function () {
		return 'CART_DROPDOWN_CLOSE';
	};

	/**
  * CART_UPDATE Constant
  *
  * @return {string}
  */
	exports.CART_UPDATE = function () {
		return 'CART_DROPDOWN_UPDATE';
	};

	/**
  * SWIPER_GOTO Constant
  *
  * @return {string}
  */
	exports.SWIPER_GOTO = function () {
		return 'SWIPER_GOTO';
	};

	/**
  * SLIDES_UPDATE Constant
  *
  * @return {string}
  */
	exports.SLIDES_UPDATE = function () {
		return 'SLIDES_UPDATE';
	};

	/**
  * CHECK_CART Constant
  *
  * @return {string}
  */
	exports.CHECK_CART = function () {
		return 'CHECK_CART';
	};

	/**
  * CART_UPDATED Constant
  *
  * @return {string}
  */
	exports.CART_UPDATED = function () {
		return 'CART_UPDATED';
	};

	/**
  * REPOSITIONS_STICKYBOX Constant
  *
  * @return {string}
  */
	exports.REPOSITIONS_STICKYBOX = function () {
		return 'REPOSITIONS_STICKYBOX';
	};

	/**
  * ADD_CUSTOMIZER_WISHLIST Constant
  *
  * @return {string}
  */
	exports.ADD_CUSTOMIZER_WISHLIST = function () {
		return 'ADD_CUSTOMIZER_WISHLIST';
	};

	/**
  * ADD_CUSTOMIZER_CART Constant
  *
  * @return {string}
  */
	exports.ADD_CUSTOMIZER_CART = function () {
		return 'ADD_CUSTOMIZER_CART';
	};

	/**
  * WISHLIST_TO_CART Constant
  *
  * @return {string}
  */
	exports.WISHLIST_TO_CART = function () {
		return 'WISHLIST_TO_CART';
	};

	/**
  * WISHLIST_CART_DELETE Constant
  *
  * @return {string}
  */
	exports.WISHLIST_CART_DELETE = function () {
		return 'WISHLIST_CART_DELETE';
	};

	/**
  * MENU_REPOSITIONED Constant
  *
  * @return {string}
  */
	exports.MENU_REPOSITIONED = function () {
		return 'MENU_REPOSITIONED';
	};

	/**
  * STICKYBOX_CONTENT_CHANGE Constant
  * 
  * @returns {string}
     */
	exports.STICKYBOX_CONTENT_CHANGE = function () {
		return 'STICKYBOX_CONTENT_CHANGE';
	};

	/**
  * SHARE_CART_MODAL_READY Constant
  *
  * @returns {string}
  */
	exports.SHARE_CART_MODAL_READY = function () {
		return 'SHARE_CART_MODAL_READY';
	};
})(jse.libs.template.events);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvZXZlbnRzLmpzIl0sIm5hbWVzIjpbImpzZSIsImxpYnMiLCJ0ZW1wbGF0ZSIsImV2ZW50cyIsImV4cG9ydHMiLCJPUEVOX0ZMWU9VVCIsIlRSQU5TSVRJT04iLCJUUkFOU0lUSU9OX0ZJTklTSEVEIiwiVFJBTlNJVElPTl9TVE9QIiwiQlJFQUtQT0lOVCIsIkNBUlRfT1BFTiIsIkNBUlRfQ0xPU0UiLCJDQVJUX1VQREFURSIsIlNXSVBFUl9HT1RPIiwiU0xJREVTX1VQREFURSIsIkNIRUNLX0NBUlQiLCJDQVJUX1VQREFURUQiLCJSRVBPU0lUSU9OU19TVElDS1lCT1giLCJBRERfQ1VTVE9NSVpFUl9XSVNITElTVCIsIkFERF9DVVNUT01JWkVSX0NBUlQiLCJXSVNITElTVF9UT19DQVJUIiwiV0lTSExJU1RfQ0FSVF9ERUxFVEUiLCJNRU5VX1JFUE9TSVRJT05FRCIsIlNUSUNLWUJPWF9DT05URU5UX0NIQU5HRSIsIlNIQVJFX0NBUlRfTU9EQUxfUkVBRFkiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7QUFVQUEsSUFBSUMsSUFBSixDQUFTQyxRQUFULENBQWtCQyxNQUFsQixHQUEyQkgsSUFBSUMsSUFBSixDQUFTQyxRQUFULENBQWtCQyxNQUFsQixJQUE0QixFQUF2RDs7QUFFQTs7Ozs7Ozs7QUFRQyxXQUFTQyxPQUFULEVBQWtCOztBQUVsQjs7QUFFQTs7Ozs7O0FBS0FBLFNBQVFDLFdBQVIsR0FBc0IsWUFBVztBQUNoQyxTQUFPLGFBQVA7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBRCxTQUFRRSxVQUFSLEdBQXFCLFlBQVc7QUFDL0IsU0FBTyxZQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7QUFLQUYsU0FBUUcsbUJBQVIsR0FBOEIsWUFBVztBQUN4QyxTQUFPLHFCQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7QUFLQUgsU0FBUUksZUFBUixHQUEwQixZQUFXO0FBQ3BDLFNBQU8saUJBQVA7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBSixTQUFRSyxVQUFSLEdBQXFCLFlBQVc7QUFDL0IsU0FBTyxZQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7QUFLQUwsU0FBUU0sU0FBUixHQUFvQixZQUFXO0FBQzlCLFNBQU8sb0JBQVA7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBTixTQUFRTyxVQUFSLEdBQXFCLFlBQVc7QUFDL0IsU0FBTyxxQkFBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FQLFNBQVFRLFdBQVIsR0FBc0IsWUFBVztBQUNoQyxTQUFPLHNCQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7QUFLQVIsU0FBUVMsV0FBUixHQUFzQixZQUFXO0FBQ2hDLFNBQU8sYUFBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FULFNBQVFVLGFBQVIsR0FBd0IsWUFBVztBQUNsQyxTQUFPLGVBQVA7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBVixTQUFRVyxVQUFSLEdBQXFCLFlBQVc7QUFDL0IsU0FBTyxZQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7QUFLQVgsU0FBUVksWUFBUixHQUF1QixZQUFXO0FBQ2pDLFNBQU8sY0FBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FaLFNBQVFhLHFCQUFSLEdBQWdDLFlBQVc7QUFDMUMsU0FBTyx1QkFBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FiLFNBQVFjLHVCQUFSLEdBQWtDLFlBQVc7QUFDNUMsU0FBTyx5QkFBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FkLFNBQVFlLG1CQUFSLEdBQThCLFlBQVc7QUFDeEMsU0FBTyxxQkFBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FmLFNBQVFnQixnQkFBUixHQUEyQixZQUFXO0FBQ3JDLFNBQU8sa0JBQVA7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBaEIsU0FBUWlCLG9CQUFSLEdBQStCLFlBQVc7QUFDekMsU0FBTyxzQkFBUDtBQUNBLEVBRkQ7O0FBSUE7Ozs7O0FBS0FqQixTQUFRa0IsaUJBQVIsR0FBNEIsWUFBVztBQUN0QyxTQUFPLG1CQUFQO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7QUFLQWxCLFNBQVFtQix3QkFBUixHQUFtQyxZQUFXO0FBQzdDLFNBQU8sMEJBQVA7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBbkIsU0FBUW9CLHNCQUFSLEdBQWlDLFlBQVc7QUFDM0MsU0FBTyx3QkFBUDtBQUNBLEVBRkQ7QUFJQSxDQXhMQSxFQXdMQ3hCLElBQUlDLElBQUosQ0FBU0MsUUFBVCxDQUFrQkMsTUF4TG5CLENBQUQiLCJmaWxlIjoibGlicy9ldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIGV2ZW50cy5qcyAyMDE2LTAyLTI1XG4gR2FtYmlvIEdtYkhcbiBodHRwOi8vd3d3LmdhbWJpby5kZVxuIENvcHlyaWdodCAoYykgMjAxNiBHYW1iaW8gR21iSFxuIFJlbGVhc2VkIHVuZGVyIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSAoVmVyc2lvbiAyKVxuIFtodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sXVxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuanNlLmxpYnMudGVtcGxhdGUuZXZlbnRzID0ganNlLmxpYnMudGVtcGxhdGUuZXZlbnRzIHx8IHt9O1xuXG4vKipcbiAqICMjIEhvbmV5Z3JpZCBFdmVudCBDb25zdGFudHMgTGlicmFyeVxuICogXG4gKiBDb250YWlucyBhbGwgdHJpZ2dlcmVkIGN1c3RvbSBldmVudCBuYW1lcy4gVXNlIHRoZSBtZXRob2RzIHRvIGdldCB0aGUgZXZlbnQgbmFtZXMuXG4gKlxuICogQG1vZHVsZSBIb25leWdyaWQvTGlicy9ldmVudHNcbiAqIEBleHBvcnRzIGpzZS5saWJzLnRlbXBsYXRlLmV2ZW50c1xuICovXG4oZnVuY3Rpb24oZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBPUEVOX0ZMWU9VVCBDb25zdGFudFxuXHQgKiBcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZXhwb3J0cy5PUEVOX0ZMWU9VVCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAnT1BFTl9GTFlPVVQnO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFRSQU5TSVRJT04gQ29uc3RhbnRcblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZXhwb3J0cy5UUkFOU0lUSU9OID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdUUkFOU0lUSU9OJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBUUkFOU0lUSU9OX0ZJTklTSEVEIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuVFJBTlNJVElPTl9GSU5JU0hFRCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAnVFJBTlNJVElPTl9GSU5JU0hFRCc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogVFJBTlNJVElPTl9TVE9QIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuVFJBTlNJVElPTl9TVE9QID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdUUkFOU0lUSU9OX1NUT1AnO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIEJSRUFLUE9JTlQgQ29uc3RhbnRcblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZXhwb3J0cy5CUkVBS1BPSU5UID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdCUkVBS1BPSU5UJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBDQVJUX09QRU4gQ29uc3RhbnRcblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZXhwb3J0cy5DQVJUX09QRU4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ0NBUlRfRFJPUERPV05fT1BFTic7XG5cdH07XG5cdFxuXHQvKipcblx0ICogQ0FSVF9DTE9TRSBDb25zdGFudFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRleHBvcnRzLkNBUlRfQ0xPU0UgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ0NBUlRfRFJPUERPV05fQ0xPU0UnO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIENBUlRfVVBEQVRFIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuQ0FSVF9VUERBVEUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ0NBUlRfRFJPUERPV05fVVBEQVRFJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBTV0lQRVJfR09UTyBDb25zdGFudFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRleHBvcnRzLlNXSVBFUl9HT1RPID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdTV0lQRVJfR09UTyc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogU0xJREVTX1VQREFURSBDb25zdGFudFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRleHBvcnRzLlNMSURFU19VUERBVEUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ1NMSURFU19VUERBVEUnO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIENIRUNLX0NBUlQgQ29uc3RhbnRcblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZXhwb3J0cy5DSEVDS19DQVJUID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdDSEVDS19DQVJUJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBDQVJUX1VQREFURUQgQ29uc3RhbnRcblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZXhwb3J0cy5DQVJUX1VQREFURUQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ0NBUlRfVVBEQVRFRCc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogUkVQT1NJVElPTlNfU1RJQ0tZQk9YIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuUkVQT1NJVElPTlNfU1RJQ0tZQk9YID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdSRVBPU0lUSU9OU19TVElDS1lCT1gnO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIEFERF9DVVNUT01JWkVSX1dJU0hMSVNUIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuQUREX0NVU1RPTUlaRVJfV0lTSExJU1QgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ0FERF9DVVNUT01JWkVSX1dJU0hMSVNUJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBBRERfQ1VTVE9NSVpFUl9DQVJUIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuQUREX0NVU1RPTUlaRVJfQ0FSVCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAnQUREX0NVU1RPTUlaRVJfQ0FSVCc7XG5cdH07XG5cdFxuXHQvKipcblx0ICogV0lTSExJU1RfVE9fQ0FSVCBDb25zdGFudFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRleHBvcnRzLldJU0hMSVNUX1RPX0NBUlQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ1dJU0hMSVNUX1RPX0NBUlQnO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAqIFdJU0hMSVNUX0NBUlRfREVMRVRFIENvbnN0YW50XG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuV0lTSExJU1RfQ0FSVF9ERUxFVEUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ1dJU0hMSVNUX0NBUlRfREVMRVRFJztcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBNRU5VX1JFUE9TSVRJT05FRCBDb25zdGFudFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRleHBvcnRzLk1FTlVfUkVQT1NJVElPTkVEID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdNRU5VX1JFUE9TSVRJT05FRCc7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNUSUNLWUJPWF9DT05URU5UX0NIQU5HRSBDb25zdGFudFxuXHQgKiBcblx0ICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cblx0ZXhwb3J0cy5TVElDS1lCT1hfQ09OVEVOVF9DSEFOR0UgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ1NUSUNLWUJPWF9DT05URU5UX0NIQU5HRSc7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNIQVJFX0NBUlRfTU9EQUxfUkVBRFkgQ29uc3RhbnRcblx0ICpcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGV4cG9ydHMuU0hBUkVfQ0FSVF9NT0RBTF9SRUFEWSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAnU0hBUkVfQ0FSVF9NT0RBTF9SRUFEWSc7XG5cdH07XG5cbn0oanNlLmxpYnMudGVtcGxhdGUuZXZlbnRzKSk7Il19
