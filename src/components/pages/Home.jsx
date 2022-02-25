import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import avatar from "./Movies/avatar.svg";



const Home = () => {
    return (
        <div>
           
                    <Container maxWidth='md'>
                    <Grid container spacing={10} columns={16}>
                    <Grid item xl={12}>
                        
                    <h1 className='h1'>LET ME INTRODUCE MYSELF</h1>
                        <p className='p'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️I am fluent in classics like C++, Javascript and Python.
                        My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.
                        Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
                    </Grid>
                    <Grid item xl={2}>
                        <img src={avatar} className="App-Avatar" alt="avatar" />
                    </Grid>
                    </Grid>
                    </Container>   
                    
            
            
    </div>    
    )
};

export default Home;
