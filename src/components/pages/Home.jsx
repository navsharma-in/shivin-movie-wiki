import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import logo from "./Movies/logo.svg";


const Home = () => {
    return (
        <div>
           
                    <Container>
                    <Grid container spacing={2} columns={16}>
                    <Grid item xs={10}>
                    <h1 className='h1'>LET ME INTRODUCE MYSELF</h1>
                        <p className='p'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️I am fluent in classics like C++, Javascript and Python.
                        My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.
                        Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
                    </Grid>
                    <Grid item xs={4}>
                   <img src={logo} className="App-logo" alt="logo" /><h1>Hi...This Is Naveen</h1>
                    </Grid>
                    </Grid>
                    </Container>   
                    
            
            
    </div>    
    )
};

export default Home;
