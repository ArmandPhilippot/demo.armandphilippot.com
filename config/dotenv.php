<?php
/**
 * Get current environment defined in .env file.
 *
 * @since 1.2.0
 *
 * @return string Current env or empty string.
 */
function dap_get_current_env()
{
    if (file_exists(__DIR__ . '/vendor/autoload.php')) {
        require_once __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->safeLoad();
        $current_env = $_ENV['CURRENT_ENV'];
        return $current_env;
    } else {
        return '';
    }
}
