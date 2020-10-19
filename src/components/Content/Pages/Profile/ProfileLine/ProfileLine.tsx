import React, { DetailedHTMLProps } from 'react';
import s from './ProfileLine.module.scss';

type PropsType = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ProfileLine: React.FC<PropsType> = React.memo(({ ...rest }) => <div className={s.line} {...rest}></div>)
