<?php
/*
 * Shopgate GmbH
 * http://www.shopgate.com
 * Copyright © 2012-2015 Shopgate GmbH
 *
 * Released under the GNU General Public License (Version 2)
 * [http://www.gnu.org/licenses/gpl-2.0.html]
 */

class Shopgate_Model_Abstract extends ShopgateObject {
	/**
	 * Object attributes
	 *
	 * @var array
	 */
	protected $data = array();

	/**
	 * define allowed methods
	 *
	 * @var array
	 */
	protected $allowedMethods = array();

	/**
	 * Setter/Getter underscore transformation cache
	 *
	 * @var array
	 */
	protected static $underscoreCache = array();

	/**
	 * @return array
	 */
	public function clean() {
		$result = array();
		foreach ($this as $k => $v) {
			if (!is_object($v) && !is_array($v)) {
				$result[$k] = $v;
			}
		}

		return $result;
	}

	/**
	 * magic get / set
	 *
	 * @param string $method
	 * @param array  $args
	 *
	 * @return array|null|Shopgate_Model_Abstract
	 * @throws Exception
	 */
	public function __call($method, $args) {

		if (!in_array(substr($method, 3), $this->allowedMethods)) {
			trigger_error('Call to undefined magic method '.get_class($this).'::'.$method.'()', E_USER_ERROR);
		}

		switch (substr($method, 0, 3)) {
			case 'get' :
				$key = $this->underscore(substr($method, 3));
				$data = $this->getData($key, isset($args[0]) ? $args[0] : null);

				return $data;
			case 'set' :
				$key = $this->underscore(substr($method, 3));
				$result = $this->setData($key, isset($args[0]) ? $args[0] : null);

				return $result;

		}

		return null;
	}

	/** set the data by key or array
	 *
	 * @param      $key
	 * @param null $value
	 *
	 * @return Shopgate_Model_Abstract
	 */
	public function setData($key, $value = null) {
		if (is_array($key)) {
			foreach ($key as $key => $value) {
				if (!is_array($value) && !is_object($value)) {
					$this->$key = $value;
				}
			}
		} else {
			$this->$key = $value;
		}

		return $this;
	}

	/**
	 * returns data from key or all
	 *
	 * @param string $key
	 * @param null   $index
	 *
	 * @return array|null
	 */
	public function getData($key = '', $index = null) {
		if ('' === $key) {
			return $this->data;
		}

		$default = null;

		if (isset($this->data[$key])) {
			if (is_null($index)) {
				return $this->data[$key];
			}
			$value = $this->data[$key];
			if (is_array($value)) {
				if (isset($value[$index])) {
					return $value[$index];
				}

				return null;
			}

			return $default;
		}

		return $default;
	}

	/**
	 * @param string $var
	 *
	 * @return array|null|string
	 */
	public function __get($var) {
		$var = $this->underscore($var);

		return $this->getData($var);
	}

	/**
	 * @param $name
	 *
	 * @return string
	 */
	protected function underscore($name) {
		if (isset(self::$underscoreCache[$name])) {
			return self::$underscoreCache[$name];
		}
		$result = strtolower(preg_replace('/(.)([A-Z])/', "$1_$2", $name));
		self::$underscoreCache[$name] = $result;

		return $result;
	}

	/**
	 * Set row field value
	 *
	 * @param  string $columnName The column key.
	 * @param  mixed  $value      The value for the property.
	 *
	 * @return void
	 */
	public function __set($columnName, $value) {
		$this->data[$columnName] = $value;
	}

}