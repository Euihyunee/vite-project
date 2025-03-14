# vite-project
learn vite + react + javascript 

## vite 시작 하기 

1. npm 설치하기 
2. node.js 설치하기
3. vite 설치 

```bash
npm create vite@latest
```

| project이름(myapp) 입력 -> react 선택 -> javascript 선택

4. vite 실행 

프로젝트 최상위에서 다음 입력

```bash 
cd myapp
npm install
npm install react-router-dom
npm run dev
```
이렇게 생성된거에서 src\App.jsx가 코드 입력창임 

### src\components 폴더

- 웹 화면 페이지의 요소들을 컴포넌트화할 수 있다.
- `.jsx` 파일들을 생성하고 다른 `.jsx` 파일에 import함으로써 `<이름 />`으로 사용할 수 있다.

```jsx 
function Header(){
  return (<>
    <header>
      <h1>헤더입니당</h1>
      <div className="wrap">
        <p>헤더영역입니다.</p>
      </div>
    </header>
  </>)
}

export default Header

// App.jsx에서
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
```

### Chrome 툴

React Developer Tools 사용

개발자 페이지(F12)에서 컴포넌트별로 확인 가능함