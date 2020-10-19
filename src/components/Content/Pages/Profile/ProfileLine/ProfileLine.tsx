import React from 'react';
import s from './ProfileLine.module.scss';

type PropsType = {
}

export const ProfileLine: React.FC<PropsType> = React.memo((props) => {

  return (
    <div className={s.line}>

    </div>
  );
})
