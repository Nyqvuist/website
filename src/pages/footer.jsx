import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import testlogo from "../assets/newlogotest.png";
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React  from 'react'
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';



function Footer() {

    const matches2 = useMediaQuery('(max-width:869px)');

    return(
    <Grid container
    sx={{backgroundColor: "#eedbc3"}}>
        <Grid container
        direction ="row"
        justifyContent={"center"}
        spacing={matches2 ? 4 : 30}
        sx={{py:5}}>
            <Grid item>
                <Grid container
                direction="row"
                justifyContent={"center"}
                className="icons"
                spacing={0.5}>
                    <Grid item>
                        <Avatar variant ="rounded" alt="Logo" src={testlogo} sx={{width: 90, height: 105}}/>
                    </Grid>
                    <Grid item sx={{textAlign:"left"}}>
                        <IconButton color="inherit">
                        <Link href="https://github.com/Nyqvuist/Hashashin"><GitHubIcon/></Link>
                        </IconButton><IconButton color="inherit"><Link href="mailto:hashashinbot@gmail.com"><EmailIcon/></Link></IconButton>
                        <Typography sx={{fontWeight:"bold", ml:1}}>
                        A Bot For Gamers
                        </Typography>
                        <Typography variant="caption" sx={{fontWeight:"bold", fontSize:10, ml:1}}>
                                Hashashin Bot &reg; {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container
                    direction="row"
                    justifyContent={"center"}
                    className="text"
                    spacing={10}>
                    <Grid item>
                        <Typography variant='h6' sx={{fontWeight:"bold", fontSize:15, textAlign:"left"}}>Overview</Typography>
                        <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                            <Link color ="inherit" href='https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8'>
                            Invite</Link>
                        </Typography>
                        <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                        <Link color="inherit" href="mailto:hashashinbot@gmail.com">Support</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' sx={{fontWeight:"bold", fontSize:15, textAlign:"left"}}>Commands</Typography>
                        <Typography sx={{fontSize:13, textAlign:"left", fontWeight:"bold"}} color="primary">
                            <Link href="/commands" color="inherit">All Commands
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default Footer;