import { CardActionArea, makeStyles } from '@material-ui/core';
import React from 'react';
import { PhotosType } from '../../../../../api/profile-api';
import imgDefault from '../../../../../assets/img/inktober-inktober2020-Лавкрафт-Ктулху-6248362.jpeg'
import s from './ProfilePhoto.module.scss';



const useStyles = makeStyles({
    action: {
        height: 220,
        width: 200,
        color: "#231f20"
    },
})


type PropsType = {
    photo: PhotosType
}

export const ProfilePhoto: React.FC<PropsType> = React.memo((props) => {
    const classes = useStyles()
    const { photo } = props
    const { small, large } = photo

    const renderPhoto = large ? <img src={large} alt="" /> : small ? <img src={small} alt="" /> : <img src={imgDefault} alt="" />

    return (
        <div className={s.photo}>
            <CardActionArea className={classes.action} >
                {
                    renderPhoto
                }
            </CardActionArea>
        </div>
    )
})
