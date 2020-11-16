(function($, Drupal, drupalSettings) {
  /**
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Makes changes in the DOM to be able to test the completion of AJAX in assertWaitOnAjaxRequest.
   */

  Drupal.behaviors.tedboardCustom = {
    attach: function (context, settings) {
      // 
    }
  }
})(jQuery, Drupal, drupalSettings);
