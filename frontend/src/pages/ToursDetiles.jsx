import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TravlForm from "../components/TravlForm";

function ToursDetiles() {
    const { state } = useLocation();
    const { tour } = state;
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <Box>
            <Box
                component="img"
                src={`https://drive.google.com/uc?export=view&id=${
                    tour?.imageUrl.split("/")[5]
                }`}
                alt=""
                sx={{
                    height: { xs: 250, md: 550 },
                    width: "100%",
                    objectFit: "fill",
                }}
            />
            <Container
                sx={{
                    mt: 4,
                    mb: 4,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    {tour?.desc
                        ? tour?.desc
                        : `استمتع برحلة 10 أيام في ${tour?.title} وزيارة جميع المعالم السياحية في ${tour?.title} والأنشطة السياحية.`}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,

                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    العرض يشمل التالي:
                </Typography>

                <ul style={{ fontSize: "18px" }}>
                    <li>الإستقبال و التوديع من والى المطار</li>
                    <li>حجوزات الفنادق كاملة</li>
                    <li>الإفطار في الفنادق ( اوبن بوفيه ) طوال مدة الإقامة </li>
                    <li>جولات سياحية يوميا بسيارة خاصة حديثة </li>
                    <li>
                        جميع الإنتقالات بسيارة سياحية خاصة بكم فقط لتستمتع
                        بالخصوصية مع عائلتك او اصدقائك
                    </li>
                    <li>سائق خاص مع البترول </li>
                    <li>شرائح اتصال وانترنت للشخصين </li>
                    <li>السعر شامل كافة الضرائب</li>
                    <li>خدمة عملاء بالعربي طوال مدة الرحلة</li>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            mt: 2,
                            typography: { xs: "h6", md: "h6" },
                        }}
                    >
                        العرض لا يشمل :
                    </Typography>
                    <li>
                        تذاكر الطيران الدولي ويمكنكم الحجز لدينا ( بدون رسوم
                        إضافية ) .
                    </li>
                </ul>

                <Typography
                    variant="h3"
                    sx={{
                        mb: 2,
                        mt: 2,
                        typography: { xs: "h6", md: "h6" },
                    }}
                >
                    لمذيد من المعلومات برجاء الاتصال بالرقم التالي&nbsp;
                    <a href="tel:+966510608385" style={{ color: "inherit" }}>
                        966510608385+{" "}
                    </a>
                </Typography>

                <TravlForm />
            </Container>
        </Box>
    );
}

export default ToursDetiles;
