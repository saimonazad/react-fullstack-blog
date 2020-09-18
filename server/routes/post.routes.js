import express from 'express'
import postCtrl from '../controllers/post.controller'
import authCtrl from '../controllers/auth.controller'


const router = express.Router()

router.route('/api/posts')
    .get(postCtrl.listPosts)
    .post(postCtrl.createPost)

router.route('/api/posts/:postId')
    .get(postCtrl.read)
    .put(authCtrl.requireSignin, postCtrl.updatePost)
    .delete(authCtrl.requireSignin, postCtrl.removePost)

router.param('postId', postCtrl.postByID)

export default router