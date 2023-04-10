import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Companies from "./pages/Companies";
import Complaint from "./pages/Complaint";
import Employment from "./pages/Employment";
import ToursDetiles from "./pages/ToursDetiles";
import Footer from "./components/Footer";
import NotFound from "./pages/404";
import Login from "./pages/Admin/Login";
import AddAdmin from "./pages/Admin/AddAdmin";
import AddSales from "./pages/Admin/AddSales";
import ProtectedRoute from "./util/ProtectedRoute";
import { AuthLayout } from "./conext/AurhContexe";
import LssuingTouristVisas from "./pages/OtherServise/LssuingTouristVisas";
import InternationalLicense from "./pages/OtherServise/InternationalLicense";
import BookingFlight from "./pages/OtherServise/BookingFlight";
import WatsAppIcon from "./components/WatsAppIcon";

function App() {
    return (
        <div className="App" dir="rtl">
            <CssBaseline />

            <NavBar />
            <WatsAppIcon />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/tours" element={<ToursDetiles />} />
                <Route
                    path="/LssuingTouristVisas"
                    element={<LssuingTouristVisas />}
                />
                <Route
                    path="/InternationalLicense"
                    element={<InternationalLicense />}
                />
                <Route path="/BookingFlight" element={<BookingFlight />} />
                <Route element={<AuthLayout />}>
                    <Route path="/admin/login" element={<Login />} />
                    <Route
                        path="/admin/AddAdmin"
                        element={
                            <ProtectedRoute>
                                <AddAdmin />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/AddSales"
                        element={
                            <ProtectedRoute>
                                <AddSales />
                            </ProtectedRoute>
                        }
                    />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
