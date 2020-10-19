import React from 'react';
import s from './ProfileStatus.module.scss';

type PropsType = {
  title: string
}

export const ProfileStatus: React.FC<PropsType> = React.memo((props) => {

  const { title } = props

  return (
    <div className={s.status}>
      <p className={s.status__p}>
        {
          title
        }
      </p>
    </div>
  );
})
