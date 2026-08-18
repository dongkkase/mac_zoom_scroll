const ZOOM_STEPS = [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1.0, 1.1, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0, 4.0, 5.0];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!sender.tab || !sender.tab.id) return;
    
    const tabId = sender.tab.id;

    chrome.tabs.getZoom(tabId, (currentZoom) => {
        let currentIndex = 0;
        let minDiff = Infinity;
        
        for (let i = 0; i < ZOOM_STEPS.length; i++) {
            let diff = Math.abs(ZOOM_STEPS[i] - currentZoom);
            if (diff < minDiff) {
                minDiff = diff;
                currentIndex = i;
            }
        }
        
        if (request.action === "zoom_in") {
            currentIndex = Math.min(currentIndex + 1, ZOOM_STEPS.length - 1);
        } else if (request.action === "zoom_out") {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else if (request.action === "zoom_reset") {
            currentIndex = ZOOM_STEPS.indexOf(1.0);
        }

        const newZoom = ZOOM_STEPS[currentIndex];
        console.log(`[Mac Zoom] 현재 배율: ${currentZoom} -> 새 배율: ${newZoom}`);
        
        chrome.tabs.setZoom(tabId, newZoom);
    });
});