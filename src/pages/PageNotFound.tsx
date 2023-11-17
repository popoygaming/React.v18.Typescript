import { Divider, Stack } from "@mui/material";
import { PAGE_NOT_FOUND_TEXT } from "../utils/constants";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
        <Stack spacing={{ xs: 1, sm: 2 }} direction={"column"} useFlexGap flexWrap="wrap" alignItems={"left"} justifyContent={"left"}>
            <Link to="/Home">Back to Home</Link>
            <Divider/>
            <h1>{PAGE_NOT_FOUND_TEXT}</h1>
        </Stack>
    </>
    );
}

export default PageNotFound;