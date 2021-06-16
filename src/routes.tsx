import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, Account } from './Pages';
import AuthContext from './Context/AuthContext';

const PrivateRoute = ({ component, ...rest }: any): any => {
  const { signed } = useContext(AuthContext);

  const routerComponent = (props: any): any =>
    signed ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={routerComponent} />;
};

const MainRoute = ({ component, ...rest }: any): any => {
  const { signed } = useContext(AuthContext);

  const routerComponent = (props: any): any =>
    signed ? (
      <Redirect
        to={{ pathname: '/account', state: { from: props.location } }}
      />
    ) : (
      React.createElement(component, props)
    );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={routerComponent} />;
};
const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainRoute exact path="/" component={Home} />
        <PrivateRoute path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesContainer;
