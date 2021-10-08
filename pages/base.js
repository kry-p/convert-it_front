/*
 * Base converter page
 */
import React, { useState } from 'react';
import axios from 'axios';

// Material UI components
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

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
  // states
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState('0');
  const [from, setFrom] = useState(10);
  const [to, setTo] = useState(16);
  const [error, setError] = useState(false);

  // API request
  const convert = () => {
    setInput(input.replace(' ', ''));
    const data = input.split(',').map((num) => parseInt(num, from));

    axios({
      method: 'post',
      url: uri,
      data: { data },
    }).then((response) => {
      setOutput(response.data[0].data.output.join(', '));
    });
  };

  return (
    <FormStyle>
      <div className="item">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="base-converter-input-label">입력 선택</InputLabel>
            <Select
              labelId="base-converter-input-selector-label"
              id="base-converter-input-selector"
              value={from}
              label="입력 선택"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            >
              {bases
                .filter((item) => item.value !== to)
                .map((item) => (
                  <MenuItem value={item.value}>{`${item.label}진법`}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="base-converter-output-label">출력 선택</InputLabel>
            <Select
              labelId="base-converter-output-selector-label"
              id="base-converter-output-selector"
              value={to}
              label="입력 선택"
              onChange={(e) => {
                setTo(e.target.value);
              }}
            >
              {bases
                .filter((item) => item.value !== from)
                .map((item) => (
                  <MenuItem value={item.value}>{`${item.label}진법`}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <TextField
          label="변환할 값"
          helperText="변환할 값을 쉼표로 구분하여 입력"
          multiline
          fullWidth
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
