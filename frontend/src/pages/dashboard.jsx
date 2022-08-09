import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { Typography, Container, Box} from '@mui/material';





export default function Dashboard(){

    return(
        <div>
            <div>
                <Typography variant='h4'>Dashboard Page</Typography>
            </div>

           <Container maxWidth="lg">
                <Box sx={{
                        p: 1,
                        m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                        border: '1px solid',
                        borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}>
                    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', p: 1, m: 1, bgcolor: 'background.paper',borderRadius: 1,}}>

                        <Box sx={{ bgcolor: '#cfe8fc' }}>
                            <DashboardCard />
                        </Box>
                        <Box sx={{ bgcolor: '#cfe8fc' }} >
                            <DashboardCard />

                        </Box>
                        <Box sx={{ bgcolor: '#cfe8fc' }}>
                            <DashboardCard />

                        </Box>
                        <Box sx={{ bgcolor: '#cfe8fc' }}>
                            <DashboardCard />

                        </Box>
                        
                    </Box>
                </Box>

           </Container>

        </div>
    )
}