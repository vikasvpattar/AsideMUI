import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Aside = () => {
  return (
    <Box
      sx={{
        width: "300px",
        overflow: "auto",
        borderTopLeftRadius: "10px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: "0",
          zIndex: "1",
          padding: "32px 24px 24px 24px",
          background: "#fff",
          borderTopLeftRadius: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "24px",
          }}
        >
          Client Messages
        </Typography>
      </Box>

      <Card
        variant="outlined"
        sx={{
          border: "none",
          borderTop: "1px solid gray",

          borderRadius: "0",
          transition: "0.2s",

          "&:hover": {
            borderBottom: "1px solid blue",
            borderTop: "1px solid blue",
            backgroundColor: "#F3F6FD",
          },
        }}
      >
        <CardHeader
          sx={{
            "&.MuiCardHeader-root ": {
              alignItems: "flex-start",
            },
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            />
          }
          title="Stephanie"
          subheader=" I got your first assignment. It was quite good. 🥳 We can continue
              with the next assignment."
          action={
            <IconButton aria-label="settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </IconButton>
          }
        />
        <CardContent sx={{ textAlign: "right", paddingTop: "0" }}>
          <Typography variant="body2">Dec, 12</Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          borderTop: "1px solid gray",

          borderRadius: "0",
          transition: "0.2s",

          "&:hover": {
            borderBottom: "1px solid blue",
            borderTop: "1px solid blue",
            backgroundColor: "#F3F6FD",
          },
        }}
      >
        <CardHeader
          sx={{
            "&.MuiCardHeader-root ": {
              alignItems: "flex-start",
            },
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            />
          }
          title="David"
          subheader="   Awesome! 🤩 I like it. We can schedule a meeting for the next one."
          action={
            <IconButton aria-label="settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </IconButton>
          }
        />
        <CardContent sx={{ textAlign: "right", paddingTop: "0" }}>
          <Typography variant="body2">Dec, 12</Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{
          border: "none",
          borderTop: "1px solid blue",

          borderRadius: "0",
          transition: "0.2s",

          "&:hover": {
            borderBottom: "1px solid blue",
            borderTop: "1px solid blue",
            backgroundColor: "#F3F6FD",
          },
        }}
      >
        <CardHeader
          sx={{
            "&.MuiCardHeader-root ": {
              alignItems: "flex-start",
            },
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            />
          }
          title="Jessica"
          subheader="  I am really impressed! Can't wait to see the final result."
          action={
            <IconButton aria-label="settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </IconButton>
          }
        />
        <CardContent sx={{ textAlign: "right", paddingTop: "0" }}>
          <Typography variant="body2">Dec, 11</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Aside;
