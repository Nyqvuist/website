import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, ListItemText, ListSubheader, useScrollTrigger } from '@mui/material';
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
import search from "../assets/search.gif";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { Fab } from '@mui/material';
import random from "../assets/random.gif";
import count from "../assets/count.gif";
import update from "../assets/update.gif";
import specials from "../assets/specials.gif";
import newlogo from "../assets/newlogotrans.png";


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

    const [alignment, setAlignment] = React.useState('steam');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (e) => {
    setState(open)
  }
  return (
    <Box sx = {{flexGrow: 1}}>
      <AppBar position="static" color = "default" elevation={0}>
        <Toolbar sx={{py:0.5}}>
        <Link href="/">
          <Avatar variant ="rounded" alt="Logo" src={newlogo} sx={{width: 54, height: 54, pl:8}}/>
        </Link>
          <Typography sx={{flexGrow:1, ml: 2, fontWeight:"bold", fontSize:20, mr:1}}>
            Hashashin
          </Typography>
          <Typography sx={{mr:2}}>Commands Menu</Typography>
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
          <ListSubheader sx = {{textAlign: "center"}}> Hashashin Commands
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
        sx={{px:20}}
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <Typography variant="h3"  component="h3" sx={{mt:4, fontWeight:"bold"}}>Steam Commands</Typography>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant="subtitle1" component="h4" color="dimgray" xs={{fontWeight:"light"}}>All steam commands will start with /steam.</Typography>
        </Grid>
        <Grid item>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                sx={{mb:1, mt:1}}
                size="small"
                >
                <ToggleButton component="a" href="/steam" sx={{textTransform: "none"}} value="steam">Steam</ToggleButton>
                <ToggleButton component="a" href="/mtg" sx={{textTransform: "none"}} value="mtg">MTG</ToggleButton>
                <ToggleButton component="a" href="/pokemon" sx={{textTransform: "none"}} value="pokemon">Pokémon</ToggleButton>
                <ToggleButton component="a" href="/general" sx={{textTransform: "none"}} value="general">General</ToggleButton>
            </ToggleButtonGroup>
        </Grid>
        <Grid item>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>search</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                    <Typography sx={{pb: 1.5}}>Will post an embed of requested game with game name, details, developers, price
                    reviews and link to steam page. </Typography>
                    <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: game" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(search)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description">
                        <DialogContent>
                          <img src={gif} alt="/search"/>
                        </DialogContent>
                    </Dialog>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>specials</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:1.5}}>
                  Will pull up 5 games in the "Specials" category of Steam.
                </Typography>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: game" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(specials)} sx={{textTransform:"none"}}/>
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
        <Grid item>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>random</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:1.5}}>
                  Will post a random game based on the genre and category a user gives.
                </Typography>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: game" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(random)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}>
                        <DialogContent>
                          <img src={gif} alt="/random"/>
                        </DialogContent>
                    </Dialog>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>count</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:1.5}}>
                    Will show the player count of the game searched.
                </Typography>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: game" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(count)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description">
                        <DialogContent>
                          <img src={gif} alt="count"/>
                        </DialogContent>
                    </Dialog>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Grid item>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>update</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:1.5}}>
                    Will give you the latest steam community update for the given game. 
                </Typography>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: game" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(update)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                      maxWidth={'md'}>
                        <DialogContent>
                          <img src={gif} alt="update"/>
                        </DialogContent>
                    </Dialog>
                </AccordionDetails>
            </Accordion>
        </Grid>
        <Fab size="medium" color="primary" variant="extended" sx={{position:"fixed", bottom:16, right: 16, textTransform:"none", width: 80}}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
        </Fab>
    </Grid>
    </Box>
  );
}
