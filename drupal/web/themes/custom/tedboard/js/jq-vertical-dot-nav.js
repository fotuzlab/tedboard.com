

(function($, Drupal, drupalSettings) {
  /**
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Makes changes in the DOM to be able to test the completion of AJAX in assertWaitOnAjaxRequest.
   */

  Drupal.behaviors.tedboardCustom = {
    attach: function (context, settings) {
      function changeDot() {
        const scrollValue = $(window).scrollTop();
        const heightSec2 = $('#sec6').offset().top;
        const heightSec3 = $('#sec7').offset().top;
        const heightSec4 = $('#sec8').offset().top;
      
        if (scrollValue < heightSec2) {
            $('.scrollSection nav li').not('.dot1').removeClass('active');
            $('.dot1').addClass('active');
        } else if (scrollValue < heightSec3) {
            $('.scrollSection nav li').not('.dot2').removeClass('active');
            $('.dot2').addClass('active');
        } else if (scrollValue < heightSec4) {
            $('.scrollSection nav li').not('.dot3').removeClass('active');
            $('.dot3').addClass('active');
        } else {
            $('.scrollSection nav li').not('.dot4').removeClass('active');
            $('.dot4').addClass('active');
        }
      }
      
      $(window).on("scroll", changeDot)
      
      $('.scrollSection nav li').on('click', function () {
        $("html, body").animate({ scrollTop: $('#s' + $(this).attr('id')).offset().top }, 'slow');
      })
    }
  }
})(jQuery, Drupal, drupalSettings);