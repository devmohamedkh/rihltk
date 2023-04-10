// import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import TikTok from "./Ui/TikTokIcon";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 4, md: 10 },
                gap: 4,
            }}
        >
            <img src="/logo.png" height={90} alt="logo"></img>
            <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
                <Link
                    to="/"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Typography>الصفحة الرئيسية</Typography>
                </Link>
                <Link
                    to="/about"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Typography>من نحن</Typography>
                </Link>
                <Link
                    to="/order"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Typography>حجز برامج سياحية</Typography>
                </Link>
            </Stack>
            <Stack direction="row" gap={3}>
                <Link
                    to="#"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Facebook />
                </Link>
                <Link
                    to="https://www.instagram.com/reheltkksa/"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Instagram />
                </Link>
                <Link
                    to="https://wa.me/+966510608385"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <WhatsApp />
                </Link>
                <Link
                    to="https://www.tiktok.com/@reheltkksa"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                        height: "28px !import",
                    }}
                >
                    <TikTok />
                </Link>
                <Link
                    to="https://twitter.com/reheltkksa"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                >
                    <Twitter />
                </Link>
            </Stack>
            <Typography>جميع الحقوق محفوظة © رحلتك للسياحة {year}</Typography>
        </Box>
    );
}

export default Footer;
