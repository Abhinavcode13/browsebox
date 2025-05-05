// Listen for the keyboard shortcut command
chrome.commands.onCommand.addListener((command) => {
  if (command === "capture-tabs") {
    captureTabs();
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === 'saveTabsAndCopy') {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const urls = tabs.map(tab => tab.url).join("\n");
    
    // Save to storage
    await chrome.storage.local.set({ savedUrls: urls });
    
    // Copy to clipboard using active tab's content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: 'copyToClipboard', 
        text: urls 
      });
    });
    
    // Visual feedback
    chrome.action.setBadgeText({ text: "✓" });
    setTimeout(() => chrome.action.setBadgeText({ text: "" }), 1000);
  }
});

// Function to capture all open tabs
async function captureTabs() {
  try {
    // Get all tabs in the current window
    const tabs = await chrome.tabs.query({ currentWindow: true });
    
    // Extract URLs from tabs
    const urls = tabs.map(tab => tab.url);
    
    // Join URLs with newlines
    const urlText = urls.join('\n');
    
    // Copy to clipboard
    await navigator.clipboard.writeText(urlText);
    
    // Save to storage
    const timestamp = new Date().toISOString();
    const captureData = {
      timestamp,
      urls,
      windowTitle: tabs[0]?.windowId ? `Window ${tabs[0].windowId}` : 'Unknown Window'
    };
    
    // Get existing captures
    const { captures = [] } = await chrome.storage.local.get('captures');
    
    // Add new capture
    captures.unshift(captureData);
    
    // Save updated captures
    await chrome.storage.local.set({ captures });
    
    // Show notification
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Lock.png',
      title: 'Tabs Captured',
      message: `Successfully captured ${urls.length} tabs`
    });
  } catch (error) {
    console.error('Error capturing tabs:', error);
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Lock.png',
      title: 'Error',
      message: 'Failed to capture tabs'
    });
  }
} 