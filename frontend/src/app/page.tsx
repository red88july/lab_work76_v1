'use client';
import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";
import {useMutation} from "@tanstack/react-query";
import axiosApi from "@/axiosApi";
import {Post} from "@/types";
import Posts from "@/components/Posts/Posts";

export default function Home() {

    const [authorPost, setAuthorPost] = useState<string>('');
    const [messagePost, setMessagePost] = useState<string>('');

    const postMessages = useMutation({
        mutationFn: async (post: Post) => {
                const response = await axiosApi.post('/messages', post);
                return response.data;
        }
    });

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const postData: Post = {
            author: authorPost,
            message: messagePost,
        };

        postMessages.mutate(postData);

        setAuthorPost('');
        setMessagePost('');
    };

    return (
        <Container maxWidth="md">
            <form onSubmit={onFormSubmit}>
                <TextField
                    id="authorInput"
                    name="author"
                    value={authorPost}
                    onChange={(e) => setAuthorPost(e.target.value)}
                    label="Input author message"
                    sx={{ marginBottom: 3 }}
                />
                <TextField
                    id="messageInput"
                    name="message"
                    value={messagePost}
                    onChange={(e) => setMessagePost(e.target.value)}
                    label="Input message"
                    multiline
                    rows={4}
                    sx={{ marginBottom: 3 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Send Message
                </Button>
            </form>
            <Posts />
        </Container>
    );
}
