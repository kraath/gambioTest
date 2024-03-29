/* --------------------------------------------------------------
 checkbox.js 2016-06-01
 Gambio GmbH
 http://www.gambio.de
 Copyright (c) 2016 Gambio GmbH
 Released under the GNU General Public License (Version 2)
 [http://www.gnu.org/licenses/gpl-2.0.html]
 --------------------------------------------------------------
 */

/**
 * ## Checkbox Widget
 *
 * This extension can serve multiple types of checkboxes (simple switchers, text switchers and gambio-styled
 * checkboxes, radio-button switcher). Apply the widget in a parent container and it will search and convert 
 * all the instances into fine checkboxes
 * 
 * ### Options 
 * 
 * **Filter | `data-checkbox-filter` | String | Optional**
 * 
 * Provide a jQuery selector string for filtering the children elements of the parent container. 
 * 
 * **Checked State URL | `data-checkbox-on_url` | String | Optional**
 * 
 * If provided the user will be navigated to the given URL once he clicks a checked instance of the widget. 
 * 
 * **Unchecked State URL | `dat-acheckbox-off_url` | String | Optional**
 * 
 * If provided the user will be navigated ot the given URL once he clicks an unchecked instance of the widget.
 * 
 * **Checked State Text | `data-checkbox-on_text` | String | Optional** 
 * 
 * If provided it will be displayed instead of the normal check icon. 
 *
 * **Unchecked State Text | `data-checkbox-off_text` | String | Optional**
 *
 * If provided it will be displayed instead of the normal X icon.
 * 
 * **Custom Checkbox Class | `data-checkbox-class` | String | Optional**
 * 
 * Provide additional custom classes to the checkbox element. 
 * 
 * **Check Status | `data-checkbox-check` | Boolean | Optional**
 * 
 * Defines whether the checkbox is checked or not. Use this option to override the original checkbox state.
 * 
 * ### Examples
 * 
 * **Single Checkbox Example**
 * 
 * A single checkbox is just a better styled checkbox that can be used for seamless integration into the 
 * Gambio Admin pages. 
 * 
 * ```html
 * <label for="my-checkbox">Single Checkbox (checked)</label>
 * <input type="checkbox" id="my-checkbox" title="Single Checkbox" data-single_checkbox checked />
 * ```
 * 
 * **Switcher Checkbox**
 * 
 * Displays a nice mobile-like switcher that is bound on the original checkbox. That means that any change done 
 * on the switcher will affect the original checkbox element. 
 * 
 * ```html 
 * <label for="my-checkbox">Receive Notifications</label>
 * <input type="checkbox" id="my-checkbox" title="Receive Notifications" />
 * ```
 * 
 * **Radio Checkbox**
 * 
 * The checkbox widget can also serve cases with two radio buttons that define a yes or no use case. Consider
 * the following example where the first radio element contains the "activate" and the second "deactivate" status.
 * 
 * ```html
 * <input type="radio" name="status" value="1" title="Activated" checked />
 * <input type="radio" name="status" value="0" title="Deactivated" />
 * ```
 * 
 * **URL Switcher**
 * 
 * If you need to change the status of something by navigating the user to a specific url use the "on_url" 
 * and "off_url" options which will forward the user to the required URL. 
 * 
 * ```html 
 * <div data-gx-widget="checkbox"
 *   data-checkbox-checked="true"
 *   data-checkbox-on_url="#installed"
 *   data-checkbox-off_url="#uninstalled"
 *   data-checkbox-on_label="Installed"
 *   data-checkbox-off_label="Uninstalled"
 *   data-checkbox-class="labeled"></div>
 * ```
 * 
 * **Notice:** This widget was highly modified for use in compatibility pages. It's complexity and performance
 * are not optimal anymore. Use the single_checkbox and switcher widgets instead.
 * 
 * @module Admin/Widgets/checkbox
 */
