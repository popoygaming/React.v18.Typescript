import { Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Help() {
    return (
        <>
            <Stack spacing={{ xs: 1, sm: 2 }} direction={"column"} useFlexGap flexWrap="wrap" alignItems={"left"} justifyContent={"left"}>
                <Link to="/Home">Back to Home</Link>
                <Divider/>
                <h1>Help page</h1>
            </Stack>
        </>
    );
}

export default Help;