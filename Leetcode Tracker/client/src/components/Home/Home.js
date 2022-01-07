import React from 'react'
import {Container,Grid} from '@material-ui/core';
import UsersList from './UsersList/UsersList';
import WeeklyTop from './WeeklyTop/WeeklyTop'
import User from './UsersList/User/User';
import './Home.css'
function Home() {
    return (
     
        <>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>

                <Grid item xs={8} sm={8}>

                    <UsersList/>

                </Grid>

                <Grid item xs={12} sm={4}>

                    <WeeklyTop/>

                </Grid>


            </Grid>
        
        </>


      
    )
}

export default Home
