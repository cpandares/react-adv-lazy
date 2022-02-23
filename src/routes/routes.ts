/* import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../01-layload/pages"; */

import { lazy, LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element;

interface Route {
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent  /* () => JSX.Element */;
    name:string;
    childre?: Route[]
}


const Lazy1 = lazy(()=>import(/* webpackChunkName: "LazyLoad1" */'../01-layload/pages/LazyLoad1') );
const Lazy2 = lazy(()=>import(/* webpackChunkName: "LazyLoad2" */'../01-layload/pages/LazyLoad2') );
const Lazy3 = lazy(()=>import(/* webpackChunkName: "LazyLoad3" */'../01-layload/pages/LazyLoad3') );

export const routes:Route[] = [
    {
        path:'/lazy1',
        Component: Lazy1,
        name: 'LazyPage1'
    },
    {
        path:'/lazy2',
        Component: Lazy2,
        name: 'LazyPage2'
    },
    {
        path:'/lazy3',
        Component: Lazy3,
        name: 'LazyPage3'
    },
]