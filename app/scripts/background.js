'use strict';

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "scripts/lint_post.js"});
});

function onWebNav(details) {
    if (details.frameId === 0) {
        chrome.pageAction.show(details.tabId);
    }
}
var filter = {
    url: [{
        pathContains: 'wp-admin'
    }]
};
chrome.webNavigation.onCommitted.addListener(onWebNav, filter);
chrome.webNavigation.onHistoryStateUpdated.addListener(onWebNav, filter);