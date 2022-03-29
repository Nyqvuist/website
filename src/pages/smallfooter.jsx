import { Container, Link } from '@mui/material';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import testlogo from "../assets/newlogotest.png";
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Icon } from '@mui/material';
import React, { useState }  from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Box } from '@mui/material';
import { textAlign } from '@mui/system';
import undraw1 from "../assets/undrawsearch.svg";
import undraw2 from "../assets/undrawre.svg";
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function GitIcon() {
    return(
        <Box>
            <Grid container
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            spacing={8.5}
            >
                <Grid item>
                <IconButton color="primary">
                    <Link href="https://github.com/Nyqvuist/Hashashin"><GitHubIcon/></Link>
                </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="primary">
                        <Link href="/"><HomeRoundedIcon/></Link>
                    </IconButton>
                </Grid>
                <Grid item>
                <IconButton color="inherit">
                    <Link href="mailto:hashashinbot@gmail.com"><EmailIcon/></Link></IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GitIcon;
