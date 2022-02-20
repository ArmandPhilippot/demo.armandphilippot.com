<?php
/**
 * Dotenv helper.
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
        require_once dirname(__DIR__) . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
        $dotenv->safeLoad();
        $current_env = $_ENV['CURRENT_ENV'];
        return $current_env;
    } else {
        return '';
    }
}
