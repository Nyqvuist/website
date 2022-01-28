import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, ListItemText, ListSubheader } from '@mui/material';
import logo from "../assets/logotrans.png"
import { Button } from '@mui/material';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Grid } from '@mui/material';
import "../styles/Main.css";
import { Link } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Chip } from '@mui/material';
import { Fab } from '@mui/material';
import route from "../assets/route.gif";
import nature from "../assets/nature.gif";
import { Dialog } from '@mui/material';
import { Slide } from '@mui/material';
import { DialogContent } from '@mui/material';
import newlogo from "../assets/newlogotrans.png";
import { Skeleton } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function DenseAppBar() {

    const [open, setOpen] = React.useState(false);
    const [gif, setGif] = React.useState()

    const handleClickOpen = (gifs) => {
      setOpen(true);
      setGif(gifs);
      
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (e) => {
    setState(open)
  }
  return (
    <Box sx = {{flexGrow: 1}}>
      <AppBar position="static" color = "secondary" elevation={0}>
        <Toolbar sx={{py:0.5}}>
        <Link href="/">
          <Avatar variant ="rounded" alt="Logo" src={newlogo} sx={{width: 52, height: 64, pl:8}}/>
        </Link>
          <Typography sx={{flexGrow:1, ml: 2, fontWeight:"bold", fontSize:20, mr:1}}>
            Hashashin
          </Typography>
          <IconButton
            color="inherit"
            edge="start"
            aria-label='menu'
            onClick = {toggleDrawer(true)}
            sx={{pr:8}}
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    <Box>
      <Drawer
        anchor='right'
        open={state}
        onClose={toggleDrawer(false)}
        variant='temporary'
      >
        <List>
          <ListSubheader sx = {{textAlign: "center", fontWeight: "bold", fontSize: "1rem"}}> Hashashin Commands
            <ListItem button divider component="a" href="/general"> 
              <ListItemText sx = {{textAlign: "center"}} primary="General Commands" />
            </ListItem>
            <ListItem button divider component="a" href="/steam">
              <ListItemText sx = {{textAlign: "center"}} primary="Steam Commands" />
            </ListItem>
            <ListItem button divider component="a" href="/pokemon">
              <ListItemText sx = {{textAlign: "center"}} primary="Pokemon Commands"/>
            </ListItem>
            <ListItem button divider component="a" href="/mtg">
              <ListItemText sx = {{textAlign: "center"}} primary="MTG Commands"/>
            </ListItem>
          </ListSubheader>
        </List>
      </Drawer>
    </Box>
    <Grid 
        container 
        direction="column"
        columns={{xs:4, sm:8, md:12}}
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <Typography variant="h4"  component="h4" color="secondary" sx={{mt:"2rem", fontWeight:"bold", textAlign: 'center', mb:"2.5rem"}}>Pokemon Commands</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h4" color="secondary" sx={{fontWeight:"light", textAlign:'center'}}>
            Pokemon commands will quickly post nature stats, and pokemon routes for pokemons.
          </Typography>
        </Grid>
        <Grid item sx={{pb: '0.5rem'}}>
          <Typography variant="subtitle2" component="h4" color="primary" sx={{fontWeight:"light", mt:"2.5rem", pb:"0.5rem"}}>All pokemon commands will start with /pokemon.</Typography>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>route</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                    <Typography sx={{pb: "0.5rem"}}>Will show you all routes of a pokemon in the given version. </Typography>
                    <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: pokemon, version" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(route)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogContent sx={{color:'#eedbc3'}}>
                          <img src={gif} alt="/search"/>
                        </DialogContent>
                    </Dialog>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item sx={{pb: '0.5rem'}}>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>nature</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
                  Will give you nature information for a given pokemon.
                </Typography>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: card" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(nature)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}>
                        <DialogContent>
                          <img src={gif} alt="specials"/>
                        </DialogContent>
                    </Dialog>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Skeleton sx={{width:"18rem", mt:"4rem", backgroundColor:"#eedbc3"}}/>
        <Fab size="medium" color="primary" variant="extended" sx={{position:"fixed", bottom:16, right: 16, textTransform:"none", width: 80}}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
        </Fab>
        <Typography color="secondary" sx={{textAlign:"center", pt:"1.5rem"}}>More Commands</Typography>
        <Grid
        container
        direction="row"
        spacing={2.5}
        justifyContent="center"
        alignItems="flex-start"
        sx={{pt:"1.5rem", textAlign:"center", mb:"2rem"}}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/steam" sx={{textTransform:"none", width: 90}}>Steam</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="/general" sx={{textTransform:"none", width: 90}}>General</Button>
          </Grid>
          <Grid item>
          <Button variant="outlined" color="primary" href="/mtg" sx={{textTransform:"none", width: 90}}>MTG</Button>
          </Grid>
        </Grid>
    </Grid>
    </Box>
  );
}