import React from 'react';
import {Button, Container, TextField} from "@mui/material";

export default function Home() {

    return (
        <Container maxWidth="md">
            <form>
                <TextField
                    id="authorinput"
                    label="Input author message"
                sx={{marginBottom: 3}}/>
                <TextField
                    id="messageInput"
                    label="Input message"
                    rows={4}
                    sx={{marginBottom: 3}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Send Message
                </Button>
            </form>
        </Container>
    );
}
