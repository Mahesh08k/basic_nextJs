import React, { useEffect, useState } from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
import * as fs from 'fs';

const blog = (props) => {
  
  const[blogs, setBlogs] = useState(props.allBlogs)

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



export async function getStaticProps (context) {

  let myBlogs = await fs.promises.readdir('blogdata')   
      let allBlogs = []
      for(let i = 0; i < myBlogs.length; i++){
        let data = await fs.promises.readFile(`blogdata/${myBlogs[i]}`,'utf-8')
        allBlogs.push(JSON.parse(data))
      }

   return {
       props: {allBlogs}
   }
}

export default blog