gx.widgets.module(
	'checkbox',
	
	['fallback'],
	
	function(data) {
		
		'use strict';
		
		// ------------------------------------------------------------------------
		// VARIABLE DEFINITION
		// ------------------------------------------------------------------------
		
		var
			/**
			 * Widget Reference
			 *
			 * @type {object}
			 */
			$this = $(this),
			
			/**
			 * Default Options for Widget
			 *
			 * @type {object}
			 */
			defaults = {
				'filter': '', // Only select checkboxes with the following selector
				
				// Url Switcher Options:
				'on_url': '', // Open url when switcher is turned on
				'off_url': '', // Open url when switcher is turned off
				'on_label': '', // Text shown on the switcher when turned on
				'off_label': '', // Text shown on the switcher when turned off
				'on_text': '', // Text shown next to the switcher when turned on
				'off_text': '', // Text shown next to the switcher when turned off
				'class': '', // Add class(es) to the on and off switcher
				'checked': false // Initial status of the switcher: true = on, false = off
			},
			
			/**
			 * Status of mouse down event
			 *
			 * @type {boolean}
			 */
			mouseDown = false,
			
			/**
			 * Final Widget Options
			 *
			 * @type {object}
			 */
			options = $.extend(true, {}, defaults, data),
			
			/**
			 * Module Object
			 *
			 * @type {object}
			 */
			module = {};
		
		// ------------------------------------------------------------------------
		// EVENT HANDLERS
		// ------------------------------------------------------------------------
		
		/**
		 * Change the styling of the new switcher depending on the original checkbox/radio box setting
		 * Additionally set the new state of the original checkbox/radio box and trigger the change event on it.
		 *
		 * @private
		 */
		var _switcherChangeHandler = function(event) {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			
			var $self = $(this),
				$checkbox = $self.find('input:checkbox'),
				$onElement = $self.find('input:radio').first(),
				$offElement = $self.find('input:radio').last(),
				$select = $self.find('select').first(),
				dataset = $self.parent().data('checkbox');
			
			$self.toggleClass('checked');
			
			$self.find('.state-description').show().fadeOut('slow');
			
			$checkbox
				.prop('checked', $self.hasClass('checked')).trigger('checkbox:change');
			
			$onElement
				.prop('checked', $self.hasClass('checked'));
			
			$offElement
				.prop('checked', !$self.hasClass('checked'));
			
			$select
				.find('option')
				.removeAttr('selected');
			
			var selectOptionToSelect = $self.hasClass('checked') ? 1 : 0;
			
			$select
				.find('option[value="' + selectOptionToSelect + '"]')
				.attr('selected', true);
			
			if (options.on_url !== '' && options.off_url !== '') {
				event.preventDefault();
				event.stopPropagation();
				
				if (options.checked) {
					window.location.href = options.off_url;
					options.checked = false;
					
					return false;
				}
				
				window.location.href = options.on_url;
				options.checked = true;
			}
			
		};
		
		/**
		 * Change the styling of the new checkbox depending on the original checkbox setting
		 * Additionally set the new state of the original checkbox and trigger the change event on it.
		 *
		 * @private
		 */
		var _checkboxChangeHandler = function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			
			mouseDown = true;
			$(this).find('input:checkbox').focus();
		};
		
		/**
		 * Imitate mouse up behaviour of the checkbox
		 *
		 * @private
		 */
		var _checkboxMouseUpHandler = function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			
			$(this).toggleClass('checked');
			$(this).find('input:checkbox').focus();
			$(this).find('input:checkbox').trigger('click');
			mouseDown = false;
		};
		
		// ------------------------------------------------------------------------
		// INITIALISATION FUNCTIONS
		// ------------------------------------------------------------------------
		
		/**
		 * Wrap the checkboxes and generate markup for the new checkbox style.
		 *
		 * @private
		 */
		var _initCheckboxes = function($target) {
			
			var $container = $target || $this;
			
			$container
				.find('input:checkbox')
				.filter(options.filter || '*')
				.each(function() {
					var $self = $(this),
						dataset = jse.libs.fallback._data($self, 'checkbox'),
						className = dataset.className || '',
						title = $self.prop('title'),
						isChecked = ($self.prop('checked')) ? 'checked' : '',
						isDisabled = ($self.prop('disabled')) ? 'disabled' : '';
					
					if (typeof $self.data('single_checkbox') !== 'undefined') {
						$self
							.css({
								'position': 'absolute',
								'left': '-100000px'
							})
							.wrap('<span class="single-checkbox ' + isChecked + ' ' + isDisabled + '" title="' +
								title + '"></span>')
							.parent()
							.append('<i class="fa fa-check"></i>');
						
						$self.on('focus', function() {
							$('.single_checkbox').removeClass('focused');
							$(this).parent().addClass('focused');
						});
						
						$self.on('blur', function() {
							$(this).parent().removeClass('focused');
						});
						
						$self.on('change', function() {
							if (mouseDown === false) {
								$(this).parent().toggleClass('checked');
							}
						});
						
					} else {
						var onText = ($self.attr('data-checkbox-on_text')) ? $self.attr('data-checkbox-on_text') :
						             '<span class="fa fa-check"></span>';
						
						var offText = ($self.attr('data-checkbox-on_text')) ? $self.attr('data-checkbox-off_text') :
						              '<span class="fa fa-times"></span>';
						
						$self
							.wrap('<div class="switcher ' + isChecked + ' ' + isDisabled + '" title="' + title +
								'"></div>')
							.parent()
							.data('checkbox', dataset)
							.addClass(className)
							.append('<div class="switcher-toggler"></div>' + '<div class="switcher-inner">' +
								'<div class="switcher-state-on">' + onText + '</div>' +
								'<div class="switcher-state-off">' + offText + '</div>' + '</div>' +
								'<div class="switcher-text-on">' + options.on_text + '</div>' +
								'<div class="switcher-text-off">' + options.off_text +
								'</div>'
							);
					}
				});
		};
		
		/**
		 * Wrap the radio boxes and generate markup for the new checkbox style.
		 *
		 * @private
		 */
		var _initRadioOptions = function() {
			if ($this.find('input:radio').filter(options.filter || '*').length === 2) {
				var $onElement = $this.find('input:radio').filter(options.filter || '*').first(),
					onTitle = $onElement.prop('title'),
					$offElement = $this.find('input:radio').filter(options.filter || '*').last(),
					offTitle = $offElement.prop('title'),
					onLabel = (options.on_label !== '') ? ' data-checkbox-label="' + options.on_label + '"' : '',
					offLabel = (options.off_label !== '') ? ' data-checkbox-label="' + options.off_label + '"' :
					           '',
					dataset = options,
					isChecked = ($onElement.prop('checked')) ? 'checked' : '',
					isDisabled = ($onElement.prop('disabled')) ? 'disabled' : '';
				
				var $switcher = $('<div class="switcher ' + isChecked + ' ' + isDisabled + '"></div>');
				
				$onElement.after($switcher);
				
				$onElement.appendTo($switcher);
				$offElement.appendTo($switcher);
				
				$switcher
					.data('checkbox', dataset)
					.addClass(options.class)
					.append('<div class="switcher-toggler"></div>' + '<div class="switcher-inner">' +
						'<div class="switcher-state-on" title="' + onTitle + '"' + onLabel +
						'><span class="fa fa-check"></span></div>' +
						'<div class="switcher-state-off" title="' + offTitle + '"' + offLabel +
						'><span class="fa fa-times"></span></div>' + '<div class="switcher-text-on">'
						+ options.on_text +
						'</div>' +
						'<div class="switcher-text-off">' + options.off_text + '</div>' + '</div>'
					);
				
				// toggle switcher if hidden radio option status changes (there is no default case for that)
				$onElement.on('change', function() {
					$(this).parent().toggleClass('checked');
				});
				
				// toggle switcher if hidden radio option status changes (there is no default case for that)
				$offElement.on('change', function() {
					$(this).parent().toggleClass('checked');
				});
				
			}
		};
		
		/**
		 * build markup for the url switcher
		 *
		 * @private
		 */
		var _initUrlSwitcher = function() {
			if (options.on_url !== '' && options.off_url !== '') {
				var dataset = jse.libs.fallback._data($this, 'checkbox'),
					onLabel = (options.on_label !== '') ? ' data-checkbox-label="' + options.on_label + '"' : '',
					offLabel = (options.off_label !== '') ? ' data-checkbox-label="' + options.off_label + '"' :
					           '',
					isChecked = (options.checked) ? 'checked' : '';
				
				$this
					.data('checkbox', dataset)
					.addClass('switcher')
					.addClass(isChecked)
					.addClass(options.class)
					.append('<div class="switcher-toggler"></div>' + '<div class="switcher-inner">' +
						'<div class="switcher-state-on" title="' + options.off_url + '"' + onLabel +
						'><span class="fa fa-check"></span></div>' + '<div class="switcher-state-off" title="' +
						options.on_url + '"' +
						offLabel + '><span class="fa fa-times"></span></div>' + '</div>'
					)
					.on('click', _switcherChangeHandler);
			}
		};
		
		/**
		 * Bind events that change the checkbox or switcher
		 *
		 * @private
		 */
		var _initEventHandlers = function() {
			$this.on('click', '.switcher', _switcherChangeHandler);
			
			$this.off('mousedown', '.single-checkbox');
			$this.on('mousedown', '.single-checkbox', _checkboxChangeHandler);
			$this.off('mouseup', '.single-checkbox');
			$this.on('mouseup', '.single-checkbox', _checkboxMouseUpHandler);
			
			$this.on('mousedown', 'label', function() {
				mouseDown = true;
			});
			
			$this.on('mouseup', 'label', function() {
				mouseDown = false;
			});
			
			$this.on('FORM_UPDATE', function(e) {
				var $target = $(e.target);
				$target
					.find('input:checkbox')
					.each(function() {
						var $self = $(this),
							$wrapper = $self.closest('.switcher');
						
						if ($wrapper.length) {
							$wrapper
								.find('div')
								.remove();
							$self.unwrap();
						}
					});
				
				_initCheckboxes($target);
			});
			
		};
		
		var _initSelects = function() {
			// Iterate over select fields
			$this.find('[data-convert-checkbox]').each(function(index, element) {
				// Shortcuts
				var $optionTrue = $(element).find('option[value="1"]'),
					$optionFalse = $(element).find('option[value="0"]');
				
				// States
				var isChecked = $optionTrue.is(':selected') ? 'checked' : '',
					isDisabled = $(element).is(':disabled') ? 'disabled' : '';
				
				// Switcher Template
				var $switcher = $('<div class="switcher ' + isChecked + ' ' + isDisabled + '"></div>');
				$switcher
					.addClass($(element).data('newClass'))
					.data('checkbox', options)
					.append('<div class="switcher-toggler"></div>' + '<div class="switcher-inner">' +
						'<div class="switcher-state-on"><span class="fa fa-check"></span></div>' +
						'<div class="switcher-state-off"><span class="fa fa-times"></span></div>' + '</div>'
					);
				
				$(element)
					.after($switcher)
					.appendTo($switcher)
					.hide();
			});
		};
		
		// ------------------------------------------------------------------------
		// INITIALIZATION
		// ------------------------------------------------------------------------
		
		/**
		 * Initialize method of the widget, called by the engine.
		 */
		module.init = function(done) {
			
			// sanitize url preventing cross site scripting
			options.on_url = options.on_url.replace('"', '');
			options.off_url = options.off_url.replace('"', '');
			
			_initCheckboxes();
			_initRadioOptions();
			_initSelects();
			_initUrlSwitcher();
			_initEventHandlers();
			
			done();
		};
		
		// Return data to module engine.
		return module;
	});
