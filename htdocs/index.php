<?php
/**
 * Main entry of demo.armandphilippot.com
 *
 * @package   DemoArmandphilippotCom
 * @author    Armand Philippot <contact@armandphilippot.com>
 * @copyright 2021 Armand Philippot
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      https://demo.armandphilippot.com/
 * @since     1.0.0
 */

// Load config and functions.
require './includes/config.php';
require './includes/i18n.php';
require './includes/utils.php';

$dap_current_env = dap_get_current_env();
$dap_locale = dap_define_locale($dap_default_locale);
$dap_language = dap_get_language($dap_locale);
$dap_formatted_locale = dap_get_formatted_locale($dap_locale);

dap_set_locale($dap_formatted_locale);
?>
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Armand Philippot</title>
    <?php if ($dap_current_env === "production") { ?>
    <link rel="stylesheet" href="assets/css/style.css">
    <?php } else { ?>
    <script src="assets/js/style.js"></script>
    <?php } ?>
  </head>

  <body class="body">
    <button type="button" class="btn btn--toggle">
      <?php echo htmlspecialchars(_('Menu')); ?>
    </button>
    <header class="header">
      <div class="branding">
        <div class="branding__logo logo">
          <a href="/" rel="home" class="logo__link">
            <img src="./assets/images/armand-philippot.jpg"
              alt="<?php echo htmlspecialchars(_('Back to homepage')); ?>"
              class="logo__image logo__image--front">
            <img src="./assets/images/armand-philippot-logo.svg"
              alt="<?php echo htmlspecialchars(_('Back to homepage')); ?>"
              class="logo__image logo__image--back">
          </a>
        </div>
        <h1 class="branding__title">
          <a href="/" rel="home" class="branding__link">Armand Philippot</a>
        </h1>
        <p class="branding__description">
          <?php echo htmlspecialchars(_('Front-end developer')); ?>
        </p>
      </div>
      <nav class="nav">
        <a href="https://www.armandphilippot.com/" class="nav__link nav__link--back">
          <?php echo htmlspecialchars(_('Back to ArmandPhilippot.com')); ?>
        </a>
        <p class="nav__label"><?php echo htmlspecialchars(_('Projects list:')); ?>
        </p>
        <ul class="nav__list">
        </ul>
      </nav>
    </header>
    <main class="main">
      <div class="instructions"><?php echo htmlspecialchars(_('Select a project inside menu to see a live preview and a link to the source code.')); ?>
      </div>
    </main>
    <footer class="footer">
      <div class="copyright">
        <span class="copyright__author">Armand Philippot.</span>
        <img src="assets/images/cc-by-sa.svg" alt="CC BY SA" class="copyright__icon">
        <span class="copyright__date">2021.</span>
      </div>
    </footer>
    <script src="./assets/js/runtime.js"></script>
    <script src="./assets/js/app.js"></script>
  </body>

</html>
