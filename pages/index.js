import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../db/conn'
import USER from '../db/models/users'
import dbConnect from '../db/conn'

dbConnect()
export default function Home({abc}) {
  return (
    <div>

   
    <div>Hello</div>
    </div>
  )
}


