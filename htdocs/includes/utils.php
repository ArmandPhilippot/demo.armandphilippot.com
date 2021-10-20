<?php
/**
 * Utilities for demo.armandphilippot.com
 *
 * @package   DemoArmandphilippotCom
 * @author    Armand Philippot <contact@armandphilippot.com>
 * @copyright 2021 Armand Philippot
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      https://demo.armandphilippot.com/
 * @since     1.0.0
 */

/**
 * Get current environment defined in .env file.
 *
 * @since 1.0.0
 *
 * @return string Current env or empty string.
 */
function dap_get_current_env()
{
    if (file_exists(__DIR__ . '/vendor/autoload.php')) {
        require_once __DIR__ . '/vendor/autoload.php';
        $dap_dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dap_dotenv->safeLoad();
        $dap_current_env = $_ENV['WP_THEME_ENV'];
        return $dap_current_env;
    } else {
        return '';
    }
}
