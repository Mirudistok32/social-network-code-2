import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PATH } from '../../routers/routers';
import s from './Content.module.scss';
import { Friends } from './Pages/Friends/Friends';
import { Messages } from './Pages/Messages/Messages';
import { Profile } from './Pages/Profile/Profile';
import { SearchUsers } from './Pages/SearchUsers/SearchUsers';

type PropsType = {

}

export const Content: React.FC<PropsType> = React.memo((props) => {

  const { } = props

  return (
    <div className={s.content}>
      <Switch>
        <Route exact path={PATH.empty} render={() => <Redirect to={PATH.profile} />} />
        <Route exaxt path={PATH.profile} render={() => <Profile />} />
        <Route exaxt path={PATH.messages} render={() => <Messages />} />
        <Route exaxt path={PATH.friends} render={() => <Friends />} />
        <Route exaxt path={PATH.search} render={() => <SearchUsers />} />

        <Route render={() => <Redirect to={PATH.empty} />} />
      </Switch>
    </div>
  );
})
