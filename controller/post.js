const posts = [
    { id: 1, title: 'orange' },
    { id: 2, title: 'tina' },
    { id: 3, title: 'fiona' },
]

// @route /api/post
const getPosts = (req, res) => {
    // console.log(req.query)

    const limit = parseInt(req.query.limit)

    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit))
    } else {
        res.status(200).json(posts)
    }
}

// @route /api/post/:id
const getPost = (req, res, next) => {
    // console.log(req.params)

    const id = parseInt(req.params.id)
    const post = posts.find(x => x.id == id)

    if (!post) {
        const error = new Error('post not found')
        error.status = 404
        return next(error)
    }

    res.json(post)
}

// @route /api/post
const createPost = (req, res) => {
    // console.log(req.body)

    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        return res.status(400).json({ message: 'no title' })
    }

    posts.push(newPost)

    res.status(201).json(posts)
}

export { getPost, getPosts, createPost }