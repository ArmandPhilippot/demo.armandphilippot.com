<?php
/**
 * Dotenv helpers.
 * php version 7.4
 *
 * @category  Controller
 * @package   DAP
 * @author    Armand Philippot <contact@armandphilippot.com>
 * @copyright 2022 Armand Philippot
 * @license   MIT <https://opensource.org/licenses/MIT>
 * @link      https://demo.armandphilippot.com/
 */

/**
 * Get current environment defined in .env file.
 *
 * @since 1.2.0
 *
 * @return string Current env or empty string.
 */
function dap_get_current_env()
{
    if (file_exists(dirname(__DIR__) . '/vendor/autoload.php')) {
        include_once dirname(__DIR__) . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
        $dotenv->safeLoad();

        return $_ENV['CURRENT_ENV'];
    } else {
        return '';
    }
}
