// Content script for BrowseBox
// This script runs in the context of web pages

// Listen for keyboard shortcut
document.addEventListener('keydown', function(event) {
  if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === 'y') {
    chrome.runtime.sendMessage({ action: 'saveTabsAndCopy' });
  }
});

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPageInfo") {
    // Get page title and URL
    const pageInfo = {
      title: document.title,
      url: window.location.href,
      favicon: getFavicon()
    };
    sendResponse(pageInfo);
  } else if (request.action === 'copyToClipboard') {
    navigator.clipboard.writeText(request.text);
  }
});

// Helper function to get favicon URL
function getFavicon() {
  const favicon = document.querySelector('link[rel="icon"]') || 
                 document.querySelector('link[rel="shortcut icon"]');
  return favicon ? favicon.href : null;
} 