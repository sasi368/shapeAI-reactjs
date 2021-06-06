import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

function Header(){
    return(
       <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6">
              Shape AI
            </Typography>
           
          </Toolbar>
        </AppBar>
    );
}

export default Header;