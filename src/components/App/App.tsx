import React from 'react';
import { Content } from '../Content/Content';
import { Navigation } from '../Navigation/Navigation';
import s from './App.module.scss';

export function App() {
  return (
    <div className={s.app}>
      <div className={s.app__container}>
        <Content />
        <Navigation />
      </div>
    </div>
  );
}
