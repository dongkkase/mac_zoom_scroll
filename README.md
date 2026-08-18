# Cmd + Scroll Zoom for Mac

## 한국어 (Korean)

macOS 환경의 크롬(Chrome) 브라우저에서 `Cmd + 마우스 휠` 조합으로 웹페이지를 확대 및 축소할 수 있게 해주는 확장 프로그램입니다. 윈도우(Windows) 환경과 동일한 줌(Zoom) 조작 경험을 제공합니다.

### 주요 기능
- `Cmd + 마우스 휠 위로` : 화면 확대 (Zoom In)
- `Cmd + 마우스 휠 아래로` : 화면 축소 (Zoom Out)
- `Cmd + 마우스 휠 클릭(가운데 버튼)` : 화면 크기 100% 초기화 (Reset)
- 무한 휠 마우스 스크롤 속도 제어(쿨다운) 적용

### 설치 방법
1. 파일들(`manifest.json`, `content.js`, `background.js`)을 하나의 폴더에 다운로드합니다.
2. 크롬 브라우저 주소창에 `chrome://extensions/`를 입력하여 확장 프로그램 관리 페이지로 이동합니다.
3. 우측 상단의 **개발자 모드(Developer mode)**를 켭니다.
4. 좌측 상단의 **압축해제된 확장 프로그램을 로드합니다(Load unpacked)** 버튼을 클릭합니다.
5. 다운로드한 파일들이 있는 폴더를 선택하면 설치가 완료됩니다.
6. 일반 웹페이지를 새로고침(Cmd+R)한 뒤 동작을 확인합니다. (보안상 `chrome://` 페이지나 크롬 웹 스토어에서는 동작하지 않습니다.)

---

## English

A Chrome extension that enables zooming in and out on web pages using the `Cmd + Mouse Wheel` combination in the macOS environment. It provides the same zoom control experience as in Windows.

### Features
- `Cmd + Mouse Wheel Up` : Zoom In
- `Cmd + Mouse Wheel Down` : Zoom Out
- `Cmd + Mouse Wheel Click (Middle Button)` : Reset zoom to 100%
- Infinite scroll mouse support (cooldown applied to prevent rapid zooming)

### Installation
1. Download the files (`manifest.json`, `content.js`, `background.js`) into a single folder.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click the **Load unpacked** button in the top left corner.
5. Select the folder containing the downloaded files to complete the installation.
6. Refresh (Cmd+R) a standard web page to test. (Note: For security reasons, this extension does not work on `chrome://` pages or the Chrome Web Store.)