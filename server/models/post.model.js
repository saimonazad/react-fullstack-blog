import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: 'title is required'
    },
    category: {
        type: String,
        required: 'category is required'
    },
    slugsUrl: {
        type: String,
        required: 'slug is required',
        unique: 'slug is already exists'
    },
    thumbnail: {
        type: String
    },
    article: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
})

PostSchema
    .virtual('slugs')
    .set(function (slugs) {
        this._slugs = slugs
        this.slugsUrl = generateSlugs(slugs)
    })
    .get(function () {
        return this._slugs
    })

PostSchema.methods = {
    generateSlugs: function (slugs) {
        if (!slugs) return ''
        try {
            return slugs.split(" ").join("-") + "-" + Math.round((new Date().valueOf() * Math.random()))
        } catch (err) {
            return ''
        }
    }
}

export default mongoose.model('Post', PostSchema)