/* import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../01-layload/pages"; */

import { lazy, LazyExoticComponent } from "react"
import NoLazy from "../01-layload/pages/NoLazy";
/* import LazyLayout from '../01-layload/layout/LazyLayout';
 */
type JSXComponent = () => JSX.Element;

interface Route {
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent  /* () => JSX.Element */;
    name:string;
    childre?: Route[]
}


 //const Lazy1 = lazy(()=>import(/* webpackChunkName: "LazyLoad1" */'../01-layload/pages/LazyLoad1') );
//const Lazy2 = lazy(()=>import(/* webpackChunkName: "LazyLoad2" */'../01-layload/pages/LazyLoad2') );
//const Lazy3 = lazy(()=>import(/* webpackChunkName: "LazyLoad3" */'../01-layload/pages/LazyLoad3') );

export const routes:Route[] = [
    {
        path:'/lazyLayout',
        Component:  lazy(()=>import(/* webpackChunkName: "LazyNested" */'../01-layload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    {
        path:'/noLazy',
        Component:  NoLazy,
        name: 'No Lazy'
    }
]