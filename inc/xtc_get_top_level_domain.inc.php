<?php
/* --------------------------------------------------------------
   xtc_get_top_level_domain.inc.php 2010-01-11 gm
   Gambio GmbH
   http://www.gambio.de
   Copyright (c) 2010 Gambio GmbH
   Released under the GNU General Public License (Version 2)
   [http://www.gnu.org/licenses/gpl-2.0.html]
   --------------------------------------------------------------

$Id: xtc_get_top_level_domain.inc.php 1535 2006-08-20 21:38:20Z mz $   

   xt:Commerce - community made shopping
   http://www.xt-commerce.com

   Copyright (c) 2006 xt:Commerce
   -----------------------------------------------------------------------------------------
   based on: 
   (c) 2000-2001 The Exchange Project  (earlier name of osCommerce)
   (c) 2002-2003 osCommerce(general.php,v 1.225 2003/05/29); www.oscommerce.com 
   (c) 2003	 nextcommerce (xtc_get_top_level_domain.inc.php,v 1.3 2003/08/13); www.nextcommerce.org

   Released under the GNU General Public License 
   ---------------------------------------------------------------------------------------*/
function xtc_get_top_level_domain($url) {
	if (strpos($url, '://')) {
		$url = parse_url($url);
		$url = $url['host'];
	}
	$domain_array = explode('.', $url);
	$domain_size = sizeof($domain_array);
	if ($domain_size > 1) {
		if (is_numeric($domain_array[$domain_size -2]) && is_numeric($domain_array[$domain_size -1])) {
			return false;
		} else {
			// BOF GM_MOD
			$domain_path = $url;
			if(substr($domain_path, 0, 4) == 'www.')
			{
				$domain_path = substr($domain_path, 4);
			}
			// EOF GM_MOD
			return $domain_path;
		}
	} else {
		return false;
	}
}
?>