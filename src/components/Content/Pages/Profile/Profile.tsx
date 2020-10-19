import React from 'react';
import s from './Profile.module.scss';
import { ProfileLine } from './ProfileLine/ProfileLine';
import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PhotosType } from '../../../../api/profile-api';
import { ProfileContacts } from './ProfileContacts/ProfileContacts';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';

type PropsType = {

}


export const Profile: React.FC<PropsType> = React.memo((props) => {

  const p = {} as PhotosType

  return (
    <div className={s.profile}>
      <ProfileStatus title={"Люди считают, что программирование — это наука избранных, но в реальности все наоборот — просто много людей создают программы, которые используют чужие программы, как-будто строя стену из маленьких кирпичиков."} />
      <ProfileLine />
      <div className={s.profile__photoAndInfo}>
        <ProfilePhoto photo={p} />
        <ProfileInfo />
      </div>
      <ProfileLine />
      <ProfileContacts />
      <ProfileLine />
      <ProfileDescription />
      <ProfileLine />
    </div>
  );
})
