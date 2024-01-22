import React from 'react';
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axiosApi from "@/axiosApi";
import {Posts} from "@/types";
import dayjs from "dayjs";

const Posts = () => {

    const { data: messages, isLoading } = useQuery({
        queryKey: ['messages'],
        queryFn: async () => {
            const response = await axiosApi.get<Posts[]>('/messages');
            return response.data;
        }
    });

    let messagesChat: React.ReactNode = <CircularProgress />;

    if (!isLoading && messages) {
        messagesChat = (
            <>
                {messages.map((message: Posts) => (
                    <Box key={message.id} sx={{ marginTop: 4, border: 2, borderRadius: 2 }}>
                        <Box>
                            <Typography>Author: {message.author}</Typography>
                            <Typography>Date: {dayjs(message.datetime).format('YYYY-MM-DD HH:mm:ssZ')}</Typography>

                        </Box>
                        <Box>
                            <Typography>Message: {message.message}</Typography>
                        </Box>
                    </Box>
                ))}
            </>
        );
    }

    return (
        <>
            {messagesChat}
        </>
    );
};

export default Posts;
