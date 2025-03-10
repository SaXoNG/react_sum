import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum'

export const App = () => (
  <>
    <Sum
      firstNumber={2}
      secondNumer={3}
    />
    <Sum
      firstNumber={-5}
      secondNumer={5}
    />
    <Sum
      firstNumber={10}
    />
    <Sum
      secondNumer={5}
    />
    <Sum />
  </>
);
