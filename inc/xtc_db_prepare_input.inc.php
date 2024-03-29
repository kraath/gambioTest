<?php
/* --------------------------------------------------------------
   xtc_db_prepare_input.inc.php 2009-11-27 gambio
   Gambio GmbH
   http://www.gambio.de
   Copyright (c) 2009 Gambio GmbH
   Released under the GNU General Public License (Version 2)
   [http://www.gnu.org/licenses/gpl-2.0.html]
   --------------------------------------------------------------


   based on:
   (c) 2000-2001 The Exchange Project  (earlier name of osCommerce)
   (c) 2002-2003 osCommerce(database.php,v 1.19 2003/03/22); www.oscommerce.com
   (c) 2003	 nextcommerce (xtc_db_prepare_input.inc.php,v 1.4 2003/08/13); www.nextcommerce.org
   (c) 2003 XT-Commerce - community made shopping http://www.xt-commerce.com ($Id: xtc_db_prepare_input.inc.php 899 2005-04-29 02:40:57Z hhgag $)

   Released under the GNU General Public License
   ---------------------------------------------------------------------------------------*/

function xtc_db_prepare_input($string)
{
	if (is_string($string))
	{
		$string = preg_replace('/union.*select.*from/i', '', $string);
		return trim(stripslashes($string));
	}
	elseif (is_array($string))
	{
		reset($string);
		while (list($key, $value) = each($string))
		{
			$string[$key] = xtc_db_prepare_input($value);
		}
		return $string;
	}
	else
	{
		return $string;
	}
}


?>