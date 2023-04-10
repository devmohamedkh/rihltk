import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const images = [
    "images/Artboard-4.jpg",
    "images/Artboard-1.jpg",
    "images/Artboard-2.jpg",
];

function Header() {
    return (
        <>
            <Carousel
                swipe
                sx={{
                    width: "100%",
                }}
                navButtonsProps={{
                    // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        opacity: 0.5,
                    },
                }}
            >
                {images.map((url, i) => (
                    <Box
                        key={i}
                        component="img"
                        src={url}
                        alt=""
                        sx={{
                            height: { xs: 300, md: 550 },
                            width: "100%",
                            objectFit: "fill",
                        }}
                    />
                ))}
            </Carousel>
        </>
    );
}

export default Header;
