$(function() {
  function Scroll(firstHead, secondHead, tableLink, content) {
    this.firstHead = firstHead;
    this.secondHead = secondHead;
    this.tableLink = tableLink;
    this.content = content;
    this.timer = null;
  }

  Scroll.prototype.throttle = function (delay) {
    var _this = this;
    clearTimeout(this.timer);
    this.timer = setTimeout(function() {
      _this.scrollContent();
    }, delay);
  }

  Scroll.prototype.active = function (id) {
    var tableLink = this.tableLink;
    for (i = 0, j = tableLink.length; i < j; i++) {
      var tableLinkList = tableLink[i].href.split('#');
      if (tableLinkList[tableLinkList.length - 1] == id) {
        $(tableLink[i]).addClass('active');
      }
    }
  }

  Scroll.prototype.scrollContent = function() {
    var secondHead = this.secondHead;
    var content = this.content;
    for (var i = 0, j = secondHead.length; i < j; i++) {
      var topHeight = $(secondHead[i]).offset().top - 50;
      var bottomHeight = $(secondHead[i]).offset().top + $(secondHead[i]).height() - 50;

      if (content.scrollTop() >= topHeight && content.scrollTop() <= bottomHeight) {
        var outlineArray = secondHead[i].id.split('-');
        var outlineId = outlineArray[outlineArray.length - 1];
        this.active(outlineId);
        return false;
      } else {
        $(this.tableLink).removeClass('active');
      }
    }
  }

  Scroll.prototype.init = function() {
    var _this = this;
    $(window).on('scroll', function(){
      _this.throttle();
    });
  }

  var scroll = new Scroll($('.outline-3'), $('.outline-4'), $('#text-table-of-contents a'), $('body'));

  scroll.init();
});
