import React from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export const Header = () => {
    return (
        <header>
            <nav>
                <Container sx={{ height: "50px" }}>
                    <div className="h-full flex justify-between	items-center">
                        <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="...logo" width={150}></img>
                        <ul className='flex justify-between w-2/5 items-center h-full'>
                            <li className='text-xl text-sky-500'>Home</li>
                            <li className='text-xl'>About</li>
                            <li className='text-xl'>Rooms</li>
                            <li className='text-xl'>Contact</li>
                            <li><Button variant="contained">Book room</Button></li>
                        </ul>
                    </div>
                </Container>
            </nav>
            <div className='h-96 bg-headerbackroundimg bg-cover bg-no-repeat'>
                <Container sx={{height:"100%",display:"flex"}}>
                    <div className='w-3/6 h-1/2 my-auto text-white'>
                        <h1 className='text-5xl italic '>Your Vacation</h1>
                        <h1 className='text-5xl italic '>Starts Here</h1>
                        <p className='mt-4'>Kale chips kansagard mustach blog fashion ace selfies saliva Gultern free post iornic deep vitepywrite</p>
                        <Button variant="contained" sx={{backgroundColor:"white",color:"#007FFF",marginTop:"20px"}}>View Rooms</Button>
                    </div>
                </Container>
            </div>
        </header>
    )
}
