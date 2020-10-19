import React from 'react';
import { ProfileTitle } from '../ProfileTitle/ProfileTitle';
import s from './ProfileDescription.module.scss';


type PropsType = {

}

export const ProfileDescription: React.FC<PropsType> = React.memo((props) => {


    return (
        <div className={s.description}>
            <ProfileTitle title={"Летопись"} />
            <div className={s.description__content}>
                <ProfileTitle title={"Обо мне"} fontSize="1.5em" />
                <p className={s.description__text}>
                    Delta compression using up to 8 threads
                    Compressing objects: 100% (13/13), done.
                    Writing objects: 100% (13/13), 1.43 KiB | 732.00 KiB/s, done.
                    Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
                    remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
                    To https://github.com/Mirudistok32/social-network-code-2.git
                </p>
            </div>
            <div className={s.description__content}>
                <ProfileTitle title={"О моей работе"} fontSize="1.5em" />
                <p className={s.description__text}>
                    Delta compression using up to 8 threads
                    Compressing objects: 100% (13/13), done.
                    Writing objects: 100% (13/13), 1.43 KiB | 732.00 KiB/s, done.
                    Total 13 (delta 6), reused 0 (delta 0), pack-reused 0
                    remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
                    To https://github.com/Mirudistok32/social-network-code-2.git
                </p>
            </div>
        </div >
    )
})
