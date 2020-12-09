const toggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");

// 액션 타입과 액션 생성 함수 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수: 액션 객체를 만드는 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 만들기
// createStore 함수를 사용한다.
import { createStore } from "redux";

const store = createStore(reducer);

// render 함수 만들기

function render() {
  const state = store.getState(); // 현재 상태를 가져온다.

  if (state.toggle) {
    toggle.classList.add("active");
  } else {
    toggle.classList.remove("active");
  }

  counter.innerText = state.counter;
}

render();

// 구독하기
// 스토어의 상태가 바뀔 때마다 render 함수를 호출할 것이다.
store.subscribe(render);

// 액션 발생시키지
// dispatch를 사용한다.

toggle.onclick = () => {
  store.dispatch(toggleSwitch())
}
btnIncrease.onclick = () => {
  store.dispatch(increase())
}
btnDecrease.onclick = () => {
  store.dispatch(decrease())
}