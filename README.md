# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### ReactJs_movie_web_servise
nomad coder movie web servise

### React Js
- HTML에 직접적으로 변환을 주게 됨으로서 React Js로 interactive한 웹을 제작

### React-Dom
- React element를 HTML에 위치 시킬 수 있도록 함

### JSX
- syntax extension to JavaScript
- React Js와 같지만 HTML 스러운 문법, 더욱 보기가 편함
- 확장팩이기 때문에 JSX문법을 브라우저가 인식할 수 있도록 번역을 해줄 필요가 있다
- React componet를 만들 때 이름의 첫번째 글자를 대문자로 해야 함(HTML Tag와 중복되는 것을 방지)
- jsx에서는 `for`, `class`와 같은 js의 예약어와 겹치는 태그들을 html처럼 사용하면 오류가 남-> `htmlFor`, `className`
- jsx에서는 style속성을 줄때는 `style={{color: white;}}` 와 같이 이중 괄호{{}}에 넣어줘야 한다.

### Babel
- JSX는 브라우저가 invalid하게 받기 때문에 이를 이해할 수 있도록 JSX -> React Js 하는 작업을 수행

* 이 모든걸 nodejs를 설치하고 `npx create-react-app [projectName]`을 통해 react project를 만들 수 있다!

# React state
- 새로운 업데이트가 필요할 때 정보를 react에서 저장하고 rerender할 수 있다
`import {useSate} from "react";`
`const [state, setState] = React.useState('default state value');`
- state는 default값을 가지고 setState()를 이용하면 state가 없데이트 되면서 rerender된다
- ex)
```react
const [count, setCount] = React.useState(0);
const onClick = () => {
    setCounter(counter + 1);
    //setCounter((current)=> current + 1);
    //함수를 넣으면 함수를 실행
};
```    
- state ->  생성된 변수
- setState -> 생성된 변수에 대한 함수 -> setState(n) state의 값을 n으로 변경
- setState(state's changing) -> 변수를 변경하면 rerender함

# Props
- prop -> 전달인자(argument) : Object의 형태로 전달 됨 `<Btn text = {"Text"} />`
- 여러개도 가능, 전달 된 것을 사용하려면 함수처럼 이용하면 된다.
```react
function Btn({prop}) {
    return (
        <button style={{innerText: {text}}}></button>
    )
}
```
- React.memo() -> 부모컴포넌트가 변경이 되면 자식도 변경이 되기 때문에 이러한 부분을 방지하고 싶다면 사용
- React.memo(이전에 사용한 prop을 기억하고 싶은 state)

### Prop Tyes
- propTypes -> React는 prop을 전달할 때 원하는 것을 받지 않아도 그런줄 모르기 때문에 이 library를 통해 원하는 것을 지정할 수 있다.
- `npm i prop-types`를 통해 설치해야 사용할 수 있다
- `State.propTypes = {text: PropTypes.string}` string, number, isRequiered 등

# Effects
- useEffect([실행될 함수], [변경될 때 refresh 되길 원하는 부분, ...])
`import { useEffect } from "react";`
- react는 component가 변할 때마다 refresh 하는데 만약 단 한번만 혹은 원할 때만 refresh 하기를 원하는 경우 useEffect를 사용한다.
```react
useEffect(() => {
    console.log("just once complication");
},[]);
```
- []가 비어있는 경우 한번만 실행됨

```react
useEffect(() => {
    console.log("if arg is changed, refresh");
},[arg]);
```
- [state] 인경우 state가 변경될 때마다 refresh

```react
useEffect(() => {
    console.log("");
},[]);
```
- [state1, state2, ...] 인경우 or 규칙 적용해서 하나라도 변경되면 refresh(여러개 가능)

### Clean up
- useEffect의 실행 함수에 return으로 해당 함수가 종료(파괴)될 때 실행하고자 하는 것을 넣으면 실행 됨
```
useEffect(()=>{
    console.log("create");
    return () => console.log("clean");
    }, [])
```

