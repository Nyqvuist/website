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
import steam_img from "../assets/stam_img.png";
import Footer from "./footer";
import undraw1 from "../assets/undrawsearch.svg";
import undraw2 from "../assets/undrawre.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import testlogo from "../assets/newlogotest.png";
import EmailIcon from '@mui/icons-material/Email';


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

  const matches = useMediaQuery('(max-width:765px)');
  const matches2 = useMediaQuery('(max-width:500px)');
  const matches3 = useMediaQuery('(max-width:485px)');

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
    <Container maxWidth="lg">
    <Grid
      container
      direction="rows"
      columns={{xs:4, sm:8, md:12}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my: 3}}
      spacing={2}
      >
      {matches ? (
        <Grid>
        <Typography variant="h3" component="h2" color="primary" sx={{fontWeight:"bold", fontSize: 20, textAlign:"center"}}>What Is The Hashashin Bot?</Typography>
        <Typography variant="subtitle1" component="h3" color="secondary" sx={{textAlign:"center"}}>The Hashashin Bot is a gaming bot for gamers that will keep growing as more games get released.
          The main purpose for this bot is to provide quick searches and commands for users to pull up relevant information on steam games. The bot
           will eventually grow to provide commands for more specific games.</Typography>
      </Grid>
      ) : (
        <Grid item xs={4}>
        <Typography variant="h3" component="h2" color="primary" sx={{fontWeight:"bold", fontSize: 20, textAlign:"center"}}>What Is The Hashashin Bot?</Typography>
        <Typography variant="subtitle1" component="h3" color="secondary">The Hashashin Bot is a gaming bot for gamers that will keep growing as more games get released.
          The main purpose for this bot is to provide quick searches and commands for users to pull up relevant information on steam games. The bot
           will eventually grow to provide commands for more specific games.</Typography>
      </Grid>
      )}
      <Grid item sx={{mt: 3, textAlign:"center"}} >
        <img src={undraw1} alt="img" width={350} height={300}/>
      </Grid>
      </Grid>
    {matches ? (
            <Grid
            container
            direction="rows"
            columns={{xs:4, sm:8, md:12}}
            justifyContent="space-evenly"
            alignItems="center"
            sx={{my: 3}}
            spacing={2}
            >
            <Grid item>
              <Typography variant="h3" component="h2" color="primary" sx={{fontWeight:"bold", fontSize: 20, textAlign:"center"}}>Whats Next For Hashashin?</Typography>
              <Typography variant="subtitle1" component="h3" color="secondary" sx={{textAlign:"center"}} >The long term goals for Hashashin is to start creating for specific commands for gamers
                  For example, Lost Ark a newly released MMO is on the list for creating an abundance of commands for users. Eventually
                  there will be enough commands to accomodate most popular and highly played games.</Typography>
            </Grid>
            <Grid item sx={{mt: 3, textAlign:"center"}} >
            <img src={undraw2} alt="img" width={350} height={300}/>
            </Grid>
          </Grid>
    ) : (
      <Grid
      container
      direction="rows"
      columns={{xs:4, sm:8, md:12}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my: 3}}
      spacing={2}
      >
      <Grid item >
      <img src={undraw2} alt="img" width={350} height={300}/>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h3" component="h2" color="primary" sx={{fontWeight:"bold", fontSize: 20, textAlign:"center"}}>Whats Next For Hashashin?</Typography>
        <Typography variant="subtitle1" component="h3" color="secondary">The long term goals for Hashashin is to start creating specific commands for gamers.
            For example, Lost Ark a newly released MMO is on the list for creating an abundance of commands for users. Eventually
            there will be enough commands to accomodate most popular and highly played games.</Typography>
      </Grid>
    </Grid>
    )
    }
    </Container>
    {matches ? (
      <></>
    ) : (
      <ScrollTop {...props}>
      <Fab size="medium" color="primary" variant="extended" sx={{position:"fixed", bottom:16, right: 16, textTransform:"none", width: 80}}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
      </Fab>
    </ScrollTop>
    )}
    {/* footer below */}
    <Grid container
    sx={{backgroundColor: "#eedbc3"}}>
     <Grid 
      container
      direction="row"
      justifyContent="center"
      sx={{py:3}}
      className="part1">
        <Grid item >
          <Avatar variant ="rounded" alt="Logo" src={testlogo} sx={{width: 90, height: 105}}/> 
        </Grid>
        <Grid item sx={{pr: matches2 ? 0 : 15}}>
        <IconButton
            color="inherit"
        >
            <Link href="https://github.com/Nyqvuist/Hashashin"><GitHubIcon/></Link>
        </IconButton><IconButton color="inherit"><Link href="mailto:hashashinbot@gmail.com"><EmailIcon/></Link></IconButton>
        <Typography>
          A Bot For Gamers
        </Typography>
        <Typography variant="caption" sx={{fontWeight:"bold", mb:10}}>
                Hashashin Bot &reg; {new Date().getFullYear()}
        </Typography>
        </Grid>
        </Grid>
        {/* contain below */}
        <Grid container
        >
        <Grid item sx={{px: matches2 ? 10 : 15}} xs={matches2 ? 4 : 0}>
          <Typography variant='h6' sx={{fontWeight:"bold", fontSize:15, textAlign:"left"}}>About</Typography>
          <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">Invite</Typography>
          <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">TBD</Typography>
          <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">TBD</Typography>
        </Grid>
        <Grid item xs={matches2 ? 4 : 0} >
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
        <Grid item>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}

{/* xs, variant, my */}