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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/common/MDBox";

// Settings page components
import BaseLayout from "layouts/account/components/BaseLayout";
import Sidenav from "layouts/account/settings/components/Sidenav";
import Header from "layouts/account/settings/components/Header";
import BasicInfo from "layouts/account/settings/components/BasicInfo";
import ChangePassword from "layouts/account/settings/components/ChangePassword";
import Authentication from "layouts/account/settings/components/Authentication";
import Accounts from "layouts/account/settings/components/Accounts";
import Notifications from "layouts/account/settings/components/Notifications";
import Sessions from "layouts/account/settings/components/Sessions";
import DeleteAccount from "layouts/account/settings/components/DeleteAccount";

function Settings(): JSX.Element {
  return (
    <BaseLayout>
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <BasicInfo />
                </Grid>
                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
                <Grid item xs={12}>
                  <Authentication />
                </Grid>
                <Grid item xs={12}>
                  <Accounts />
                </Grid>
                <Grid item xs={12}>
                  <Notifications />
                </Grid>
                <Grid item xs={12}>
                  <Sessions />
                </Grid>
                <Grid item xs={12}>
                  <DeleteAccount />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default Settings;
