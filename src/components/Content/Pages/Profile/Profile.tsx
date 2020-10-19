import React from 'react';
import s from './Profile.module.scss';
import { ProfileLine } from './ProfileLine/ProfileLine';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type PropsType = {

}


export const Profile: React.FC<PropsType> = React.memo((props) => {


  return (
    <div className={s.profile}>
      <ProfileStatus title={"Люди считают, что программирование — это наука избранных, но в реальности все наоборот — просто много людей создают программы, которые используют чужие программы, как-будто строя стену из маленьких кирпичиков."} />
      <ProfileLine />
    </div>
  );
})
