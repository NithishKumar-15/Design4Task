import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';


export const OurRooms = () => {
    return (
        <div className='py-16 text-white' style={{ backgroundColor: "#13274F" }}>
            <Container>
                <h6 className='text-sm font-bold text-center'>SECTION OVERLINE</h6>
                <h1 className='text-4xl font-bold text-center mt-5'>Our Rooms</h1>
                <div className='border my-10  border-yellow-600 w-10/12 mx-auto'>
                </div>
                <Grid container spacing={2}>
                    <Grid size={6} sx={{ marginBottom: "90px" }}>
                        <figure>
                            <img className='h-96' src='https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                            <figcaption>
                                <h1 className='mt-2 text-sm font-bold text-center'>2 BEDS</h1>
                                <h1 className='mt-2 text-3xl font-bold text-center'>Hera</h1>
                                <p className='text-center mt-2'>Kale chips kasagard mustach blog fashion axe selfies Gulten free post iornic v typerrwire</p>
                                <Button variant='contained' sx={{ marginX: "auto", display: "block", marginTop: "10px" }}>view room</Button>
                            </figcaption>
                        </figure>
                    </Grid>

                    <Grid size={6}>
                        <figure>
                            <img className='h-96' src='https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                            <figcaption>
                                <h1 className='mt-2 text-sm font-bold text-center'>4 BEDS</h1>
                                <h1 className='mt-2 text-3xl font-bold text-center'>Dimitra</h1>
                                <p className='text-center mt-2'>Kale chips kasagard mustach blog fashion axe selfies Gulten free post iornic v typerrwire</p>
                                <Button variant='contained' sx={{ marginX: "auto", display: "block", marginTop: "10px" }}>view room</Button>
                            </figcaption>
                        </figure>
                    </Grid>

                    <Grid size={6}>
                        <figure>
                            <img className='h-96' src='https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                            <figcaption>
                                <h1 className='mt-2 text-sm font-bold text-center'>2 BEDS</h1>
                                <h1 className='mt-2 text-3xl font-bold text-center'>Apollo</h1>
                                <p className='text-center mt-2'>Kale chips kasagard mustach blog fashion axe selfies Gulten free post iornic v typerrwire</p>
                                <Button variant='contained' sx={{ marginX: "auto", display: "block", marginTop: "10px" }}>view room</Button>
                            </figcaption>
                        </figure>
                    </Grid>

                    <Grid size={6}>
                        <figure>
                            <img className='h-96' src='https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=600' width={"100%"}></img>
                            <figcaption>
                                <h1 className='mt-2 text-sm font-bold text-center'>2 BEDS</h1>
                                <h1 className='mt-2 text-3xl font-bold text-center'>Athena</h1>
                                <p className='text-center mt-2'>Kale chips kasagard mustach blog fashion axe selfies Gulten free post iornic v typerrwire</p>
                                <Button variant='contained' sx={{ marginX: "auto", display: "block", marginTop: "10px" }}>view room</Button>
                            </figcaption>
                        </figure>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
