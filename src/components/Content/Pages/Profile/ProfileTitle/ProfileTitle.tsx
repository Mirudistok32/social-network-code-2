import React from 'react';
import s from './ProfileTitle.module.scss';


type PropsType = {
    title: string
    fontSize?: string
}

export const ProfileTitle: React.FC<PropsType> = React.memo((props) => {

    const { title, fontSize } = props
    return (
        <div className={s.title} style={{ fontSize }}>
            {
                title
            }
        </div >
    )
})
