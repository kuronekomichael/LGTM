chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    [
      "textarea[name='comment[body]']",
      "textarea[name='pull_request_review[body]']"
    ].forEach(function(query) {
      var oldMessage = $(query).val();
      $(query).val(
        (oldMessage ? oldMessage + "\n\n" : '') + request.image
      );
    });
});
