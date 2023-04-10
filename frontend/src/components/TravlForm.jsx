import React, { useState } from "react";
import {
    Alert,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";

import axios from "../util/axios";
import getCurrentData from "../util/getCurrentData";
const countrys = [
    "جورجيا ",
    "البوسنة ",
    "ازربيجان ",
    "سريلانكا ",
    "المالديف ",
    "البانيا ",
    "تايلاند ",
    "ماليزياء ",
    "اندونيسيا ",
    "موريشيوس ",
    "تركيا",
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

function TravlForm() {
    const [phone, setPhone] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [bookingFlight, setBookingFlight] = useState(null);
    const [ok, setOk] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                phone,
                city,
                country,
                bookingFlight,
                date: getCurrentData(),
                time: new Date().toLocaleTimeString(),
            };

            const res = await axios.post("/addOrder", data);
            if (res.status === 200) setOk(true);
            e.target.reset();
        } catch (error) {
            setOk(false);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <Box>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    mb: 5,
                    maxWidth: 600,
                    fontWeight: "bold",
                }}
            >
                للطلب والاستفسار، يرجى تزويدنا ببياناتك وسنقوم بالتواصل معك في
                أسرع وقت ممكن:
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
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#EEEEEE",
                    }}
                />
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    مدينتك:
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

                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    وين حاب تسافر:
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

                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        mb: 1,
                        maxWidth: 600,
                    }}
                >
                    هل تم حجز الطيران؟
                </Typography>
                <FormControl
                    color="secondary"
                    required
                    onChange={(e) => setBookingFlight(e.target.value)}
                >
                    <RadioGroup row name="bookingFlight">
                        <FormControlLabel
                            value="نعم"
                            control={<Radio color="secondary" />}
                            label="نعم"
                        />
                        <FormControlLabel
                            value="لا"
                            control={<Radio color="secondary" />}
                            label="لا"
                        />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <FormLabel>
                    *جميع الأسعار في الموقع تشمل قيمة الضريبة المضافة
                </FormLabel>

                <br />
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
                    ارسال
                </Button>
            </Box>
        </Box>
    );
}

export default TravlForm;
