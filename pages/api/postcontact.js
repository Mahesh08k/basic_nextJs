import * as fs from 'fs';

const handler = async (req, res) => {
    if(req.method === 'POST'){
        //process method here
       
        let data = await fs.promises.readdir('contactData')
        fs.promises.writeFile(`contactData/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json({message:'Yes this is post request'})
    }
    else{
        res.status(200).json({status:'success'})
    }
}

export default handler