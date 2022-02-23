import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { LazyLoad1, LazyLoad2 } from "../pages";
import LazyLoad3 from '../pages/LazyLoad3';


const Navigation = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <Link to={ `${ url }/lazy1` }>Lazy 1</Link>
                    
                </li>
                <li>
                    <Link to={ `${ url }/lazy2` }>Lazy 2</Link>
                </li>
                <li>
                    <Link to={ `${ url }/lazy3` }>Lazy 3</Link>
                </li>
            </ul>

            <Switch>
                <Route path={ `${ path }/lazy1` }>
                    <LazyLoad1 />
                </Route>
                <Route path={ `${ path }/lazy2` }>
                    <LazyLoad2 />
                </Route>
                <Route path={ `${ path }/lazy3` }>
                    <LazyLoad3 />
                </Route>
                <Redirect  to = { `${ path }/lazy1` } />
            </Switch>
            
        </div>
    );
};

export default Navigation;