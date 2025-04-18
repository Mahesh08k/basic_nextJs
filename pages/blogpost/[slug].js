import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/Blogpost.module.css";
import * as fs from 'fs';

const Slug = (props) => {
   
    const [blog, setBlog] = useState(props.myBlog)
    
  return (
   <>
   <div className={styles.container}>
   <main className={styles.main}>
       <div>
         <h1> {blog && blog.title} </h1>
      </div>
     <hr/>
      <div>
     {blog && blog.content}
     </div>
    </main>
   </div>
   </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: { slug: 'how-to-learn-angular' } },
      {params: { slug: 'how-to-learn-javascript' } },
      {params: { slug: 'how-to-learn-nextjs' } },
    ],
    fallback: false
  }
}

export async function getStaticProps (context) {
  
  const {slug} = context.params;

   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {
    props: {myBlog : JSON.parse(myBlog)} 
  }
}

export default Slug