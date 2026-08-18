let lastZoomTime = 0;
const ZOOM_COOLDOWN = 100; 

window.addEventListener('wheel', (e) => {
    if (e.metaKey) {
        e.preventDefault(); 

        const currentTime = Date.now();
        if (currentTime - lastZoomTime < ZOOM_COOLDOWN) {
            return;
        }

        if (e.deltaY < 0) {
            console.log("[Mac Zoom] 휠 업 감지: 확대 요청");
            chrome.runtime.sendMessage({ action: "zoom_in" });
            lastZoomTime = currentTime;
        } else if (e.deltaY > 0) {
            console.log("[Mac Zoom] 휠 다운 감지: 축소 요청");
            chrome.runtime.sendMessage({ action: "zoom_out" });
            lastZoomTime = currentTime;
        }
    }
}, { passive: false });

window.addEventListener('mousedown', (e) => {
    if (e.metaKey && e.button === 1) {
        e.preventDefault();
        console.log("[Mac Zoom] 휠 클릭 감지: 초기화 요청");
        chrome.runtime.sendMessage({ action: "zoom_reset" });
    }
});