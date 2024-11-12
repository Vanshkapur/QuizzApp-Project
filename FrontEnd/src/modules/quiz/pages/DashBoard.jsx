import { Container, Grid } from "@mui/material"
import { Header } from "../../../shared/components/Header";
import { Menu } from "../../../shared/components/Menu";
import { Major } from "../../../shared/components/Major";


export const DashBoard = () => {
    return (
        <Container>
            <Header />

            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={4}>
                    <Menu/>
                </Grid>
                <Grid item xs={8}>
                    <Major/>
                </Grid>

            </Grid>

        </Container>
    )
}