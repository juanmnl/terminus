$(document).ready(function () {
  $('#preload').show();
  $('#frame').hide();
  $('#loading').hide();
  $('#cursor-blank').hide();
  $('#error').hide();
  $('#serverReady').hide();

  $(document).on({
    keypress: function (e) {
      if (e.which === 13) {
        initMachine();
        $(this).off(e);
      }
    }
  });

  $(document).on({
    touchstart: function (e) {
      initMachine();
      $(this).off(e);
    }
  });

  $('#switch').on('click', function () {
    $(this).toggleClass('switch-on', 'remove');
    $(this).toggleClass('switch-off', 'add');
    $('#screen').toggleClass('on', 'remove');
    $('#screen').toggleClass('off', 'add');
  });
});

function initMachine() {
  $('#preload').hide();
  $('#frame').css('visibility', 'visible').show();

  console.log(
    "H3ll0 Y0u C0d3 V0y3ur!! I'll open source this site when it ressembles something :P Don't forget to say hi on twitter -> @_juanmnl"
  );

  var loading = function () {
    setTimeout(function () {
      initNote();
      console.log('Loaded');
    }, 730);

    $('#loading')
      .show()
      .append()
      .typed({
        strings: [
          '...',
          '...',
          '<small><span class="warning">Warning: ** This site is a prototype **^500</span></small>',
          '<small>Motto: <span class="ok">Observe. Learn. Adapt.</span><br>Work: <span class="ok">Remote</span><br>Job: <span class="ok">UI Designer @huridocs</span><br>Tools: <span class="ok">Figma - HTML - CSS - JS</span><br>Languages: <span class="ok">ES - FR - EN - PT.</i></span><br>Previous work: <span class="ok">Clevertech 2018/21 - Thoughworks 2016/18 - Freelance 2013/16 - and many more...</span></small><br>'
        ],
        showCursor: false,
        contentType: 'html'
      });
  };
  var loadingOff = function () {
    $('#loading').hide();
  };

  var errorShow = function () {
    $('#error').show();
  };
  var errorHide = function () {
    $('#error').hide();
  };

  var thinking = function () {
    $('.thinking').hide();
  };

  var serverReady = function () {
    $('#serverReady').show();
  };
  var serverReadyHide = function () {
    $('#serverReady').hide();
  };

  var welcomeText = function () {
    $('#frame #screen .text span').typed({
      strings: [
        'Hello there! :)',
        'How are you?',
        "I'm Juan Manuel Cornejo and I'm a GUI/IxD designer.<br>I currently work for <a href='https://huridocs.org/' target='_blank'>HURIDOCS</a> from Quito, Ecuador. <small>(0.2333° S, 78.5167° W – UTC/GMT -5)</small><br><br>I love building things for the web. My main interests are:<br><br>- HCI RESEARCH and DEVELOPMENT<br>- GUI/IxD DESIGN<br>- PRODUCT CONCEPTUALIZATION and DESIGN<br>- PROTOTYPE DEVELOPMENT<br>- UI ENGINEERING<br><br><small>This is part of an UI research I started a long time ago, and I'm currently reviving it.</small><br><br>I also love <a href='https://www.rarbbit.com/' target='_blank'>photography</a> (mostly portraits and documenting the mundane).<br><br>If you want to get in touch, please contact me on twitter, instagram<br>or throw me an email juanmnl@me.com<br><br>Thank you for stopping by!<br><br>:P<br><br>– Juanmnl"
      ],
      contentType: 'html',
      loop: false,
      startDelay: 1200
    });
  };

  setTimeout(loading, 2500);
  setTimeout(loadingOff, 23000);
  setTimeout(errorShow, 2800);
  setTimeout(errorHide, 3800);
  setTimeout(thinking, 23700);
  setTimeout(serverReady, 23300);
  setTimeout(serverReadyHide, 23700);
  setTimeout(welcomeText, 23000);
}
