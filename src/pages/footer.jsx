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


function Footer() {

    return(
        <AppBar position="static" color="secondary" elevation={0} sx={{pt:2}}>
        <Toolbar sx={{pb:3}}>
        {/* <Avatar variant ="rounded" alt="Logo" src={testlogo} sx={{width: 131, height: 160}}/> */}
          <Box textAlign={"center"}
          >
            <Grid container
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            spacing={8}>
                <Grid item>
                <Typography sx={{fontWeight:"bold", fontSize:20}}>
                    Hashashin
                    <Typography sx={{fontWeight:"bold", fontSize:14}}>
                    The Bot For Gamers
                    </Typography>
                    <Typography sx={{fontWeight:"bold", fontSize:14, pt:1}}>
                        <a className="email" href="mailto:hashashinbot@gmail.com">hashashinbot@gmail.com</a>
                    </Typography>
                </Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h6' sx={{fontWeight:"bold", fontSize:15, textAlign:"left"}}>About</Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">Invite</Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">TBD</Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">TBD</Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h6' sx={{fontWeight:"bold", fontSize:15, textAlign:"left"}}>Commands</Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                        <Link href="/steam" color="inherit">Steam
                        </Link>
                    </Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                        <Link href="/general" color="inherit">General
                        </Link>
                    </Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                        <Link href="/pokemon" color="inherit">Pokemon
                        </Link>
                    </Typography>
                    <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                        <Link href="/mtg" color="inherit">MTG
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
          </Box>
        </Toolbar>
        <Box>
        <IconButton
            color="inherit"
        >
            <Link href="https://github.com/Nyqvuist/Hashashin"><GitHubIcon/></Link>
        </IconButton>
        <Typography variant="caption" sx={{fontWeight:"bold", mb:3}}>
                Hashashin Bot &reg; {new Date().getFullYear()}
        </Typography>
        </Box>
      </AppBar>
    )
}

export default Footer;