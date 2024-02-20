// "use client"
import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import {fetchUsers} from "@/app/lib/data"
export default async function UsersPage({searchParams}:{searchParams?:{q:string}}) {
  console.log(searchParams)
  const q = searchParams?.q || ""
  const users = await fetchUsers(q)
  return (
    <div className={styles.container}>
        <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              users?.map(user=>(
                <tr key={user.id}>
              <td>
                <div className={styles.user}>
                <Image src={user.img || "/noavatar.png"} alt="user" width={50} height={50} className={styles.userImage}/>
                {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? 'Admin' : "Client"}</td>
              <td>{user.isActive ? "active": "passive"}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
        <Pagination/>
    </div>
  )
}
