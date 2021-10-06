import React, { useState } from 'react';
import axios from 'axios';

import { Button, Slider, TextField } from '@mui/material';

import { TypoStyle, ButtonStyle, FormStyle } from '../components/Styles';
import copyResult from '../modules/Clipboard';

const uri = 'http://sigae.asuscomm.com:9210/upload/dec_hex/dec_to_hex';
const bases = [
  {
    value: 2,
    label: '2',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 16,
    label: '16',
  },
];

const Base = () => {
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState(10);
  const [error, setError] = useState(false);

  const convert = () => {
    setInput(input.replace(' ', ''));
    const data = input.split(',').map((num) => parseInt(num, from));

    axios({
      method: 'post',
      url: uri,
      data: { data },
    }).then((response) => {
      setOutput(response.data.output);
    });
  };

  return (
    <FormStyle>
      <div className="item">
        <TypoStyle>입력 선택</TypoStyle>
        <Slider
          aria-label="진법 선택"
          defaultValue={10}
          min={2}
          max={16}
          step={null}
          valueLabelDisplay="auto"
          marks={bases}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
        <TextField
          label="변환할 값"
          helperText="변환할 값을 쉼표로 구분하여 입력"
          multiline
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {error ? <TypoStyle error>입력을 확인해 주세요.</TypoStyle> : null}
        <ButtonStyle>
          <Button
            variant="outlined"
            onClick={() => {
              convert();
            }}
          >
            변환!
          </Button>
        </ButtonStyle>
      </div>
      <div className="item">
        <TypoStyle>변환 결과</TypoStyle>
        <TypoStyle description>
          {output !== null ? output : '결과가 여기에 표시됩니다.'}
        </TypoStyle>
        {output !== null ? (
          <ButtonStyle>
            <Button
              variant="outlined"
              onClick={() => {
                copyResult(output);
              }}
            >
              결과 복사
            </Button>
          </ButtonStyle>
        ) : null}
      </div>
    </FormStyle>
  );
};

export default Base;
