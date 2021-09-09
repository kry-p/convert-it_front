import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const MainStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: baseline;
  justify-content: center;

  .item {
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
`;

const Base = () => {
  const [input, setInput] = useState(0);
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log(input);
  });

  return (
    <MainStyle>
      <TextField
        className="item"
        id="input"
        label="변환할 값 입력"
        variant="outlined"
        value={input}
        onChange={onChangeInput}
      />
      <span className="item">➔</span>
      <TextField
        className="item"
        id="result"
        label="결과"
        variant="outlined"
        disabled
      />
    </MainStyle>
  );
};

export default Base;
