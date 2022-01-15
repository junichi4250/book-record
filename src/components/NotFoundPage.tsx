import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Box sx={{ my: 4, mx: 4 }}>
        <Typography variant="h3">Page not found</Typography>
        <Button component={Link} to="/">
          Go to top
        </Button>
      </Box>
    </div>
  );
};

export default NotFoundPage;
