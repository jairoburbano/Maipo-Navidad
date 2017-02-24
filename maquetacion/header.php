<?php
/**
 * Cabacera de la Página
 *
 * Nuestra todo el contenido hasta <body>
 *
 * @package		game
 * @author		Agencia Digital Reactor <contacto@reactor.cl>
 * @version		0.1.0
 */
?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>Ayuda a Papá Noel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, target-densityDpi=device-dpi">

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link href="https://fonts.googleapis.com/css?family=Arvo:400,700|Roboto" rel="stylesheet">
        <link rel="stylesheet" href="css/main.css?v3.0.3">
        <script src="js/vendor/modernizr.js"></script>
        <script src="js/pace.js"></script>

        <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
        <link rel="manifest" href="manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <link rel="icon" href="favicon.ico" type="image/x-icon">

        <meta property="og:title" content="Ayuda a Papá Noel" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://apps2.reactor.cl/juego-vina-maipo/" />
        <meta property="og:image" content="http://apps2.reactor.cl/juego-vina-maipo/img/maipo_share_es.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="650" />
        <meta property="og:description" content="Estoy participando por Un Año de Vino gratis con Viña Maipo. ¡Tú también puedes participar!" />
        <meta property="fb:app_id" content="1677069172604646" />
        <script>
            function play(){
                var audio = document.getElementById("audio");
                audio.play();
            }
        </script>
    </head>
    <body class="<?php if ( $page == 'ganadores' ) { echo 'ganadores'; } else { echo 'content--show'; } ?>">
        <!--
<div class="top-bar"></div>
<div class="bot-bar"></div>
-->
        <div class="page-wrap">
            <div class="test"></div><!-- /.test -->
