import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, ListItemText, ListSubheader, useScrollTrigger } from '@mui/material';
import { Button } from '@mui/material';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Grid } from '@mui/material';
import "../styles/Main.css";
import { Link } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import { Skeleton } from '@mui/material';
import testlogo from "../assets/newlogotest.png"


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

    <Grid 
        container 
        direction="column"
        columns={{xs:4, sm:8, md:12}}
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <Typography variant="h4"  component="h4" color="secondary" sx={{mt:"2rem", fontWeight:"bold", textAlign: 'center', mb:"2.5rem"}}>Steam Commands</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h4" color="secondary" sx={{fontWeight:"light", textAlign:'center'}}>
            Steam commands will quickly post information, player counts
            and recent updates of all steam games.
          </Typography>
        </Grid>
        <Typography variant="subtitle2" component="h4" color="primary" sx={{fontWeight:"light", mt:"2.5rem", pb:"0.5rem", pb: 3}}>All steam commands will start with /steam.</Typography>
        <Grid item sx={{pb: '0.5rem'}}>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>search</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                    <Typography sx={{pb: "0.5rem"}}>Will post an embed of requested game with game name, details, developers, price
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
                <Typography sx={{fontWeight: "bold"}}>specials</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
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
        <Grid item sx={{pb: '0.5rem'}}>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>random</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
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
        <Grid item sx={{pb: '0.5rem'}}>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>count</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
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
        <Grid item sx={{pb: '0.5rem'}}>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>update</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
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
            <Button variant="outlined" color="primary" href="/mtg" sx={{textTransform:"none", width: 90}}>MTG</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="/pokemon" sx={{textTransform:"none", width: 90}}>Pokemon</Button>
          </Grid>
          <Grid item>
          <Button variant="outlined" color="primary" href="/general" sx={{textTransform:"none", width: 90}}>General</Button>
          </Grid>
        </Grid>
    </Grid>
  );
}
