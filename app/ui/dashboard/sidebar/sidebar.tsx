import React, {ReactNode} from 'react'
import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Image from 'next/image';
interface MenuItem {
  title: string;
  list: SubMenuItem[];
}
interface SubMenuItem {
  title: string;
  path: string;
  icon: ReactNode; // ReactNode can be used to represent any valid JSX element
}
const menuItems:MenuItem[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/noavatar.png"
          className={styles.userImage}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
     <ul>
      {
        menuItems.map((item,index)=>{
          return <li key={index}>
            <span className={styles.cat}>{item.title}</span>
            {
              item.list.map((menu,index)=>(
              <MenuLink key={index} menu={menu} />
              ))
            }
          </li>
        })
      }
     </ul>
     <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
    </div>
  )
}
