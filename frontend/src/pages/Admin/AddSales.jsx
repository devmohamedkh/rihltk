import React, { useState } from "react";
import {
    Alert,
    Box,
    Button,
    FormControl,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import axios from "../../util/axios";
import FlotingSittingButton from "../../components/FlotingSittingButton";
import { useAuth } from "../../conext/AurhContexe";
import getCurrentData from "../../util/getCurrentData";
const countrys = [
    "جورجيا ",
    "البوسنة ",
    "ازربيجان ",
    "سريلانكا ",
    "المالديف ",
    "البانيا ",
    "تايلاند ",
    "ماليزياء ",
    "تركيا",
    "اندونيسيا ",
    "موريشيوس ",
    "اوروبا جماعية ",
    "اوروبا حرة ",
    "حجز طيران ",
    "تأشيرات ",
];

const citys = [
    "الرياض",
    "جدة",
    "الدمام ",
    "الخبر",
    "مكة",
    "المدينة",
    "تابوك",
    "حائل",
    "الطائف",
    "اخري",
];

export default function AddSales() {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);

    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [agent, setAgent] = useState(null);

    const [packageWithoutFlightCost, setPackageWithoutFlightCost] =
        useState(null);
    const [flightCost, setFlightCost] = useState(null);
    const [PackagePrice, setPackagePrice] = useState(null);
    const { user } = useAuth();

    const [ok, setOk] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                name,
                phone,
                city,
                country,
                packageWithoutFlightCost,
                flightCost,
                PackagePrice,
                employee: user.userName,
                agent,
                date: getCurrentData(),
                time: new Date().toLocaleTimeString(),
            };
            const res = await axios.post("/addSales", data);
            if (res.status === 200) setOk(true);
            e.target.reset();
        } catch (error) {
            setOk(false);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <Box maxWidth={700} margin={"50px auto"}>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    mb: 5,
                    maxWidth: 600,
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                اضافة مبيعة
            </Typography>
            {ok !== null && ok && (
                <Alert severity="success">تم ارسال الطلب بنجاح!</Alert>
            )}
            {ok !== null && !ok && (
                <Alert severity="error">
                    حدث مشكلة اثناء ارسال الطلب برجاء المحاولة مره اخرى بعد قليل
                </Alert>
            )}
            <Box component="form" gap={20} onSubmit={submitHandler}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            الاسم:
                        </Typography>
                        <TextField
                            fullWidth
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                            sx={{
                                mb: 1,
                                backgroundColor: "#EEEEEE",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            الجوال:
                        </Typography>
                        <TextField
                            fullWidth
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            sx={{
                                mb: 1,
                                backgroundColor: "#EEEEEE",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            اسم الوكيل:
                        </Typography>
                        <TextField
                            fullWidth
                            name="name"
                            onChange={(e) => setAgent(e.target.value)}
                            required
                            sx={{
                                mb: 1,
                                backgroundColor: "#EEEEEE",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            مدينة العميل:
                        </Typography>
                        <FormControl required fullWidth>
                            <TextField
                                fullWidth
                                select
                                name="city"
                                required
                                onChange={(e) => setCity(e.target.value)}
                                sx={{
                                    mb: 1,
                                    backgroundColor: "#EEEEEE",
                                }}
                            >
                                {citys.map((city) => (
                                    <MenuItem key={city} value={city}>
                                        {city}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            الدولة:
                        </Typography>
                        <FormControl required fullWidth>
                            <TextField
                                fullWidth
                                select
                                required
                                name="country"
                                onChange={(e) => setCountry(e.target.value)}
                                sx={{
                                    mb: 1,
                                    backgroundColor: "#EEEEEE",
                                }}
                            >
                                {countrys.map((country) => (
                                    <MenuItem key={country} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            سعر الباكدج بدون طيران
                        </Typography>
                        <TextField
                            fullWidth
                            name="packageWithoutFlightCost"
                            type={"number"}
                            defaultValue={0}
                            onChange={(e) =>
                                setPackageWithoutFlightCost(e.target.value)
                            }
                            required
                            sx={{
                                mb: 1,
                                backgroundColor: "#EEEEEE",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            سعر تكلفة الطيران
                        </Typography>
                        <TextField
                            fullWidth
                            name="flightCost"
                            type={"number"}
                            defaultValue={0}
                            onChange={(e) => setFlightCost(e.target.value)}
                            required
                            sx={{
                                mb: 1,
                                backgroundColor: "#EEEEEE",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                mb: 1,
                                maxWidth: 600,
                            }}
                        >
                            سعر الباكدج بالكامل
                        </Typography>
                        <TextField
                            fullWidth
                            name="packagePrice"
                            type={"number"}
                            defaultValue={0}
                            onChange={(e) => setPackagePrice(e.target.value)}
                            required
                            sx={{
                                mb: 1,
                                backgroundColor: "#EEEEEE",
                            }}
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="secondary"
                    size="large"
                    sx={{
                        mt: 1,
                        mb: 1,
                        color: "white",
                        fontSize: 18,
                    }}
                >
                    اضافة
                </Button>
            </Box>
            <FlotingSittingButton />
        </Box>
    );
}
