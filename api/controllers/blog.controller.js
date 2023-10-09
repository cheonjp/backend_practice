import Blog from "../models/Blog.js"


export const postBlog = async (req,res) => {
    console.log('tset')
    try {
        const newBlog = new Blog({
            title:req.body.title,
            author:req.body.author,
            text:req.body.text
        })
        await newBlog.save()  
        res.status(200).json("blog posted")
        
    } catch (error) {
        res.status(500).json(error)
    }    
}