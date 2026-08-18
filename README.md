# Mac Cmd+Scroll Zoom

## 한국어 (Korean)

macOS 환경의 크롬(Chrome) 브라우저에서 `Cmd + 마우스 휠` 조합으로 웹페이지를 확대 및 축소하는 확장 프로그램입니다. 

### 주요 기능
- `Cmd + 마우스 휠 위로` : 화면 확대
- `Cmd + 마우스 휠 아래로` : 화면 축소
- `Cmd + 마우스 휠 클릭(가운데 버튼)` : 화면 크기 100% 초기화
- 무한 휠 마우스 스크롤 속도 제어(쿨다운) 적용

### 설치 방법

**방법 1: 릴리즈 압축 파일 다운로드 (권장)**
1. [mac_zoom_scroll.zip 다운로드](https://github.com/dongkkase/mac_zoom_scroll/releases/download/v1.0.0/mac_zoom_scroll.zip) 링크를 클릭하여 파일을 다운로드하고 압축을 해제합니다.
2. 크롬 브라우저 주소창에 `chrome://extensions/`를 입력하여 확장 프로그램 관리 페이지로 이동합니다.
3. 우측 상단의 **개발자 모드(Developer mode)**를 활성화합니다.
4. 좌측 상단의 **압축해제된 확장 프로그램을 로드합니다(Load unpacked)** 버튼을 클릭합니다.
5. 압축을 해제한 폴더를 선택하여 설치를 완료합니다.
6. 일반 웹페이지를 새로고침(Cmd+R)한 뒤 동작을 확인합니다. (보안상 `chrome://` 페이지나 크롬 웹 스토어에서는 동작하지 않습니다.)

**방법 2: 소스 코드 다운로드**
1. GitHub 저장소의 코드를 Clone 하거나 'Download ZIP'을 통해 전체 소스코드를 다운로드하고 압축을 해제합니다.
2. 위 '방법 1'의 2~6번 과정과 동일하게 압축을 해제한 소스코드 폴더를 로드하여 설치하고 테스트합니다.

---

## English

A Chrome extension that enables zooming in and out on web pages using the `Cmd + Mouse Wheel` combination in macOS.

### Features
- `Cmd + Mouse Wheel Up` : Zoom In
- `Cmd + Mouse Wheel Down` : Zoom Out
- `Cmd + Mouse Wheel Click (Middle Button)` : Reset zoom to 100%
- Infinite scroll mouse support (cooldown applied)

### Installation

**Method 1: Download Release ZIP (Recommended)**
1. Download and extract the [mac_zoom_scroll.zip](https://github.com/dongkkase/mac_zoom_scroll/releases/download/v1.0.0/mac_zoom_scroll.zip) file.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click the **Load unpacked** button in the top left corner.
5. Select the extracted folder to complete the installation.
6. Refresh (Cmd+R) a standard web page to test. (Does not work on `chrome://` pages or the Chrome Web Store due to browser security policies.)

**Method 2: Download Source Code**
1. Clone the repository or download the source code via 'Download ZIP' and extract it.
2. Follow steps 2-6 from 'Method 1' above to load the extracted source code folder and test the extension.
