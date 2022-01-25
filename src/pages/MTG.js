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


export default function DenseAppBar() {

    const [alignment, setAlignment] = React.useState('mtg');

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
            <ListItem button divider>
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
            <Typography variant="h3"  component="h3" sx={{mt:4, fontWeight:"bold"}}>MTG Commands</Typography>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant="subtitle1" component="h4" color="dimgray" xs={{fontWeight:"light"}}>All MTG commands will start with /mtg.</Typography>
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
                <ToggleButton component="a" href="/pokemon" sx={{textTransform: "none"}} value="pokemon">Pokemon</ToggleButton>
                <ToggleButton sx={{textTransform: "none"}} value="general">General</ToggleButton>
            </ToggleButtonGroup>
        </Grid>
        <Grid item>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>card</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                    <Typography sx={{pb: 0.5}}>Will pull up the image of the search card.</Typography>
                    <Chip label="Parameters: card" color="primary"/>
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
                <Typography sx={{fontWeight: "bold"}}>rulings</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:0.5}}>
                  Will pull up all the official rulings for the searched card.
                </Typography>
                <Chip label="Parameters: card" color="primary"/>
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
                <Typography sx={{fontWeight: "bold"}}>list</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{minWidth:870}}>
                <Typography sx={{pb:0.5}}>
                  Will pull up a list of all similar cards and set of searched term.
                </Typography>
                <Chip label="Parameters: card" color="primary"/>
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
