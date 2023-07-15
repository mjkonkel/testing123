import React from 'react';
import {
    Button,
    Box,
    AppBar,
    Toolbar,
    Typography,
    Checkbox,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Stack
} from "@mui/material";
import { Link } from 'react-router-dom';


const Test = () => {
    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Header
                        </Typography>
                        <Button component={Link} to="/login" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Stack gap={2} sx={{ p: 2 }} alignItems="flex-start">
                <Button component={Link} to="/" variant="contained" color="secondary">To Home</Button>
                <Box>
                    <Checkbox defaultChecked />
                </Box>
                <Stack direction="row">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="optionA"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="optionA"
                                control={<Radio />}
                                label="Option A"
                            />
                            <FormControlLabel
                                value="optionB"
                                control={<Radio />}
                                label="Option B"
                            />
                        </RadioGroup>
                    </FormControl>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Test;