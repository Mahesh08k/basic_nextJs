//valid url :  http://localhost:3000/api/blogs
import * as fs from 'fs';



const handler = async(req,res) => {
    let myBlogs = await fs.promises.readdir('blogdata')   
    let allBlogs = []
    for(let i = 0; i < myBlogs.length; i++){
      let data = await fs.promises.readFile(`blogdata/${myBlogs[i]}`,'utf-8')
      allBlogs.push(JSON.parse(data))
    }
    res.status(200).json(allBlogs)
}

export default handler