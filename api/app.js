const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const {
    addOrder,
    addCoumpanyOrder,
    addComplaint,
    addEmployee,
    getToursList,
    addSales,
} = require("./utils/googleSheet");
const connectDB = require("./utils/db");
const adminController = require("./controllers/adminController");
//=====================
// MIDDLEWARE
//=====================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//=====================
// ROUTES
//=====================

app.post("/addOrder", async (req, res) => {
    const data = {
        "رقم الجوال": req.body.phone,
        المدينة: req.body.city,
        الدولة: req.body.country,
        "حاجز طيران": req.body.bookingFlight,
        التاريخ: req.body.date,
        الوقت: req.body.time,
    };

    try {
        await addOrder(data);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});

app.post("/addCoumpanyOrder", async (req, res) => {
    const data = {
        "رقم الجوال": req.body.phone,
        "اسم العميل": req.body.personName,
        "اسم الشركة": req.body.coumpanyName,
        "البريد الالكتروني": req.body.email,
        المدينة: req.body.city,
        الوصف: req.body.desc,
        التاريخ: req.body.date,
        الوقت: req.body.time,
    };
    try {
        await addCoumpanyOrder(data);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});
app.post("/addComplaint", async (req, res) => {
    const data = {
        "رقم الجوال": req.body.phone,
        "اسم العميل": req.body.name,
        الوصف: req.body.desc,
        التاريخ: req.body.date,
        الوقت: req.body.time,
    };
    try {
        await addComplaint(data);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});
app.post("/addEmployee", async (req, res) => {
    const data = {
        "رقم الجوال": req.body.phone,
        "اسم العميل": req.body.name,
        العمر: req.body.age,
        المدينة: req.body.city,
        "لدية خبرة": req.body.hasExpr,
        التاريخ: req.body.date,
        الوقت: req.body.time,
    };

    try {
        await addEmployee(data);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});
app.post("/addSales", async (req, res) => {
    const data = {
        "اسم العميل": req.body.name,
        "رقم الجوال": req.body.phone,
        الدولة: req.body.country,
        "سعر تكلفة الباكدج بدون الطيران": req.body.packageWithoutFlightCost,
        "تكلفة الطيران": req.body.flightCost,
        "سعر بيع الباكدج": req.body.PackagePrice,
        المدينة: req.body.city,
        التاريخ: req.body.date,
        الوقت: req.body.time,
        الموظف: req.body.employee,
        "اسم الوكيل": req.body.agent,
    };

    try {
        await addSales(data);
        res.json({
            ok: "ok",
        });
    } catch (error) {}
});

app.get("/tours", async (req, res) => {
    try {
        const rows = await getToursList(req.body);
        let tours = [];
        for (let row of rows) {
            tours.push({
                title: row.title,
                desc: row.desc,
                imageUrl: row.imageUrl,
            });
        }

        res.json(tours);
    } catch (error) {}
});

app.post("/login", adminController.LogIn);
app.post("/signUp", adminController.signUp);

// 404 error
app.use((req, res, next) => {
    res.status(404).json({
        status: "error",
        statusCode: 404,
        massage: "404 - page not found!",
    });
});

connectDB();
app.listen(process.env.PORT, () =>
    console.log(` listening on port ${process.env.PORT}!`)
);
