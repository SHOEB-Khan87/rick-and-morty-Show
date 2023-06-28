

import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CharacterDetail() {
    let state = useSelector((state) => state.Detail_page.detail)
    console.log(state, "detail")
    return (
        <div>

            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: "80px", }}>


                <Grid item sm={4} xs={12} md={3} lg={2}>

                    <Grid container justifyContent="center">
                        <Card className='card' ju sx={{ maxWidth: "345px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={state.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        name : {state.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        species : {state.species}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        status : {state.status}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        gender : {state.gender}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> </Grid>
                </Grid>

            </Grid>
        </div>
    );
}

export default CharacterDetail;