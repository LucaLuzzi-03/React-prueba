import { lazy, LazyExoticComponent } from 'react';
// import { LazyLayout } from '../01-lazyload/layout/LazyLayout';
import { NoLazy } from '../01-lazyload/pages/NoLazy';


    type JSXComponent = () => JSX.Element;

    interface Route {
        to: string,
        path: string,
        Component: LazyExoticComponent<JSXComponent> | JSXComponent,
        name: string
    }

    const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));
    const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
    const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

]