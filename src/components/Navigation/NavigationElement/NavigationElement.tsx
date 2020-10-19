import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavigationElement.module.scss';

type PropsType = {
  path: string
  title: string
}

export const NavigationElement: React.FC<PropsType> = React.memo((props) => {

  const { path, title } = props
  
  return (
    <li className={s.element}>
      <NavLink
        activeClassName={s['element__link-active']}
        className={s['element__link']}
        to={path}>
        <span className="material-icons">
          {title}
        </span>
      </NavLink>
    </li>
  );
})
