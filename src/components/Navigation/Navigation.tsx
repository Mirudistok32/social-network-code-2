import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../routers/routers';
import s from './Navigation.module.scss';

type PropsType = {

}

export const Navigation: React.FC<PropsType> = React.memo((props) => {

  const { } = props

  return (
    <div className={s.navigation}>
      <ul className={s.navigation__list}>
        <li className={s.navigation__element}>
          <NavLink
            activeClassName={s['navigation__element-link-active']}
            className={s['navigation__element-link']}
            to={PATH.profile}>
            <span className="material-icons">
              perm_identity
            </span>
          </NavLink>
        </li>
        <li className={s.navigation__element}>
          <NavLink
            activeClassName={s['navigation__element-link-active']}
            className={s['navigation__element-link']}
            to={PATH.messages}>
            <span className="material-icons">
              chat
            </span>
          </NavLink>
        </li>
        <li className={s.navigation__element}>
          <NavLink
            activeClassName={s['navigation__element-link-active']}
            className={s['navigation__element-link']}
            to={PATH.friends}>
            <span className="material-icons">
              people
            </span>
          </NavLink>
        </li>
        <li className={s.navigation__element}>
          <NavLink
            activeClassName={s['navigation__element-link-active']}
            className={s['navigation__element-link']}
            to={PATH.search}>
            <span className="material-icons">
              person_search
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
})
