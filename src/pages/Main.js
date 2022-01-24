import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import logo from "../assets/logotrans.png"
import { Button } from '@mui/material';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Grid } from '@mui/material';
import "../styles/Main.css";
import { Link } from '@mui/material';



export default function DenseAppBar() {

  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (e) => {
    setState(open)
  }
  return (
    <Box sx = {{flexGrow: 1}}>
      <AppBar position="static" color = "default" sx={{height:350}} elevation={0}>
        <Toolbar sx={{mt:2}}>
        <Link href="/">
          <Avatar variant ="rounded" alt="Logo" src={logo} sx={{width: 64, height: 64, pl:8}}/>
        </Link>
          <Typography sx={{flexGrow:1, ml: 2, fontWeight:"bold", fontSize:20}}>
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
      <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{mt:10}}>
        <Grid item>
          <Typography variant="h4" component="h3" sx={{fontWeight:"bold"}}>All Your Gaming Needs In One Bot.</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="subtitle1" component="h4" color="dimgray" xs={{fontWeight:"light"}}>The Only Bot You'll Need.</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{textTransform: "none", width:100}}>
            <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
          </Button>
        </Grid>
      </Grid>
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
            <ListItemButton divider component="a" href="/steam">
              <ListItemText sx = {{textAlign: "center"}} primary="Steam Commands" />
            </ListItemButton>
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
    </Box>
  );
}
