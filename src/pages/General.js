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
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import d20 from "../assets/d20.gif";
import d6 from "../assets/d6.gif";
import coin from "../assets/coin.gif";
import { Slide } from '@mui/material';



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

    const [alignment, setAlignment] = React.useState('general');

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
          <Avatar variant ="rounded" alt="Logo" src={logo} sx={{width: 54, height: 54, pl:8}}/>
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
            <Typography variant="h3"  component="h3" sx={{mt:4, fontWeight:"bold"}}>General Commands</Typography>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant="subtitle1" component="h4" color="dimgray" xs={{fontWeight:"light"}}>All general commands will with their own "/" header.</Typography>
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
                <Typography sx={{fontWeight: "bold"}}>/roll d20</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                    <Typography sx={{pb: 1.5}}>This will roll a dice numbered 1 - 20.</Typography>
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
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(d20)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description">
                        <DialogContent>
                          <img src={gif} alt="d20"/>
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
                <Typography sx={{fontWeight: "bold"}}>/roll d6</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:1.5}}>
                  This will roll a dice numbered 1 - 6.
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
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(d6)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description">
                        <DialogContent>
                          <img src={gif} alt="d6"/>
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
                <Typography sx={{fontWeight: "bold"}}>/roll coin</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:1.5}}>
                  This will flip a coin.
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
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(coin)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description">
                        <DialogContent>
                          <img src={gif} alt="coin"/>
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
