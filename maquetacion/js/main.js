(function($, config) {
    // Tamaño de la pantalla
    var $window = $(window),
        windowSize	= $window.width();
    window.reset = true;
    var barra = $('.barra--fill'),
        i = barra.attr('data-valor') + 1;
    function animation() {
        var btn = $('.btn--game'),
            t = null,
            intervalus,
            controles = $('.controls'),
            contenedor = $('.step__container'),
            body = $('body');
        /* ESTADOS */
        var start = $('.enter'),
            lose = $('.lose'),
            pull = $('.pull'),
            win = $('.win');
        start.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
            start.addClass('active');
        });
        btn.on('click', function() {
            window.reset = false;
            var estado = $('.barra--fill').attr('data-valor');
            var valorParaGanar = 75; 
            var valor = Math.floor(i),
                double = valor * 2,
                $this = $(this);
            pull.show();
            pull.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                pull.removeClass('active');
            });

            pull.removeClass('active').addClass('active');
            barra.removeClass('counter');
            clearInterval(intervalus);
            if(i < valorParaGanar + 1) {
                barra.attr('data-valor', valor);
            }
            if(i < 25 + 1) {
                barra.css('width', double+'%');
            }
            if(i > 25 && i < 75) {
                barra.css('width', valor + 25 +'%');
            }
            if(valor == 75) {
                var tipo = $('.container__viewport').attr('data-tipo'),
                    gratis = $('.step__play'),
                    gameWin = $('.step__win');
                $this.addClass('disable');
                pull.hide();
                win.show();
                $('.step__lose').hide();
                controles.css('opacity', 0);
                start.hide().removeClass('anim--start active');
                win.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    win.addClass('active');
                    body.addClass('content--show');
                    contenedor.show();
                    $('.logo').addClass('active');
                    setTimeout(function() {
                        $('.logo').addClass('logo--big');
                        $('.logo').removeClass('active');
                    }, 800);
                    if(tipo == 'free-game') {
                        gratis.fadeIn();
                    } else {
                        gameWin.fadeIn();
                    }
                });
            }
            if(i > 25) {
                barra.addClass('final');
            }
            if (t !== null) {
                window.clearTimeout(t);
            }

            t = window.setTimeout(function() {
                pull.hide();
                if(i < valorParaGanar + 1) {
                    intervalus = setInterval(function() {
                        if(estado > -1 && estado < 26) {
                            var substract = Math.floor(estado),
                                bytwo = substract * 2;
                            barra.css('width', bytwo+'%');
                        }
                        if(estado > 25 && estado < 76) {
                            var substract = Math.floor(estado);
                            barra.css('width', substract + 25 +'%');
                        }

                        if(estado > 0) {
                            barra.attr('data-valor', substract);
                        }
                        estado--;
                        i = barra.attr('data-valor');
                        if(i < 25) {
                            barra.removeClass('final');
                        }
                        if(i < 10) {
                            barra.addClass('counter');
                        }
                        if(estado < 0) {
                            controles.css('opacity', 0);
                            lose.show();
                            $('.step__win').hide();
                            lose.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                                lose.addClass('active');
                                start.hide().removeClass('anim--start active');
                                body.addClass('content--show');
                                $('.logo').addClass('active');
                                setTimeout(function() {
                                    $('.logo').addClass('logo--big');
                                    $('.logo').removeClass('active');
                                }, 800);
                                contenedor.show();
                                $('.step__lose').fadeIn()
                            });
                            clearInterval(intervalus);
                        }
                    }, 100 );
                }
            }, 1000);
            if(i < valorParaGanar + 1) {
                i++;
            }
        });
    }
    function sizes() {
        var elem = $('.anim--group');
        elem.each(function() {
            var $this = $(this),
                ancho = $this.width(),
                anchoPx = Math.ceil(ancho);
            $this.find('.content').width(anchoPx);
        });
    }
    function iniciar_juego () {
        var boxStart = $('.step--start'),
            iniciar = $('.btn--init'),
            contenedor = $('.step__container'),
            body = $('body'),
            controles = $('.controls'),
            animInit = $('.enter');

        boxStart.fadeOut(300, function() {
            contenedor.hide();
            body.removeClass('content--show');
            $('.logo').addClass('active');
            setTimeout(function() {
                $('.logo').removeClass('logo--big active');
            }, 800);
            setTimeout(function() {
                animInit.show().addClass('anim--start');
                $('.enter').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    body.addClass('tutorial');
                    $('.step__container, .step__tutorial').fadeIn();
                    controles.css('opacity', 1);
                    $('.btn--game').on('click', function() {
                        body.removeClass('tutorial');
                        $('.step__container, .step__tutorial').fadeOut();
                    });
                });
            }, 1000);
        });
    }
    function jugar_de_nuevo() {
        var boxStart = $('.step--start'),
            iniciar = $('.btn--init'),
            contenedor = $('.step__container'),
            body = $('body'),
            controles = $('.controls'),
            animInit = $('.enter');

        boxStart.fadeOut(300, function() {
            barra.attr('data-valor', 0);
            barra.css('width', '0%');
            contenedor.hide();
            body.removeClass('content--show');
            $('.win, .lose').hide().removeClass('active');
            animInit.show();
            $('.logo').addClass('active');
            setTimeout(function() {
                $('.logo').removeClass('logo--big active');
            }, 800);
            setTimeout(function() {
                animInit.show().addClass('anim--start');
                animInit.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    controles.css('opacity', 1);
                    animInit.addClass('active');
                    i = barra.attr('data-valor') + 1;
                });
            }, 800);
        });
    }
    function steps() {
        var btnWelcome = $('.next--start'),
            boxStart = $('.step--start'),
            iniciar = $('.btn--init'),
            btnWinFree = $('.btn--win-free'),
            contenedor = $('.step__container'),
            body = $('body'),
            animInit = $('.enter'),
            controles = $('.controls'),
            again = $('.btn--again'),
            btnShare = $('.btn--share'),
            bodychange;
        var bodychange = setInterval(function() {

            //            if ($('body').has('pace-done')) {
            //                btnWelcome.text('Empezar');
            //            }
            clearInterval(bodychange);
            $('.pace-progress').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {

            });
        }, 100);
        btnWelcome.on('click', function() {
            $(this).parents('.steps').fadeOut(300, function() {
                boxStart.fadeIn();
            });
        });
        iniciar.on('click', function(ev) {
            ev.preventDefault();
            var valor = $(this).attr('data-game');
            $('.container__viewport').attr('data-tipo', valor);
            switch(valor) {
                case 'free-game':
                    iniciar_juego();
                    break;
                case 'face-game':
                    facebookLogin(function(response) {
                        return iniciar_juego();
                    });
                    break;
            }
        });
        again.on('click', function() {
            var valor = $(this).attr('data-game');
            $('.container__viewport').attr('data-tipo', valor);
            $('.step__login').fadeOut();
            body.removeClass('tutorial');
            jugar_de_nuevo();
        });
        btnWinFree.on('click', function(ev) {
            ev.preventDefault();
            facebookLogin(function(response) {

                if(response.authResponse) {
                    $('.step__play').fadeOut(300, function() {
                        $('.step__login').fadeIn();
                    });
                }
            });
        });
        btnShare.on('click', function(ev) {
            ev.preventDefault();
            facebook_compartir(function (response) {

            });
        });
    }
    window.addEventListener("load",function() {
        setTimeout(function(){
            window.scrollTo(0, 1);
        }, 0);
    });
    function user() {
        var userAgent = window.navigator.userAgent;
        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) && windowSize < 569) {
                        $('html, body').css('overflow', 'hidden');
                        var disableScroll = false;
                        var scrollPos = 0;
                        function stopScroll() {
                            disableScroll = true;
                            scrollPos = $(window).scrollTop();
                        }
                        function enableScroll() {
                            disableScroll = false;
                        }
                        $(function(){
                            $(window).bind('scroll', function(){
                                if(disableScroll) $(window).scrollTop(scrollPos);
                            });
                            $(window).bind('touchmove', function(){
                                $(window).trigger('scroll');
                            });
                        });
                        $(document).on('touchmove', function(e) {
                            e.preventDefault();
                        }).ready(function() {
                            $(".scrollable").on('touchstart', function(e) {
                                this.allowUp = (this.scrollTop > 0);
                                this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
                                this.prevTop = null;
                                this.prevBot = null;
                                this.lastY = e.originalEvent.pageY;
                            }).on('touchmove', function(e) {
                                var event = e.originalEvent;
                                var up = (event.pageY > this.lastY), down = !up;
                                this.lastY = event.pageY;
            
                                if ((up && this.allowUp) || (down && this.allowDown))
                                    event.stopPropagation();
                                else
                                    event.preventDefault();
                            });
                        });
        }
    }
    var altura = $window.height(),
        inside = $window.innerHeight();
    function facebook() {



        var standalone = window.navigator.standalone,
            userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent );

        if( ios ) {
            if ( !standalone && safari ) {
            } else if ( standalone && !safari ) {
            } else if ( !standalone && !safari ) {
                $('body, html').css({
                    position : 'fixed',
                    top : 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                });
                $('body').addClass('facebook-ios');
            };
        } else {
        };

        function iPhoneVersion() {
            var iHeight = window.screen.height;
            var iWidth = window.screen.width;
            if (iWidth === 320 && iHeight === 480) {
                return "4";
            }
            else if (iWidth === 375 && iHeight === 667 || iWidth === 667 && iHeight === 375) {
                return "6";
            }
            else if (iWidth === 414 && iHeight === 736) {
                return "6+";
            }
            else if (iWidth === 320 && iHeight === 568 || iWidth === 568 && iHeight === 320) {
                return "5";
            }
            else if (iHeight <= 480) {
                return "2-3";
            }
            return 'none';
        }

        function isIphone() {
            return !!navigator.userAgent.match(/iPhone/i);
        }
        if ( isIphone() && iPhoneVersion() === "6"){
            $('body').addClass('apple-six');
        }
        if ( isIphone() && iPhoneVersion() === "5"){
            $('body').addClass('apple-five');
        }
    }
    animation();
    sizes();
    steps();
    user();
    facebook();
    $(window).on('resize', function() {
        sizes();
//        $(window).trigger('resize');
    });

    /**
     * Facebook
     */
    var appID = config.appID;
    window.fbAsyncInit = function() {
        FB.init({
            appId:      appID,
            xfbml:      true,
            version:    'v2.8',
            status:     true
        });
    };

    function facebookLogin (callback) {
        if(!window.hasOwnProperty('FB')) {
            return false;
        }

        FB.getLoginStatus(function(response) {
            switch(response.status) {
                case 'connected':
                    request_facebook_login(function() {}, callback);
                    break;
                case 'not_authorized':
                    request_facebook_login(function() {}, callback);
                    break;
                case 'unknown':
                    break;
                default:                    
            }
            return false;
        });
    }

    function request_facebook_login (onError, callback) {
        FB.login(function (response) {
            if(response.authResponse) {
                FB.api('/me?fields=name', function(user) {
                    var data = {
                        name: user.name,
                        fb_id: user.id
                    };
                    saveGameData(data, function(res) {});
                });

                if($.isFunction(callback)) {
                    return callback(response);
                }
            } else {

            }
        });
    }

    function facebook_compartir (callback) {
        // FB.ui({
        //     method:         'share',
        //     href:           window.location.href,
        //     quote:          'Navidad Viña Maipo',
        //     hashtag:        '#navidadviñamaipo',
        //     mobile_iframe:  true
        // }, function(response) {
        //     if($.isFunction(callback)) {
        //         callback('Shared: ', response);
        //     }
        // });

        FB.ui({
            method:         'feed',
            link:           config.feed.link,
            name:           config.feed.name,
            description:    config.feed.description,
            caption:        config.feed.caption,
            picture:        config.feed.picture
        }, function(response) {
            if($.isFunction(callback)) {

            }
        });
    }

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/" + config.fbApiLanguage + "/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function saveGameData (data, callback) {
        $.ajax({
            url: 'lib/api.php/' + config.endpoint,
            method: 'POST',
            dataType: 'json',
            data: data,
            beforeSend: function(req) {
                // do something
            },
            success: function(res) {
                if($.isFunction(callback)) {
                    callback(res);
                }
            }
        });
    }
})(jQuery, config);
