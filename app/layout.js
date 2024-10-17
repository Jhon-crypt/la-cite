import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from "./components/bootstrapJs/bootstrapjs";


export const metadata = {
  title: "La cite",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap');
      </style>
      <BootstrapClientJs />
    </html>
  );
}
