<?php
$config = array();

$config['fb_language_code'] = 'es_LA'; // en_US, en_US
$config['app_id']   = '1861897534046388';
$config['feed']     = array(
    'link'          => 'http://www.vinamaipo.com/navidad-esp/',
    'name'          => 'Concurso navidad Viña Maipo',
    'description'   => 'Estoy participando por Un Año de Vino gratis con Viña Maipo. ¡Tú también puedes participar!',
    'caption'       => 'Ayuda a Papá Noel',
    'picture'       => 'http://apps2.reactor.cl/juego-vina-maipo/es/img/maipo_share.jpg'
);
$config['endpoint'] = 'personas_es';

$config['table_name'] = 'personas_es'; // personas_en, personas_de
$config['allow_origin'] = 'http://apps2.reactor.cl/juego-vina-maipo/es/';
$config['allowed_actions'] = array('create', 'list');