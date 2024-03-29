<?php
/*
 * Shopgate GmbH
 * http://www.shopgate.com
 * Copyright © 2012-2015 Shopgate GmbH
 *
 * Released under the GNU General Public License (Version 2)
 * [http://www.gnu.org/licenses/gpl-2.0.html]
 */

class Shopgate_Helper_DataStructure {

	/**
	 * Takes an array of arrays that contain all elements which are taken to create a cross-product of all elements. The resulting array is an array-list with
	 * each possible combination as array. An Element itself can be anything (including a whole array that is not torn apart, but instead treated as a whole)
	 * By setting the second parameter to true, the keys of the source array is added as an array at the front of the resulting array
	 *
	 * Sample input: array(
	 * 		'group-1-key' => array('a', 'b'),
	 * 		'group-2-key' => array('x'),
	 * 		7 => array('l', 'm', 'n'),
	 * );
	 * Output of sample: Array (
	 * 		[0] => Array (
	 * 			[group-1-key] => a
	 * 			[group-2-key] => x
	 * 			[7] => l
	 * 		)
	 * 		[1] => Array (
	 * 			[group-1-key] => b
	 * 			[group-2-key] => x
	 * 			[7] => l
	 * 		)
	 * 		[2] => Array (
	 * 			[group-1-key] => a
	 * 			[group-2-key] => x
	 * 			[7] => m
	 * 		)
	 * 		[...] and so on ... (total of count(src[0])*count(src[1])*...*count(src[N]) elements) [=> 2*1*3 elements in this case]
	 * 	)
	 *
	 * @param array $src: The (at least) double dimensioned array input
	 * @param bool $enableFirstRow: Disabled by default
	 * @return array[][]:
	 */
	public function arrayCross(array $src, $enableFirstRow = false) {
		$result = array();
		$firstRow = array();

		if($enableFirstRow) {
			$firstRow[0] = array_keys($src);
		}

		foreach($src as $key => $valArr) {
			// elements are copied for appending data, so the actual count is needed as the base-element-count
			$copyCount = count($result);

			// start by using the first array as a resultset (in case of only one array the result of the cross-product is the first input-array)
			if(empty($result)) {
				foreach($valArr as $optionSelection) {
					$result[] = array($key => $optionSelection);
				}
			} else {
				$i = 0;
				foreach($valArr as $optionSelection) {
					for($j = 0; $j < $copyCount; $j++) {
						// in case of $i==0 it copies itself, so it's correct in all cases if $i
						$result[$i*$copyCount+$j] = $result[$j];
						$result[$i*$copyCount+$j][$key] = $optionSelection;
					}
					$i++;
				}
			}
		}

		return array_merge($firstRow, $result);
	}
}
