$.fn.extend({
    wordCount: function (maxLength, wordWrapper) {
      var self = this;
      $(self).attr("maxlength", maxLength);
      showWordCount();
      $(this).on("input propertychange", showWordCount);
      function showWordCount() {
        curLength = $(self).val().length;
        var leaveCount = maxLength - curLength;
        wordWrapper.text(leaveCount + "/" + maxLength);
      }
    }
  })
  $(function () {
    $("#abc").wordCount(15, $("#wordCountShow"));
  })