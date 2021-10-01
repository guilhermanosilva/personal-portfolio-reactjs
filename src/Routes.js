import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateX(-250px)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translateX(-250px)', position: 'absolute' },
  });

  return transitions((props, item) => (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <animated.div style={props}>
        <Switch location={item}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </animated.div>
    </main>
  ));
}
