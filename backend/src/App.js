import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import routes from './routes';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => (
              <Component
                {...props}
                {...rest}
              />
            )}
          />
        ))}
        <Route
          render={props => <NoMatch {...props} />}
        />
      </Switch>
    </Layout>
  )
}

export default App;