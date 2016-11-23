<?php
/* --------------------------------------------------------------
	JSCartFrameRemover.inc.php 2014-04-30 mabr
	Gambio GmbH
	http://www.gambio.de
	Copyright (c) 2014 Gambio GmbH
	Released under the GNU General Public License (Version 2)
	[http://www.gnu.org/licenses/gpl-2.0.html]
	--------------------------------------------------------------
*/

class JSCartFrameRemover extends JSCartFrameRemover_parent
{
	public function proceed()
	{
		parent::proceed();

		echo 'if(top != self) { top.location = self.location; }'.PHP_EOL;
	}
}
