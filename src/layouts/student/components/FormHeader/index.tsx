import { Card, Icon, IconButton, InputBase, ThemedProps } from '@mui/material';
import MDBox from 'components/common/MDBox';
import MDTypography from 'components/common/MDTypography';
import { Theme } from '@mui/material/styles';
import * as React from 'react';

export interface IFormHeaderProps {}

export default function FormHeader(props: IFormHeaderProps) {
    const listTextTab: Array<string> = ['基本情報', '受給者証', 'きょうだい設定', '併給先', '通い先'];
    return (
        <MDBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <MDBox width={600} display="flex" alignItems="stretch">
                <MDBox
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: 1,
                        p: 'auto',
                    }}
                >
                    <Icon sx={{}}>arrow_left_icon</Icon>
                </MDBox>
                <MDBox sx={{ display: 'flex', alignItems: 'center', pr: 1, pl: 1 }}>
                    <MDTypography sx={{ fontSize: 14 }}>対象児童</MDTypography>
                    <MDBox
                        sx={{
                            p: '2px 4px 2px 6px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 300,
                            backgroundColor: '#fff',
                            borderRadius: 1,
                            ml: 2,
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
                </MDBox>
                <MDBox
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: 1,
                        p: 'auto',
                    }}
                >
                    <Icon sx={{}}>arrow_right_icon</Icon>
                </MDBox>
            </MDBox>
            <MDBox display="flex" mt={2}>
                {listTextTab.map((text: string) => (
                    <MDBox
                        sx={({ palette: { white } }: Theme) => ({
                            bgcolor: white.main,
                            mr: 2,
                            p: 1,
                            borderRadius: 2,
                        })}
                    >
                        <MDTypography
                            sx={({ typography: { size } }: Theme) => ({
                                fontSize: size.sm,
                            })}
                        >
                            {text}
                        </MDTypography>
                    </MDBox>
                ))}
            </MDBox>
        </MDBox>
    );
}
