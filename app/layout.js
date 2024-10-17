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
      <BootstrapClientJs />
    </html>
  );
}
