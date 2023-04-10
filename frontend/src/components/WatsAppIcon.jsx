import React from "react";
import { Link } from "react-router-dom";

export default function WatsAppIcon() {
    return (
        <Link
            to="https://wa.me/+966510608385"
            target="_blank"
            style={{
                position: "fixed",
                bottom: 20,
                right: 15,
                zIndex: 99,
            }}
        >
            <img
                src="/images/whatsapp.png"
                alt="whatsapp icon"
                height={60}
                width={60}
                style={{
                    borderRadius: "50%",
                }}
            />
        </Link>
    );
}
