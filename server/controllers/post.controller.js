import Post from '../models/post.model'
import errorHandler from '../helpers/dbErrorHandler'
import { extend } from 'lodash'

const createPost = async (req, res) => {
    const post = new Post(req.body)
    try {
        await post.save()
        return res.status(200).json({
            message: "Successfully published post!"
        })
    } catch (err) {
        return res.status('400').json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const listPosts = async (req, res) => {
    try {
        let posts = await Post.find()
        res.json(posts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const postByID = async (req, res, next, id) => {
    try {
        let post = await Post.findById(id)
        if (!post)
            return res.status('400').json({
                error: "Post not found"
            })
        req.post = post
        next()

    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve post"
        })
    }
}

const read = (req, res) => {
    req.post.slugs = undefined
    return res.json(req.post)
}

const updatePost = async (req, res) => {
    try {
        let post = req.post
        post = extend(post, req.body)
        post.updatedAt = Date.now()
        await post.save()
        res.json(post)

    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const removePost = async (req, res) => {
    try {
        let post = req.post
        let deletedPost = await post.remove()
        deletedPost.slugs = undefined
        res.json("post deleted successfully")
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { createPost, postByID, listPosts, removePost, updatePost, read }