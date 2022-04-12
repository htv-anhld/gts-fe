/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, JSXElementConstructor, Key, ReactElement } from 'react';

// react-router components
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Dashboard 2 PRO React TS exampless
import Sidenav from 'components/Sidenav';
import Configurator from 'components/Configurator';

// Material Dashboard 2 PRO React TS themes
import theme from 'assets/theme';

// Material Dashboard 2 PRO React TS Dark Mode themes
import themeDark from 'assets/theme-dark';

// Material Dashboard 2 PRO React TS routes
import routes from 'routes';

// Material Dashboard 2 PRO React TS contexts
import { useMaterialUIController, setMiniSidenav } from 'context';

// Images
import brandWhite from 'assets/images/logo-ct.png';
import brandDark from 'assets/images/logo-ct-dark.png';
import StudentLayout from 'layouts/student';
import Login from 'layouts/login';

export default function App() {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, layout, sidenavColor, transparentSidenav, whiteSidenav, darkMode } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const { pathname } = useLocation();

    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(dispatch, false);
            setOnMouseEnter(true);
        }
    };

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(dispatch, true);
            setOnMouseEnter(false);
        }
    };

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutes = (allRoutes: any[]): any =>
        allRoutes.map(
            (route: {
                collapse: any;
                route: string;
                component: ReactElement<any, string | JSXElementConstructor<any>>;
                key: Key;
            }) => {
                if (route.collapse) {
                    return getRoutes(route.collapse);
                }

                if (route.route) {
                    return <Route path={route.route} element={route.component} key={route.key} />;
                }

                return null;
            },
        );

    return (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
            <CssBaseline />
            {layout === 'dashboard' && (
                <>
                    <Sidenav
                        color={sidenavColor}
                        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                        brandName="Material Dashboard PRO"
                        routes={routes}
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    />
                    <Configurator />
                </>
            )}
            {layout === 'vr' && <Configurator />}
            <Routes>
                {getRoutes(routes)}
                <Route path="*" element={<Navigate to="/dashboards/" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/students/*" element={<StudentLayout />} />
            </Routes>
        </ThemeProvider>
    );
}
