import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

type PropsType = {

}

export const Navigation: React.FC<PropsType> = React.memo((props) => {

  const { } = props

  return (
    <div className={s.navigation}>
      <ul>
        <li>
          <NavLink >
            <span className="material-icons">
              perm_identity
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
})
