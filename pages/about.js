import React from 'react'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.container}>
      <h1 style={{textAlign : 'center'}}>  About Dev Scount </h1>
      <hr />
      <h2> Introduction </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium assumenda distinctio perferendis ea non similique ipsum harum ab sint quae, molestias est doloribus id sit reprehenderit, excepturi architecto fuga!</p>
      <h2> Services we offer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti cum officiis eveniet, tempore tempora dicta aperiam dolorem ipsam illo autem voluptas magni iste! Quidem voluptate distinctio aspernatur quibusdam tempora!</p>
      <ul style={{marginLeft : '20px'}}>
        <li>service 1</li>
        <li>service 2</li>
        <li>service 3</li>
        <li>service 4</li>
        <li>service 5</li>
        <li>service 6</li>
        <li>service 7</li>
        <li>service 8</li>
      </ul>
      <h2>How to contact US</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi corporis molestias ipsum! Dolore, consectetur similique tempore quibusdam ad tempora excepturi perferendis perspiciatis quaerat porro, voluptatibus vero praesentium iusto ab!</p>
      <h2> Support Us </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias obcaecati voluptatem id ipsa voluptatum eaque accusantium consequuntur. Quasi qui possimus autem aut sed, officiis facere rerum amet eveniet fugiat.</p>
    </div>
  )
}

export default about
