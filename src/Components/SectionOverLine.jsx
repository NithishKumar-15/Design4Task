import React from 'react'
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export const SectionOverLine = () => {
    return (
        <div className='bg-sky-100 py-14'>
            <Container>
                <h1 className='text-center font-bold text-sm'>SECTION OVERLINE</h1>
                <h1 className='font-semibold text-4xl text-center my-5'>Why Choose Us</h1>
                <Grid container spacing={2} sx={{ marginTop: "50px" }}>
                    <Grid size={4}>
                        <StarIcon sx={{ fontSize: "50px", display: "block", marginX: "auto", color: "#d4ac0d" }}></StarIcon>
                        <h1 className='text-center text-xl font-bold my-5'>5 Star Chef</h1>
                        <p className='text-center text-zinc-500'>Intelligne yell stars Bio food buskywick paleo bun man bun thundercats, viral fanny pack</p>
                    </Grid>

                    <Grid size={4}>
                        <AccessTimeIcon sx={{ fontSize: "50px", display: "block", marginX: "auto", color: "#d4ac0d" }}></AccessTimeIcon>
                        <h1 className='text-center text-xl font-bold my-5'>5 Star Chef</h1>
                        <p className='text-center text-zinc-500'>Intelligne yell stars Bio food buskywick paleo bun man bun thundercats, viral fanny pack</p>
                    </Grid>

                    <Grid size={4}>
                        <AccessibilityIcon sx={{ fontSize: "50px", display: "block", marginX: "auto", color: "#d4ac0d" }}></AccessibilityIcon>
                        <h1 className='text-center text-xl font-bold my-5'>5 Star Chef</h1>
                        <p className='text-center text-zinc-500'>Intelligne yell stars Bio food buskywick paleo bun man bun thundercats, viral fanny pack</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
