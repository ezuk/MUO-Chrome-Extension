'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript(null, {file: "scripts/lint_post.js"});
});