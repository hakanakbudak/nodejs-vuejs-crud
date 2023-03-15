import express from 'express'
import mongoose from 'mongoose'

import Post from '../db/posts.js'

const router = express.Router()

//'localhost:5000 e get isteği >>
// yapılırsa ne olacağını belirliyoruz'
//bütün postları çekmek için

router.get('/', async (req, res) => {
    //res.json({message:'bu bir get isteği'})
    try {
        const allPosts = await Post.find()
        res.json(allPosts)
    } catch (error) {
        console.log(error)
    }
})

//tek bir postu çekmek için yaptığımız istek olacak
//gönderi oluşturma 
router.get('/:id', async (req, res) => {
    //res.json({message:'bu bir get isteği 2'})

    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if (!post) return
        res.status(200).json(post)

    } catch (error) {
        console.log(error)
    }
})

//gönderi oluşturma 
router.post('/', async (req, res) => {
    //res.json({message:'bu bir post isteği'})
    try {
        const post = req.body
        const createdPost = await Post.create(post)
        res.status(201).json(createdPost)
    } catch (error) {
        console.log(error) 
    }
})

//put isteği gönderi güncelleme isteği oalcağından
//bu istek gönderi id'ye gönderilecek
router.put('/:id', async (req, res) => {
    //res.json({ message: 'bu bir update isteği' })
    try {
        const { id } = req.params
        const { title, content, creator } = req.body

        if (mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('post bulunamadi')

        const updatedPost = { title, content, creator, _id: id }
        await Post.findByIdAndUpdate(id, updatedPost, { new: true })

        res.json(updatedPost)
    } catch (error) {
        console.log(error)
    }

})

//gönderi silme
router.delete('/:id', async (req, res) => {
    //res.json({ message: 'bu bir delete isteği' })

    try {
        const { id } = req.params
        await Post.findByIdAndRemove(id)
        res.json({ message: 'Post silindi' })

    } catch (error) {
        console.log(error)
    }

})

export default router
