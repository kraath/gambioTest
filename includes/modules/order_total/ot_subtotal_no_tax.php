<?php
/* --------------------------------------------------------------
   ot_subtotal_no_tax.php 2015-01-02 gm
   Gambio GmbH
   http://www.gambio.de
   Copyright (c) 2013 Gambio GmbH
   Released under the GNU General Public License (Version 2)
   [http://www.gnu.org/licenses/gpl-2.0.html]
   --------------------------------------------------------------


   based on: 
   (c) 2000-2001 The Exchange Project  (earlier name of osCommerce)
   (c) 2002-2003 osCommerce(ot_subtotal.php,v 1.7 2003/02/13); www.oscommerce.com 
   (c) 2003	 nextcommerce (ot_subtotal_no_tax.php,v 1.7 2003/08/24); www.nextcommerce.org
   (c) 2003 XT-Commerce - community made shopping http://www.xt-commerce.com ($Id: ot_subtotal_no_tax.php 1002 2005-07-10 16:11:37Z mz $)

   Released under the GNU General Public License 
   ---------------------------------------------------------------------------------------*/


class ot_subtotal_no_tax_ORIGIN {

	var $title, $output;

	function ot_subtotal_no_tax_ORIGIN() {
		global $xtPrice;
		$this->code = 'ot_subtotal_no_tax';
		$this->title = MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_TITLE;
		$this->description = MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_DESCRIPTION;
		$this->enabled = ((MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_STATUS == 'true') ? true : false);
		$this->sort_order = MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_SORT_ORDER;


		$this->output = array();
	}

	function process() {
		global $order, $xtPrice;

		if ($_SESSION['customers_status']['customers_status_show_price_tax'] == 0 && $_SESSION['customers_status']['customers_status_add_tax_ot'] == 1) {
			if ($_SESSION['customers_status']['customers_status_ot_discount_flag'] == 1) {
				// BOF GM_MOD:
				$sub_total_price = $order->info['subtotal'] + $order->info['deduction'];
				$sub_total_price = $sub_total_price - round($sub_total_price / 100 * $_SESSION['customers_status']['customers_status_ot_discount'], 2);
				$sub_total_price -= $order->info['deduction'];
			} else {
				$sub_total_price = $order->info['subtotal'];
			}
			$this->output[] = array('title' => $this->title . ':',
									'text' => '<b>' . $xtPrice->xtcFormat($sub_total_price+($xtPrice->xtcFormat($order->info['shipping_cost'], false,0,true)), true).'</b>',
									'value' => $xtPrice->xtcFormat($sub_total_price+($xtPrice->xtcFormat($order->info['shipping_cost'], false,0,true)), false));
		}
	}

	function check() {
		if (!isset($this->_check)) {
			$check_query = xtc_db_query("select configuration_value from " . TABLE_CONFIGURATION . " where configuration_key = 'MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_STATUS'");
			$this->_check = xtc_db_num_rows($check_query);
		}

		return $this->_check;
	}

	function keys() {
		return array('MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_STATUS', 'MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_SORT_ORDER');
	}

	function install() {
		xtc_db_query("insert into " . TABLE_CONFIGURATION . " (configuration_key, configuration_value, configuration_group_id, sort_order, set_function, date_added) values ('MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_STATUS', 'true', '6', '1','gm_cfg_select_option(array(\'true\', \'false\'), ', now())");
		xtc_db_query("insert into " . TABLE_CONFIGURATION . " (configuration_key, configuration_value, configuration_group_id, sort_order, date_added) values ('MODULE_ORDER_TOTAL_SUBTOTAL_NO_TAX_SORT_ORDER', '96','6', '2', now())");
	}

	function remove() {
		xtc_db_query("delete from " . TABLE_CONFIGURATION . " where configuration_key in ('" . implode("', '", $this->keys()) . "')");
	}
}

MainFactory::load_origin_class('ot_subtotal_no_tax');
