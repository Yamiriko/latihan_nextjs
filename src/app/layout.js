"use client";

import { usePathname } from "next/navigation";
import Kaki from "./template/Kaki";
import FooterSection from "./template/FooterSection";
import Menu from "./template/Menu";
import HeaderSection from "./template/HeaderSection";
import Kepala from "./template/Kepala";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const metadata = {
//   title: "Web CV Riko",
//   description: "Transformasi Web CV Riko dari HTML Ke NextJS",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <html lang="id">
        <Kepala />
        <body>
          <div className="container-scroller">
            <HeaderSection />
            <div className="container-fluid page-body-wrapper">
              <Menu />
              <div className="main-panel">
                <div className="content-wrapper">{children}</div>
                <FooterSection />
              </div>
            </div>
          </div>
          <Kaki />
        </body>
      </html>
    );
  } else if (pathname === "/cv") {
    return (
      <html lang="id">
        <body>{children}</body>
      </html>
    );
  } else {
    return (
      <html lang="id">
        <body>{children}</body>
      </html>
    );
  }
}
