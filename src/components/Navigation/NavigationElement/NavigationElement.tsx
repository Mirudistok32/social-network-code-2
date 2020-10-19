import { ListItem } from '@material-ui/core';
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
        className={s['element__link']}
        activeClassName={s['element__link-active']}
        to={path}>
        <ListItem button className={s['element__link']}>
          <span className="material-icons">
            {title}
          </span>
        </ListItem>
      </NavLink>
    </li >
  );
})
