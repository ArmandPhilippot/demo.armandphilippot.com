<?php
require_once('./config/dotenv.php');

$dap_current_env = dap_get_current_env();
?>
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Legal Notice | Demo | Armand Philippot</title>
    <?php
    if ($dap_current_env === 'production') {
        echo '<link rel="stylesheet" href="assets/css/style.css" />';
    } else {
        echo '<script src="assets/js/style.js"></script>';
    }
    ?>
  </head>

  <body class="body">
    <div class="toolbar">
      <button type="button" class="toolbar__options btn btn--menu">Menu</button>
      <button type="button" class="toolbar__options btn btn--details">
        About app
      </button>
    </div>
    <header class="header">
      <div class="branding">
        <div class="branding__logo logo">
          <a href="/" rel="home" class="logo__link">
            <img src="./assets/images/armand-philippot.jpg" alt="Back to homepage"
              class="logo__image logo__image--front" />
            <img src="./assets/images/armand-philippot-logo.svg" alt="Back to homepage"
              class="logo__image logo__image--back" />
          </a>
        </div>
        <h1 class="branding__title">
          <a href="/" rel="home" class="branding__link">Armand Philippot</a>
        </h1>
        <p class="branding__description">Front-end developer</p>
      </div>
      <nav class="nav">
        <p class="nav__label">App list:</p>
        <ul class="nav__list"></ul>
      </nav>
    </header>
    <main class="main">
      <div class="legal-notice">
        <h2>Legal notice</h2>
        <p>
          The website demo.armandphilippot.com is the property of Armand
          Philippot.
        </p>
        <h3>Publisher</h3>
        <p>
          Armand Philippot <br />France <br />Email: contact@armandphilippot.com
        </p>
        <p>Publication Director: Armand Philippot</p>
        <h3>Web hosting</h3>
        <p>
          GANDI SAS <br />63-65 boulevard Massena <br />75013 Paris <br />FRANCE
        </p>
        <p>Phone: +331 70 37 76 61</p>
        <h3>Intellectual property</h3>
        <p>
          The contents of the site, with the exception of those not belonging to
          Armand Philippot, are made available under the terms of the
          <a href="license.php">MIT license</a>.
        </p>
      </div>
    </main>
    <footer class="footer">
      <nav class="nav nav--footer">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="legal-notice.php" class="nav__link nav__link--legal">
              Legal notice
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        <span class="copyright__license" title="License MIT">MIT</span>
        <span class="copyright__date">2021.</span>
        <a href="https://www.armandphilippot.com/" class="copyright__author">Armand Philippot.</a>
      </div>
    </footer>
    <script src="./assets/js/runtime.js"></script>
    <script src="./assets/js/app.js"></script>
  </body>

</html>
