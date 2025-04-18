import React, { useEffect, useState } from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const blog = (props) => {
  
  const[blogs, setBlogs] = useState(props.blogs)

  return (
    <>
    <main className={styles.main}>
    <div className="blog">
            <div className={styles.blogItem}>
              {blogs.map((blogItem) => {
                return(
                  <div key = {blogItem.slug}> 
                    <Link href={'/blogpost/'+ blogItem.slug}>
                      <h3>{blogItem.title}</h3>
                      </Link>
                      <p>
                       {blogItem.content?.slice(0,100)}...
                      </p>
                  </div>
                )
              })}
            </div>
          </div>
    </main>
    </>
    
  )
}


export async function getServerSideProps (context) {
  const data  = await fetch('http://localhost:3000/api/blogs')
  const blogs = await data.json()
   
   return {
       props: {blogs}
   }
}

export default blog
