import React from "react";
import Header from "../components/Header";
import TestimonialsList from "../components/TestimonialsList";
import ToursList from "../components/ToursList";
import TravlForm from "../components/TravlForm";
import Section from "../components/Ui/Section";
import { Typography } from "@mui/material";

function Home() {
    return (
        <>
            <Header />
            <Section title="الوجهات السياحية الدولية">
                <ToursList />
            </Section>
            <Section title="اراء العملاء">
                <TestimonialsList />
            </Section>
            <Section>
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
            </Section>
        </>
    );
}

export default Home;
