import "./styles.css";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const LabelStyle = styled.label`
  position: relative;

  input {
    border: none;
    padding: 2px 15px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    font-size: 15px;

    &focus {
      border: 1px solid blue;
    }
  }

  button {
    position: absolute;
    top: 2px;
    right: 10px;
    border: none;
    background: transparent;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
      color: rgba(0, 0, 0, 0.8);
      &:active {
        transform: scale(1.1);
      }
    }
  }
`;

export default function App() {
  return (
    <div className="App">
      <h1>인풋박스 안 버튼 연습</h1>
      <LabelStyle color="white">
        <input type="text" />
        <button>
          <FaSearch size={18} />
        </button>
      </LabelStyle>
    </div>
  );
}
