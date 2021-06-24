(function($, Drupal, drupalSettings) {
  /**
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Makes changes in the DOM to be able to test the completion of AJAX in assertWaitOnAjaxRequest.
   */

  Drupal.behaviors.tedboardCustom = {
    attach: function (context, settings) {
      // $('div#block-twittertimeline iframe').addClass("container");
      // // console.log('before loaded');
      // $("iframe").on("load", function() {
      //   console.log('widget loaded');
      //   let head = $("iframe").contents().find("head");
      //   let css = '<style>.SandboxRoot.var-borderless .timeline-TweetList-tweet { width: 32%!important; display: inline-block!important; max-height: 300px!important; overflow: scroll!important;}</style>';
      //   $(head).append(css);
      // });
    }
  }
})(jQuery, Drupal, drupalSettings);
