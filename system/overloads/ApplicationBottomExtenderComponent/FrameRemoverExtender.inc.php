<?php
/* --------------------------------------------------------------
   FrameRemover.php 2012-11 gambio
   Gambio GmbH
   http://www.gambio.de
   Copyright (c) 2012 Gambio GmbH
   Released under the GNU General Public License (Version 2)
   [http://www.gnu.org/licenses/gpl-2.0.html]
   --------------------------------------------------------------


   based on:
   (c) 2000-2001 The Exchange Project  (earlier name of osCommerce)
   (c) 2002-2003 osCommerce(ot_cod_fee.php,v 1.02 2003/02/24); www.oscommerce.com
   (C) 2001 - 2003 TheMedia, Dipl.-Ing Thomas Plänkers ; http://www.themedia.at & http://www.oscommerce.at
   (c) 2003 XT-Commerce - community made shopping http://www.xt-commerce.com ($Id: ot_cod_fee.php 1003 2005-07-10 18:58:52Z mz $)

   Released under the GNU General Public License
   ---------------------------------------------------------------------------------------*/


class FrameRemoverExtender extends FrameRemoverExtender_parent
{
	function proceed() {
		if(strpos($_SERVER['PHP_SELF'], 'checkout_success') !== false) {
			$this->v_output_buffer['REMOVE_FRAME'] = '<script>$(function() { if(top.location != location) { top.location.href = document.location.href; } });</script>';
		}
		parent::proceed();
	}
}
