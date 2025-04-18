import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/Blogpost.module.css";

const slug = (props) => {
   
    const [blog, setBlog] = useState(props.blogData)
    
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

export async function getServerSideProps (context) {
  const {slug} = context.query;
  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  const blogData = await data.json()

  return {
    props: {blogData}
  }
}

export default slug