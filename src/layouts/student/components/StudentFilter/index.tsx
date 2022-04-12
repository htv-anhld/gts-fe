import { Checkbox, Icon, IconButton, InputBase } from '@mui/material';
import MDBox from 'components/common/MDBox';
import MDTypography from 'components/common/MDTypography';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface IStudentFilterProps {}

export default function StudentFilter(props: IStudentFilterProps) {
    const { pathname } = useLocation();
    return (
        <MDBox display="flex" justifyContent="space-between" mb={1}>
            <MDBox display="flex" flexDirection="column" justifyContent="space-between" height={120}>
                <MDBox
                    sx={{
                        p: '2px 4px 2px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 300,
                        backgroundColor: '#fff',
                        borderRadius: 1,
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: 14 }}
                        placeholder="児童名検索"
                        inputProps={{ 'aria-label': '児童名検索' }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <Icon>search_icon</Icon>
                    </IconButton>
                </MDBox>
                <MDBox
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: 1,
                        mt: 'auto',
                    }}
                >
                    <Link to={`${pathname}/add`}>
                        <MDBox
                            sx={{
                                p: '7px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 14,
                                borderRadius: 1,
                                backgroundColor: '#fff',
                                fontWeight: 500,
                            }}
                        >
                            <Icon
                                sx={{
                                    mr: 1,
                                }}
                            >
                                edit_icon
                            </Icon>
                            新規登録
                        </MDBox>
                    </Link>
                </MDBox>
            </MDBox>
            <MDBox width={800} marginTop="auto">
                <MDBox mt="auto" display="flex" sx={{ mt: 'auto', pr: 2 }} justifyContent="space-between">
                    <MDBox display="flex" alignItems="center">
                        <Checkbox sx={{ fontSize: 8 }} />
                        <MDTypography variant="p" sx={{ fontSize: 14, ml: 1 }}>
                            受給者証有効期限が１か月以内の児童のみ表示
                        </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center">
                        <Checkbox sx={{ fontSize: 14 }} defaultChecked />
                        <MDTypography variant="p" sx={{ fontSize: 14, ml: 1 }}>
                            契約中の児童のみ表示
                        </MDTypography>
                    </MDBox>
                    <MDBox display="flex" justifyContent="center" alignItems="center">
                        <MDTypography type="span" sx={{ fontSize: 14, ml: 1, color: 'red' }}>
                            [件数]
                        </MDTypography>
                        <MDTypography variant="p" sx={{ fontSize: 14, ml: 1 }}>
                            54示
                        </MDTypography>
                    </MDBox>
                </MDBox>
            </MDBox>
        </MDBox>
    );
}
