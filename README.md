## TodoList 만들기 (React-redux&router-dom)
one redux store / css-in-js

### compnents
1 Header.jsx -> 머릿글
2 Layout.jsx -> 전체 페이지 레이아웃
3 BoxInputs.jsx -> 인풋박스를 입력하는 영역
4 List.jsx -> 출력한 인풋박스들이 보여지는 영역
5 WorkDone.jsx
처음에 우선 1~4 의 컴포넌트들로 나누어주었다. 
페이지를 구성할때 보이는 각각의 영역별로 컴포넌트를 나누어주었다.
5번 컴포넌트는 기능들을 처음 완성 시킨후 반복되는 코드들을 간편화 시켜주고자 
List에 반복되었던 코드부분을 props로 넘겨주어 모듈화 하였다.

### pages
1. TodoList.jsx -> 첫번째 화면, 투두리스트를 입력하고 보여지는 페이지
2. ListInfo.jsx -> 각 리스트를 눌러 상세페이지로 들어가면 보이게 되는 페이지
react-router-dom을 이용하여 Link를 통해 페이지를 이동하는 기능을 사용할때 보여지는 페이지별로 나누어 주었다.
ListInfo에 모든 컴포넌트들을 넣어주어 첫페이지가 될 수 있게 해주었다.
페이지를 이동하여 상세페이지를 보여줄때는 useParams를 이용하여 id로 구분하여 선택한 상세페이지만 보이게 해주었다.

### redux
1. config > configStore.js
리덕스를 사용하기 위해 내가 만든 리듀서를 import
2. modules > listsaver.js
스토어를 만들어주었다.

### shared > Router.js
라우터를 통해 페이지를 이동할 수 있도록 import를 해주었다.
