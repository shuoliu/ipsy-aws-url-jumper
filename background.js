chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var pattern = /(http|https):\/\/ip-([0-9]+)-([0-9]+)-([0-9]+)-([0-9]+)\..*?\.ipsy\.com(.+)/i;
  if (tab.status == 'complete' && tab.url && tab.url.match(pattern)) {
    var parse = pattern.exec(tab.url);
    var newUrl = parse[1] + '://' + parse[2] + '.' + parse[3] + '.' + parse[4] + '.' + parse[5] + parse[6]
    chrome.tabs.update(tabId, {'url': newUrl});
  }
});