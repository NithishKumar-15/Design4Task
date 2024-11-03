import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React from 'react'
import Button from '@mui/material/Button';

export const Availability = () => {
    return (
        <Container sx={{ marginTop: "70px" }}>
            <Grid container spacing={3} sx={{ height: "500px" }}>

                <Grid size={6} sx={{ height: "100%" }}>
                    <h1 className='text-5xl'>Welcome to our luxury villla!</h1>

                    <div className='border-2 border-yellow-600 my-9'>
                    </div>

                    <p className='text-zinc-500'>kale chips case grand mustach blog fashion axe selfies salivas. Gulten free post iornic deep v typewriter. Cloud breed flane poxy flexita venliy iphone church-key sharma williamsburg kitsch burge</p>

                    <h1 className='my-4 text-3xl'>Thera 84700 Greece</h1>
                    <h1 className='font-bold text-zinc-500'>25km massive airport</h1>
                </Grid>

                <Grid size={6} sx={{ height: "100%",backgroundColor:"#13274F",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className='w-3/4 h-5/6 text-white'>
                        <label className='block mb-2'>Name<span className='text-red-600'>*</span></label>
                        <input type={"text"} placeholder="Your Name" className='border-2 border-solid w-full h-9 p-3' style={{backgroundColor:"#13274F"}}></input>
                       
                        <label className='block my-2'>Email<span className='text-red-600'>*</span></label>
                        <input type={"text"} placeholder="Your Email" className='border-2 border-solid w-full h-9 p-3' style={{backgroundColor:"#13274F"}}></input>

                        <label className='block my-2'>Message<span className='text-red-600'>*</span></label>
                        <textarea rows="5" className='border-2 border-solid p-3 w-full' style={{backgroundColor:"#13274F"}} placeholder="Please Add your request booking date here"></textarea>
                        <Button variant="contained" sx={{marginTop:"10px"}}>Request availability</Button>
                    </div>
                </Grid>

            </Grid>
        </Container>
    )
}
