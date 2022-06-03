import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import "../styles/Main.css";
import { Chip } from '@mui/material';
import search from "../assets/search.gif";
import count from "../assets/count.gif";
import update from "../assets/update.gif";
import Footer from "./footer";
import { Backdrop } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Divider } from '@mui/material';
import route from "../assets/route.gif";
import quiz from "../assets/quiz.gif";

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

  return (

    <Grid 
        container 
        direction="column"
        columns={{xs:4, sm:8, md:12}}
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <Typography variant="h4"  component="h4" color="secondary" sx={{fontWeight:"bold", textAlign: 'center', my:8}}>All Commands</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h4" color="secondary" sx={{fontWeight:"light", textAlign:'center'}}>
            All current Hashashin Bot commands.
          </Typography>
        </Grid>
        <Grid item >
            <List sx={{py:12}}  >
              <ListItem alignItems={'center'}>
                <Grid
                  container
                  spacing={1.5}
                  direction='column'
                  justifyContent="flex-start"
                  alignItems="baseline"
                 >
                  <Typography sx={{fontWeight: "bold", color: 'white'}}>search</Typography>
                  <Typography sx={{pb: "0.5rem", color: 'white'}}>Will post an embed of requested game with game name, details, developers, price
                    reviews and link to steam page. 
                  </Typography>
                </Grid>
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
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                    >
                      <img src={gif} alt="/random"/>
                    </Backdrop>
              </ListItem>
              <Divider/>
              <ListItem>
                <Grid
                  container
                  spacing={1.5}
                  direction='column'
                  justifyContent="flex-start"
                  alignItems="baseline"
                  sx={{pt:2}}
                >
                  <Typography sx={{fontWeight: "bold", color: 'white'}}>count</Typography>
                  <Typography sx={{pb: "0.5rem", color: 'white'}}>
                      Will show the player count of the game searched.
                  </Typography>
                </Grid>
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
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                    >
                      <img src={gif} alt="/random"/>
                    </Backdrop>
              </ListItem>
              <Divider/>
              <ListItem>
              <Grid
                  container
                  spacing={1.5}
                  direction='column'
                  justifyContent="flex-start"
                  alignItems="baseline"
                  sx={{pt:2}}
                >
                <Typography sx={{fontWeight: "bold", color: 'white'}}>update</Typography>
                <Typography sx={{pb: "0.5rem", color: 'white'}}>
                    Will give you the latest steam community update for the given game. 
                </Typography>
              </Grid>
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
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                    >
                      <img src={gif} alt="/random"/>
                    </Backdrop>
              </ListItem>
              <Divider/>
              <ListItem>
              <Grid
                  container
                  spacing={1.5}
                  direction='column'
                  justifyContent="flex-start"
                  alignItems="baseline"
                  sx={{pt:2}}
                >
                <Typography sx={{fontWeight: "bold", color: 'white'}}>route</Typography>
                <Typography sx={{pb: "0.5rem", color: 'white'}}>
                  Will show you all routes of a pokemon in the given version. 
                </Typography>
              </Grid>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: version, pokemon" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(route)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                    >
                      <img src={gif} alt="/random"/>
                    </Backdrop>
              </ListItem>
              <Divider/>
              <ListItem>
              <Grid
                  container
                  spacing={1.5}
                  direction='column'
                  justifyContent="flex-start"
                  alignItems="baseline"
                  sx={{pt:2}}
                >
                <Typography sx={{fontWeight: "bold", color: 'white'}}>quiz</Typography>
                <Typography sx={{pb: "0.5rem", color: 'white'}}>
                    Will post a trivia question of the given category. 
                </Typography>
              </Grid>
                <Grid
                      container
                      spacing={1.5}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline"
                    >                   
                      <Grid item>
                        <Chip label="Parameters: category" color="primary"/>
                      </Grid>
                      <Grid item>
                        <Chip label="Example" variant='outlined' color='warning' onClick={() => handleClickOpen(quiz)} sx={{textTransform:"none"}}/>
                      </Grid>
                    </Grid>
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                    >
                      <img src={gif} alt="/random"/>
                    </Backdrop>
              </ListItem>
            </List>
            </Grid>

        <Button size="medium" color="primary" variant="contained" sx={{position:"fixed", bottom:16, right: 16, textTransform:"none", width: 80}}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>Invite</a>
        </Button>
        {/* <Skeleton sx={{width:"18rem", mt:"4rem", backgroundColor:"#eedbc3"}}/>
        <Typography color="secondary" sx={{textAlign:"center", mb:3, mt:"4rem"}}>More Commands</Typography>
        <Grid
        container
        direction="row"
        spacing={2.5}
        justifyContent="center"
        alignItems="flex-start"
        sx={{textAlign:"center", mb:"4rem"}}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/mtg" sx={{textTransform:"none", width: 90}}>MTG</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" href="/pokemon" sx={{textTransform:"none", width: 90}}>Pokemon</Button>
          </Grid>
          <Grid item>
          <Button variant="outlined" color="primary" href="/general" sx={{textTransform:"none", width: 90}}>General</Button>
          </Grid>
        </Grid> */}
        <Footer/>
    </Grid>
  );
}
