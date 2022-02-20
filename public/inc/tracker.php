<?php
/**
 * Matomo tracking code.
 * php version 7.4
 *
 * @category  Controller
 * @package   DAP
 * @author    Armand Philippot <contact@armandphilippot.com>
 * @copyright 2022 Armand Philippot
 * @license   MIT <https://opensource.org/licenses/MIT>
 * @link      https://demo.armandphilippot.com/
 */
?>
<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(["setDoNotTrack", true]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u = "//demo.armandphilippot.com/";
    _paq.push(["setTrackerUrl", u + "matomo/matomo.php"]);
    _paq.push(["setSiteId", "3"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.defer = true;
    g.src = u + "matomo/matomo.php";
    s.parentNode.insertBefore(g, s);
  })();
</script>
<!-- End Matomo Code -->
