import React, { useEffect, useState } from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const blog = () => {
  
  const[blogs, setBlogs] = useState([])

  useEffect( () => {
    fetchBlog()
  } ,[])

  const fetchBlog = async () => {
    const data  = await fetch('http://localhost:3000/api/blogs')
    const blogs = await data.json()
    setBlogs(blogs)
    console.log(blogs)
  }

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
                       {blogItem.content.slice(0,100)}...
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

export default blog
