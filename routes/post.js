import express from 'express'
import { getPost, getPosts, createPost } from '../controller/post.js'

const router = express.Router()

const logger = (req, res, next) => {
    console.log(`${req.method}`)
    next()
}

router.get('/', logger, getPosts)

router.get('/:id', getPost)

router.post('/', createPost)

export default router