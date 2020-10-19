import React from 'react';
import s from './ProfileTitle.module.scss';


type PropsType = {
    title: string
}

export const ProfileTitle: React.FC<PropsType> = React.memo((props) => {

    const { title } = props
    return (
        <div className={s.title}>
            {
                title
            }
        </div >
    )
})
