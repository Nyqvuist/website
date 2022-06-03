import React, { useState }  from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { Link } from '@mui/material';
import testlogo from "../assets/newlogotest.png"
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListSubheader } from '@mui/material';

function Navbar() {

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (e) => {
        setState(open)
      }

    return(
        <>
        <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar sx={{py:0.5}}>
        <Link href="/">
            <Avatar variant ="rounded" alt="Logo" src={testlogo} sx={{width: 52, height: 64}}/>
        </Link>
          <Typography sx={{flexGrow:1, ml: 2, fontWeight:"bold", fontSize:20, mr:1}}>
            Hashashin
          </Typography>
          <IconButton
            color="inherit"
            edge="start"
            aria-label='menu'
            onClick = {toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
            <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
            variant='temporary'
          >
            <List>
              <ListSubheader sx = {{textAlign: "center", fontWeight: "bold", fontSize: "1rem"}}> Hashashin Commands
                <ListItem button divider component="a" href="/commands">
                  <ListItemText sx = {{textAlign: "center"}} primary="All Commands" />
                </ListItem>
              </ListSubheader>
            </List>
          </Drawer>
          </>
    )
}

export default Navbar;