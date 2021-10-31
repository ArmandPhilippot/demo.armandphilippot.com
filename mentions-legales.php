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
    <title>Mentions légales | Demo | Armand Philippot</title>
    <?php
    if ($dap_current_env === 'production') {
        echo '<link rel="stylesheet" href="assets/css/style.css" />';
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
        <h2>Mentions légales</h2>
        <p>
          Le site demo.armandphilippot.com est la propriété d’Armand Philippot.
        </p>
        <h3>Éditeur</h3>
        <p>
          Armand Philippot <br />France <br />Email :
          contact@armandphilippot.com
        </p>
        <p>Directeur de la publication : Armand Philippot</p>
        <h3>Hébergement du site</h3>
        <p>
          GANDI SAS <br />63-65 boulevard Massena <br />75013 Paris <br />FRANCE
        </p>
        <p>Téléphone : 01 70 37 76 61</p>
        <h3>Propriété intellectuelle</h3>
        <p>
          Les contenus du site, à l’exception de ceux n’appartenant pas à Armand
          Philippot, sont mis à disposition selon les termes de la
          <a href="license.php">licence MIT</a>.
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