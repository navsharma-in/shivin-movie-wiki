import { Box, Typography } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';

const Home = () => {
    return (
    <div>    
        <Container>

                <h1 className='h1'>LET ME INTRODUCE MYSELF</h1><hr></hr>
                <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                <p>I am fluent in classics like C++, Javascript and Python.</p>
                <p>My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.
                Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
                <hr></hr></Container>
            <Container>

                
                <h1  className='h1'>This Is PPPPPPPPP </h1>

                <h2 className='h1'>Hello I am The Conrainer</h2>
               <Box> 
                <Table>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Mobile</th>
                </tr>
                <tr>
                    <td>Naveen</td>
                    <td>PGD-PPT</td>
                    <td>9302550126</td>
                </tr>
            </Table>
            </Box>
            </Container>    
            

    </div>    
    )
};

export default Home;
