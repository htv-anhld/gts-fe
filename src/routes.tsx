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

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
import Dashboards from 'layouts/dashboards';
import NewUser from 'layouts/pages/users/new-user';
import Settings from 'layouts/account/settings';
import DataTables from 'layouts/applications/data-tables';
import Calendar from 'layouts/applications/calendar';
import SignUpCover from 'layouts/authentication/sign-up/cover';
import ResetCover from 'layouts/authentication/reset-password/cover';
import StudentLayout from 'layouts/student';

// @mui icons
import Icon from '@mui/material/Icon';
import StudentTable from 'layouts/student/components/StudentTable';

const routes = [
    {
        type: 'collapse',
        name: 'Dashboards',
        key: 'dashboards',
        icon: <Icon fontSize="medium">dashboard</Icon>,
        route: '/dashboards',
        component: <Dashboards />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Pages',
        key: 'pages',
        icon: <Icon fontSize="medium">image</Icon>,
        collapse: [
            {
                name: 'Data Tables',
                key: 'data-tables',
                route: '/applications/data-tables',
                component: <DataTables />,
            },
            {
                name: 'Calendar',
                key: 'calendar',
                route: '/applications/calendar',
                component: <Calendar />,
            },
            {
                name: 'Users',
                key: 'users',
                route: '/users/new-user',
                component: <NewUser />,
            },
            { name: 'Settings', key: 'settings', route: '/account/settings', component: <Settings /> },
        ],
    },
    {
        type: 'collapse',
        name: 'Authentication',
        key: 'authentication',
        icon: <Icon fontSize="medium">content_paste</Icon>,
        collapse: [
            {
                name: 'Sign Up',
                key: 'sign-up',
                collapse: [
                    {
                        name: 'Cover',
                        key: 'cover',
                        route: '/authentication/sign-up/cover',
                        component: <SignUpCover />,
                    },
                ],
            },
            {
                name: 'Reset Password',
                key: 'reset-password',
                collapse: [
                    {
                        name: 'Cover',
                        key: 'cover',
                        route: '/authentication/reset-password/cover',
                        component: <ResetCover />,
                    },
                ],
            },
        ],
    },
    {
      type: 'collapse',
      name: 'Students',
      key: 'students',
      route: '/students',
      icon: <Icon fontSize="medium">people_icon</Icon>,
      component: <StudentLayout />,
      noCollapse: true,
  },
];

export default routes;
