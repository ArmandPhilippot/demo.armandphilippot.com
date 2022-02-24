<?php
/**
 * Legal notice view: French version.
 * php version 7.4
 *
 * @category  View
 * @package   DAP
 * @author    Armand Philippot <contact@armandphilippot.com>
 * @copyright 2022 Armand Philippot
 * @license   MIT <https://opensource.org/licenses/MIT>
 * @link      https://demo.armandphilippot.com/
 */
require_once './inc/dotenv.php';

$dap_current_env = dap_get_current_env();
?>
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mentions légales | Demo | Armand Philippot</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/assets/images/favicon/safari-pinned-tab.svg" color="#194476" />
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#194476">
    <meta name="msapplication-config" content="/assets/images/favicon/browserconfig.xml">
    <meta name="theme-color" content="#194476">
    <?php
    if ($dap_current_env === 'development') {
        echo '<script src="assets/js/style.js"></script>';
    } else {
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
      <nav class="nav" aria-label="Main">
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
        <h3>Statistiques et mesures d’audience</h3>
        <p>Pour obtenir des informations sur le comportement des visiteurs, le site utilise Ackee. Il s’agit d’un
          logiciel d’analyse respectueux de la vie privée. Vous pouvez en apprendre plus sur le fonctionnement et les
          données collectées en allant sur <a href="https://docs.ackee.electerious.com/#/docs/Anonymization">le site
            d’Ackee</a>.</p>
        <p>Ce site utilise le mode détaillé afin d’adapter plus facilement le site à ses visiteurs. Ainsi, l'outil
          récupère le nombre de visites et les pages vues mais également les sites référents, le navigateur utilisé ou
          encore le système d'exploitation.</p>
      </div>
    </main>
    <footer class="footer">
      <nav class="nav nav--footer" aria-label="Footer">
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
