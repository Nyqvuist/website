import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Button } from '@mui/material';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Grid } from '@mui/material';
import "../styles/Main.css";
import { Link } from '@mui/material';
import newlogo from "../assets/newlogotrans.png";
import { useScrollTrigger } from '@mui/material';
import { Zoom } from '@mui/material';
import { Fab } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from '@mui/material';


function ScrollTop(props) {
  const {children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };


  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}


export default function DenseAppBar(props) {

  
  const [state, setState] = useState(false)

  
  const theme = createTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (e) => {
    setState(open)
  }
  return (
    <>
    <Grid container
    sx={{backgroundColor: "#eedbc3", mb: 5}}>
     <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
        <Grid item>
          <Typography variant="h4" component="h3" sx={{fontWeight:"bold", textAlign: 'center', pt:"1rem", pb:"1rem"}}>All Your Gaming Needs In One Bot.</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="subtitle1" component="h4" color="dimgray" xs={{fontWeight:"light"}}>The Only Bot You'll Need.</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{textTransform: "none", width:100, mt:"1rem", mb:3}}>
            <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
          </Button>
        </Grid>
      </Grid>
    </Grid>
    <Container maxWidth="xl">
    <Grid
      container
      direction="rows"
      columns={{xs:4, sm:8, md:12}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my: matches ? 5 : 0}}
      >
      <Grid item xs={4}>
        <Typography varint="h3" component="h2" color="primary" sx={{fontWeight:"bold", fontSize: 20, textAlign:"center"}}>What Is The Hashashin Bot?</Typography>
        <Typography varint="subtitle1" component="h3" color="secondary" sx={{textAlign:"center"}} >The Hashashin Bot is a gaming bot for gamers that will keep growing as more games get released.
          The main purpose for this bot is to provide quick searches and commands for users to pull up relevant information on steam games. The bot
           will eventually grow to provide commands for more specific games.</Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
    </Grid>
    <Grid
      container
      direction="rows"
      columns={{xs:4, sm:8, md:12}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my: matches ? 5 : 0}}
      >
      <Grid item xs={4}>

      </Grid>
      <Grid item xs={4}>
        <Typography varint="h3" component="h2" color="primary" sx={{fontWeight:"bold", fontSize: 20, textAlign:"center"}}>Whats Next For Hashashin?</Typography>
        <Typography varint="subtitle1" component="h3" color="secondary" sx={{textAlign:"center"}} >The long term goals for Hashashin is to start creating for specific commands for gamers
            For example, Lost Ark a newly released MMO is on the list for creating an abundance of commands for users. Eventually
            there will be enough commands to accomodate most popular and highly played games.</Typography>
      </Grid>
    </Grid>
    </Container>
    <ScrollTop {...props}>
      <Fab size="medium" color="primary" variant="extended" sx={{position:"fixed", bottom:16, right: 16, textTransform:"none", width: 80}}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
      </Fab>
    </ScrollTop>
    </>
  );
}
