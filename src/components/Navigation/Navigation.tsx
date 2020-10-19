import React, { useMemo } from 'react';
import { v4 } from 'uuid';
import { PATH } from '../../routers/routers';
import { NavigationElement } from './NavigationElement/NavigationElement'
import s from './Navigation.module.scss';

const listLinks = [
  { id: v4(), path: PATH.profile, title: "perm_identity" },
  { id: v4(), path: PATH.messages, title: "chat" },
  { id: v4(), path: PATH.friends, title: "people" },
  { id: v4(), path: PATH.search, title: "person_search" },
]

type PropsType = {

}

export const Navigation: React.FC<PropsType> = React.memo((props) => {

  const { } = props

  const renderListLinks = useMemo(() => listLinks.map(i => {
    return <NavigationElement key={i.id} path={i.path} title={i.title} />
  }), [])

  return (
    <ul className={s.navigation}>
      {
        renderListLinks
      }
    </ul>
  );
})
