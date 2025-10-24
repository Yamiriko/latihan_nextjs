import Script from "next/script";

/* eslint-disable @next/next/no-sync-scripts */
export default function Kaki() {
  return (
    <>
      <Script
        src="/assets/js/jquery-3.7.1.slim.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendors/js/vendor.bundle.base.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/chart.js/chart.umd.js"
        strategy="afterInteractive"
      ></Script>
      {/* <Script
        src="/assets/vendors/datatables.net/jquery.dataTables.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/vendors/datatables.net-bs5/dataTables.bootstrap5.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/dataTables.select.min.js"
        strategy="afterInteractive"
      ></Script> */}
      <Script
        src="/assets/js/off-canvas.js"
        strategy="afterInteractive"
      ></Script>
      <Script src="/assets/js/template.js" strategy="afterInteractive"></Script>
      <Script src="/assets/js/settings.js" strategy="afterInteractive"></Script>
      <Script src="/assets/js/todolist.js" strategy="afterInteractive"></Script>
      <Script
        src="/assets/js/jquery.cookie.js"
        type="text/javascript"
        strategy="afterInteractive"
      ></Script>
      {/* <Script
        src="/assets/js/dashboard.js"
        strategy="afterInteractive"
      ></Script> */}
    </>
  );
}
