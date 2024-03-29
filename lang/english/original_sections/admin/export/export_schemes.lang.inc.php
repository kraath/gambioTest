<?php
/* --------------------------------------------------------------
	export_schemes.lang.inc.php 2016-04-04
	Gambio GmbH
	http://www.gambio.de
	Copyright (c) 2016 Gambio GmbH
	Released under the GNU General Public License (Version 2)
	[http://www.gnu.org/licenses/gpl-2.0.html]
   --------------------------------------------------------------
*/

$t_language_text_section_content_array = array
(
	'abort' => 'Cancel',
	'activate_cronjob' => 'Continue cronjob',
	'add_collective_field' => 'Add collective field',
	'add_column' => 'Add Column',
	'add_scheme' => 'Add profile',
	'available_import_files' => 'Available import files',
	'available_variables' => 'Available variables',
	'campaign' => 'Campaign',
	'categories_tab' => 'Categories',
	'changes_confirm_message' => 'Are you sure you want to discard changes?',
	'collective_fields_tab' => 'Collective fields',
	'collective_field_default' => 'Default content',
	'collective_field_delete' => 'Delete field',
	'collective_field_name' => 'Column name',
	'collective_field_source' => 'Properties/Attributes/Additional fields (\';\' separated)',
	'collective_field_sources' => 'Prop./Attr./Addit.',
	'columns' => 'Column',
	'configuration_tab' => 'Configuration',
	'copy_scheme' => 'Copy profile',
	'cronjob' => 'Cronjob',
	'currency' => 'Currency',
	'customers_status' => 'Customer status',
	'deactivate_cronjob' => 'Cancel cronjob',
	'delete_scheme' => 'Delete profile',
	'delete_scheme_field_message' => 'Do you really want to delete the column?',
	'delete_scheme_field_notification' => '(Advice: The column will be permanently deleted <br />until you save the profile!)',
	'delete_scheme_message' => 'Do you really want to delete the profile?',
	'delete_attributes' => 'Delete all product attribute allocations in the store?',
	'delete_categories' => 'Delete all categories in the store?',
	'delete_images' => 'Delete all product image allocations in the store?',
	'delete_manufacturers' => 'Delete all manufacturers in the store?',
	'delete_products' => 'Delete all products in the store?',
	'delete_properties' => 'Delete all product properties allocations in the store?',
	'delete_reviews' => 'Delete all reviews in the store?',
	'delete_specials' => 'Delete all special products in the store?',
	'delete_xsell' => 'Delete all cross-selling products and cross-selling groups in the store?',
	'download' => 'Download',
	'edit_field' => 'Edit field',
	'edit_scheme' => 'Edit profile',
	'export_and_download' => 'Export and download',
	'export_attributes' => 'Attributes',
	'export_cronjob' => 'Automatic export',
	'export_cronjob_url' => 'Cronjob-URL',
	'export_file_path' => 'Export-URL:',
	'export_is_running' => 'Export is running...',
	'export_properties' => 'Properties',
	'export_scheme' => 'Export',
	'export_working_text' => 'Please, have some patience,<br />while the process is running.',
	'fields_tab' => 'Columns',
	'field_content' => 'Column content',
	'field_content_default' => 'Default content',
	'field_name' => 'Column name',
	'field_quotes' => 'Quotes',
	'field_separator' => 'Seperator',
	'filename' => 'Filename',
	'hour' => 'Hour',
	'hours' => 'Hours',
	'import' => 'Import',
	'import_error_wrong_format' => 'The file could not be imported <br />because it has the wrong format.',
	'import_is_running' => 'Import is running...',
	'import_statistics_message' => 'The following changes have been made by the import.:<br />%s products added<br />%s products updated<br />%s categories added<br />%s categories updated<br />%s specials added<br />%s special(s) updated<br />%s combinations added<br />%s combinations updated<br />',
	'interval' => 'Interval',
	'language' => 'Language',
	'last_export' => 'Last export',
	'no_campaign' => 'no campaign',
	'no_interval' => 'no interval',
	'or' => 'or',
	'pause_cronjob' => 'Pause cronjob',
	'preview' => 'Preview',
	'price_comparison' => 'Price comparison',
	'process_completed' => 'Process completed...',
	'process_is_started' => 'The process is started...',
	'product_export' => 'Product export',
	'profile' => 'Profile',
	'properties_combi_data' => 'Combi data',
	'properties_selection' => 'Properties selection',
	'provider' => 'Profile name',
	'quantity_minimum' => 'Quantity minimum',
	'rebuild_properties_index' => 'Rebuild properties index...',
	'select_all' => 'Select all / Remove selection',
	'shipping_free_minimum' => 'Shipping free minimum',
	'short_friday' => 'Fri',
	'short_monday' => 'Mon',
	'short_saturday' => 'Sat',
	'short_sunday' => 'Sun',
	'short_thursday' => 'Thu',
	'short_tuesday' => 'Tue',
	'short_wednesday' => 'Wed',
	'show_cronjob_url' => 'Show cronjob-URL',
	'start_time' => 'Start time',
	'tooltip_collective_fields' => 'Collective fields are used to select values from different sources in one column. You can supply multiple names of properties, attributes and additional fields from which the value is selected.<br/><br/><i>Column name:</i><br/>The column name will be the title of the column which is displayed at the top of the exported CSV file.<br/><br/><i>Properties/Attributes/Additional fields:</i><br/>In this input field you can supply multiple names of properties, attributes and/or additional fields as a \';\' separated list of which the value is chosen (i.e. Color;Varnish;Wall paint).<br/><br/><i>Default content:</i><br/>This will be set as value, if no suitable value could be selected from any of the sources.<br/><br/><i>Prop./Attr./Addit.:</i><br/>With these checkboxes you can choose which sources should be searched to find the supplied names. To raise the performance of the export, it is recommended to uncheck the checkboxes of sources that you are not using.<br/><br/><i>Note:</i><br/>If multiple values from different sources are found, the following priorization apllies:<br/>- Properties (highest priority)<br/>- Attributes<br/>- Additional fields (lowest priority)',
	'tooltip_conf_campaign_id' => 'Select the campaign to be appended to product URLs for this export profile<br/>Notice: You need to add campaigns beforehand at Configuration < Campaigns.',
	'tooltip_conf_cronjob_allowed_checkbox' => 'Select to include this export profile for the automatic export.<br/>Attention: Remember to install the cron job for the automatic product export at your hosting provider!',
	'tooltip_conf_cronjob_paused' => 'The cronjob is paused',
	'tooltip_conf_cronjob_pending' => 'The export will be executed on %s.',
	'tooltip_conf_cronjob_queueing' => 'The export is in the queue and is on the verge of execution.',
	'tooltip_conf_cronjob_running' => 'The export is in progress: %s%% completed',
	'tooltip_conf_currencies_id' => 'Select the currency to be used when creating export files of the type \'Price Comparison\'.',
	'tooltip_conf_customers_status_id' => 'Select the customer group for calculating prices when creating export files of the type \'Price Comparison\'.<br/>Attention: Select \'Guest\' if you do not use customer group prices for this customer group in all products!',
	'tooltip_conf_export_attributes_checkbox' => 'Select if you want to include attributes of products when creating export files of the type \'Price Comparison\'<br/>Notice: Attributes are considered seperate products in the export file.',
	'tooltip_conf_export_file_path' => 'You can access the exported file at the following URL.',
	'tooltip_conf_export_properties_checkbox' => 'Select if you want to include properties of products when creating export files of the type \'Price Comparison\'<br/>Notice: Property combinations are considered seperate products in the export file.',
	'tooltip_conf_field_quotes' => 'Insert the text delimiter character:<br/>Price comparison services may use different text delimiters. Please refer to the appropriate service provider for the correct text delimiter character when creating export files of the type \'Price Comparison\' .<br/>Leave blank for generic product exports, where product descriptions do not contain the field seperator character.',
	'tooltip_conf_field_separator' => 'Insert the field seperator character:<br/>Price comparison services use different seperator characters. Please refer to the appropriate service provider for the correct field seperator character when creating export files of the type \'Price Comparison\'.<br/>Insert the pipe symbol (|, vertical bar) for generic product exports for the highest compatibility towards product descriptions.',
	'tooltip_conf_filename' => 'Insert the filename of the export file.',
	'tooltip_conf_languages_id' => 'Select the language to be used when creating export files of the type \'Price Comparison\'.',
	'tooltip_conf_quantity_minimum' => 'Insert the minimum stock required for exporting product details when creating export files of the type \'Price Comparison\'.',
	'tooltip_conf_scheme_name' => 'Insert the name of the export profile:<br/>Export profiles of the type \'Price Comparison\' should be named after the appropriate price comparison service.',
	'tooltip_conf_shipping_free_minimum' => 'Insert the minimum order value, from which you offer free shipping when creating export files of the type \'Price Comparison\'.',
	'tooltip_cronjob' => 'Create a new cronjob at your hosting provider with this cronjob URL. For information on if and how to create cronjobs please refer to your hosting provider. Configure your new cronjob with a time interval of 1 minute. By calling the cronjob URL every minute, all export presets, that are configured for the automatic export, are checked against their configured time interval and eventually an export file is created.',
	'tooltip_fields_field_content' => 'Enter variables for the column content here (Available variables are shown in the selection box).',
	'tooltip_fields_field_content_default' => 'Enter a default value for this column, that will be used if all content variables are empty.',
	'tooltip_fields_field_name' => 'Enter the column name here.',
	'tooltip_fields_field_variable' => 'Here you can select from the available variables.',
	'tooltip_import_field_quotes' => 'Enter here the text delimiter character.',
	'tooltip_import_field_separator' => 'Enter here the field seperator character.',
	'tooltip_import_file_extension' => 'Please select your import file (possible file types: .txt, .csv, .zip)',
	'tooltip_new_categories' => 'Select the categories you want to include when creating the export file<br/>Select \'select all\' if you want to export all categories.<br/>Notice: Newly added categories are not automatically included in partial exports. If you selected \'select all\', all new categories are also excluded.',
	'tooltip_preview' => 'This is a preview of your export file.<br/>Notice: This preview contains a maximum of five records.',
	'tooltip_select_import_file' => 'Please select the file for your import.',
	'upload' => 'Upload',
	'upload_import_file' => 'Upload import file',
	'week_days' => 'Weekdays'
);