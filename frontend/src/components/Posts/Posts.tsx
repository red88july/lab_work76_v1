import dayjs from "dayjs";
import axiosApi from "@/axiosApi";
import {useQuery} from "@tanstack/react-query";
import {Box, CircularProgress, Typography} from "@mui/material";
import {Posts} from "@/types";

const Posts = () => {
    const {data: messages, isLoading} = useQuery({
        queryKey: ['messages'],
        queryFn: async () => {
            const response = await axiosApi.get<Posts[]>('/messages');
            return response.data;
        },
        refetchInterval: 4000,
    });

    return (
        <>
            {!messages ? <CircularProgress/> : messages.map((message: Posts) => (
                <Box key={message.id} sx={{marginTop: 2, border: 2, borderRadius: 2, padding: 1}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: 1}}>
                        <Typography>
                            <i><b>Author:</b></i> {message.author}
                        </Typography>
                        <Typography>
                            <i><b>Date:</b></i> {dayjs(message.datetime).format(`YYYY-MM-DD HH:mm:ss`)}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            <i><b>Message:</b></i> {message.message}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default Posts;
