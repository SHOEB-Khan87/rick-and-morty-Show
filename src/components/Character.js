import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Add_character, Detail_character } from '../Action';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
function Character() {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.character_reducer.characters)

    const [filters, setFilters] = useState({ name: '', status: '', gender: '' });

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character', {
                    params: filters,
                });

                dispatch(Add_character(response.data.results))
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, [filters]);

    const handleFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    };
    
    let detail = (data) => {
        dispatch(Detail_character(data))
    }
    return (

        <Container style={{ marginTop: "80px", }}>




            <Grid container justifyContent="center" spacing={1} sx={{ margin: "0px" }}>
                <Grid item xs={12} md={4} lg={4}>
                    <TextField style={{ width: "100%" }} id="outlined-basic" name="name"
                        value={filters.name}
                        className='input'
                        onChange={handleFilterChange} label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                            name="status" value={filters.status} onChange={handleFilterChange}
                        >
                            <MenuItem value={""}>All</MenuItem>
                            <MenuItem value={"alive"}>Alive</MenuItem>
                            <MenuItem value={"dead"}>Dead</MenuItem>
                            <MenuItem value={"unknown"}>Unknown</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Gender"
                            name="gender" value={filters.gender} onChange={handleFilterChange}
                        >
                            <MenuItem value={""}>All</MenuItem>
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                            <MenuItem value={"genderless"}>Genderless</MenuItem>
                            <MenuItem value={"unknown"}>Unknown</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>



            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: "50px", }}>

                {state.map((state) => (
                    <Grid item sm={4} xs={12} md={3} lg={2}>
                        <Link onClick={() => detail(state)} to="/CharacterDetail" style={{ textDecoration: "none" }}>
                            <Grid container justifyContent="center">
                                <Card className='card' ju sx={{ maxWidth: "345px" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={state.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {state.name}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                </Card> </Grid></Link>
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
}
export default Character;

