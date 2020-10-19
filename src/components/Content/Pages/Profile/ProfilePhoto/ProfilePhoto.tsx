import React from 'react';
import { PhotosType } from '../../../../../api/profile-api';
import imgDefault from '../../../../../assets/img/inktober-inktober2020-Лавкрафт-Ктулху-6248362.jpeg'
import s from './ProfilePhoto.module.scss';

type PropsType = {
    photo: PhotosType
}

export const ProfilePhoto: React.FC<PropsType> = React.memo((props) => {

    const { photo } = props
    const { small, large } = photo

    const renderPhoto = large ? <img src={large} alt="" /> : small ? <img src={small} alt="" /> : <img src={imgDefault} alt="" />

    return (
        <div className={s.photo}>
            {
                renderPhoto
            }
        </div>
    )
})
