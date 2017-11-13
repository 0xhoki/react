/* eslint-disable*/
export const layout = function () {
  let handleScroll = function () {
    $('.downarrow a').click(function () {
      let x = $('.scroll_section1').offset().top;
      x = x.top;
      if (x < -1050) {
        $('.downarrow').hide();
        $('.downup').show();
      }
      let scrollh = $('.sidebar_home').height();
      scrollh = scrollh + 'px';
      $('.scroll_section1').animate({
        marginTop: '-=' + scrollh
      });
    });
    $('.downup a').click(function () {
      let x = $('.scroll_section1').offset();
      x = x.top;
      if (x < 0) {
        $('.downarrow').show();
        $('.downup').hide();
      }
      $('.scroll_section1').animate({
        marginTop: '0%'
      });
    });
    $(document).click(function (e) {
      if (!$(e.target).is('#myNavbar *')) {
        $('#myNavbar').removeClass('in');
      }
    });
    $('#myNavbar .nav li a').click(function () {
      $('#myNavbar').removeClass('in');
    });
    $('.right_panel').on('mousewheel', function (event) {
      let block1 = $('.bio');
      let block2 = $('.faq_wrap');
      let block3 = $('.privacy_cont');
      if (block1.length != 6 && block2.length != 2 && block3.length != 2) {
        let scroll = $('.sidebar_home').scrollTop();
        $('.sidebar_home').scrollTop(scroll - event.originalEvent.wheelDeltaY);
        return true;
      }
    });
  };
  return {
    //main function to initiate the module
    init: function () {
      handleScroll();
    }
  };
}();
/* eslint-enable*/


