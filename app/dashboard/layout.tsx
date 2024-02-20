import type { Metadata } from "next";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from '../ui/dashboard/footer/footer'
import styles from '../ui/dashboard/dashboard.module.css'
export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
     <div className={styles.menu}>
        <Sidebar/>
     </div>
     <div className={styles.content}>
        <Navbar/>
       <div className={styles.children}>
       {children}
       </div>
     </div>
    </div>
  );
}