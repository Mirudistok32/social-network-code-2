import React from 'react';
import s from './Messages.module.scss';

type PropsType = {

}

export const Messages: React.FC<PropsType> = React.memo((props) => {

  return (
    <div className={s.messages}>

    </div>
  );
})
