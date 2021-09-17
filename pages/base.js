import { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const uri = 'https://jsonplaceholder.typicode.com/todos/1';
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
  const [output, setOutput] = useState(0);
  const onChangeInput = (e) => {
    // const result = getResponse({
    //   method: 'base',
    //   data: e.target.input,
    // });

    //   const result = await axios.post(uri, {
    //     params: { method: input.type, data: input.data },
    //   });

    setInput(e.target.value);
    axios.get(uri).then((response) => {
      setOutput(response.data.userId);
    });
  };

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
        variant="outlined"
        value={output}
        disabled
      />
    </MainStyle>
  );
};

export default Base;
