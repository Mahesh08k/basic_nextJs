import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/Blogpost.module.css";

const slug = () => {
    const router = useRouter()
    const [blog, setBlog] = useState({})
    let {slug} = router.query

    useEffect( () => {

      if(!slug) return;

      const fetchBlogData = async() => {
        const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
        const blogData = await data.json()
        setBlog(blogData)
      }

      fetchBlogData()
    },[slug])

  

  return (
   <>
   <div className={styles.container}>
   <main className={styles.main}>
       <div>
         <h1> {blog.title} </h1>
      </div>
     <hr/>
      <div>
     {blog.content}
     </div>
    </main>
   </div>
   </>
  )
}

export default slug