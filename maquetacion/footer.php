<?php
/**
 * Footer general
 *
 * @package		game
 * @author		Agencia Digital Reactor <contacto@reactor.cl>
 * @version		0.1.0
 */
?>
</div><!--/.page-wrap-->
<footer class="footer">
   <a href="https://www.facebook.com/MaipoWines/?fref=ts" target="_blank" title="Visita nuestro Fanpage" class="btn btn--footer">Visita nuestro Fanpage</a>
    <div class="column__footer">
        <a href="http://vinamaipo.com/navidad-esp/pdf/concurso-navidad-vina-maipo-politica-de-privacidad.pdf" target="_blank" title="Politicas de privacidad">Políticas de privacidad</a>
        <span></span>
        <div class="credits"><a href="http://reactor.cl/?utm_source=client&utm_medium=credits&utm_campaign=game" target="_blank"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><path d="M8,3.6c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4S5.6,3.6,8,3.6 M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8 s8-3.6,8-8S12.4,0,8,0L8,0z"/></svg></a></div>
    </div><!-- /.column__footer -->
</footer><!-- /.footer -->

</div><!-- /.content -->
</div><!-- /.container__general -->
<?php require('lib/config.php'); ?>
<script>
    (function() {
        window.config = {
            appID: '<?php echo $config['app_id']; ?>',
            fbApiLanguage: '<?php echo $config['fb_language_code']; ?>',
            endpoint: '<?php echo $config['endpoint']; ?>',
            feed: {
                link: '<?php echo $config['feed']['link']; ?>',
                name: '<?php echo $config['feed']['name']; ?>',
                description: '<?php echo $config['feed']['description']; ?>',
                caption: '<?php echo $config['feed']['caption']; ?>',
                picture: '<?php echo $config['feed']['picture']; ?>'
            }
        };
    })();
</script>
<script src="js/app.min.js"></script>
</body>
</html>