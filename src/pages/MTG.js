import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import "../styles/Main.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import { Slide } from '@mui/material';
import list from "../assets/list.gif";
import rulings from "../assets/rulings.gif";
import { Skeleton } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Accordion } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import card from "../assets/card.gif";
import { Chip } from '@mui/material';
import Footer from "./footer";



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
            <Typography variant="h4"  component="h4" color="secondary" sx={{fontWeight:"bold", textAlign: 'center', my:8}}>MTG Commands</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h4" color="secondary" sx={{fontWeight:"light", textAlign:"center"}}>
            MTG commands will quickly post image of cards, rulings and a list of cards.
          </Typography>
        </Grid>
        <Grid item sx={{pb: '0.5rem'}}>
          <Typography variant="subtitle2" component="h4" color="primary" sx={{fontWeight:"light", mt:"2rem", pb:3, textAlign:"center"}}>All MTG commands will start with /mtg.</Typography>
            <Accordion sx={{backgroundColor: '#eedbc3'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontWeight: "bold"}}>card</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                    <Typography sx={{pb: "0.5rem"}}>Will pull up the image of the searched card. </Typography>
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
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(card)} sx={{textTransform:"none"}}/>
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
                          <img src={gif} width="100" alt="/search"/>
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
                <Typography sx={{fontWeight: "bold"}}>list</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
                  Will pull up a list of all similar cards and set of searched term.
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
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(list)} sx={{textTransform:"none"}}/>
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
                <Typography sx={{fontWeight: "bold"}}>rulings</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{width:'60vw'}}>
                <Typography sx={{pb: "0.5rem"}}>
                  Will pull up all the official rulings for the searched card.
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
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(rulings)} sx={{textTransform:"none"}}/>
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
        <Skeleton sx={{width:"18rem", mt:"4rem", backgroundColor:"#eedbc3"}}/>
        <Button size="medium" color="primary" variant="contained" sx={{position:"fixed", bottom:16, right: 16, textTransform:"none", width: 80}}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
        </Button>
        <Typography color="secondary" sx={{textAlign:"center", pt:"1.5rem", pb:3}}>More Commands</Typography>
        <Grid
        container
        direction="row"
        spacing={2.5}
        justifyContent="center"
        alignItems="flex-start"
        sx={{pt:"1.5rem", textAlign:"center", mb:"4rem"}}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/steam" sx={{textTransform:"none", width: 90}}>Steam</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="/pokemon" sx={{textTransform:"none", width: 90}}>Pokemon</Button>
          </Grid>
          <Grid item>
          <Button variant="outlined" color="primary" href="/general" sx={{textTransform:"none", width: 90}}>General</Button>
          </Grid>
        </Grid>
        <Footer/>
    </Grid>
  );
}