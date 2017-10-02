const {Bookmark} = require('../models')

module.exports = {
	async index (req, res) {
		try {
			const {songId, userId} = req.query
			const bookmark = await Bookmark.findOne({
				where: {
					SongId: songId,
					UserId: userId
				}
			})
			res.send(bookmark)
		} catch (err) {
			res.status(500).send({
				error: 'Error occured, trying to fetch the bookmark'
			})
		}
	},
	async post (req, res) {
		try {
			
			const {songId, userId} = req.body
			// console.log(req.body)
			const bookmark = await Bookmark.findOne({
				where: {
					SongId: songId,
					UserId: userId
				}
			})

			if (bookmark) {
				return res.status(400).send({
					error: 'You already have it bookmarked!'
				})
			}

			const newBookmark = await Bookmark.create({
					SongId: songId,
					UserId: userId
				})
			res.send(newBookmark)
		} catch (err) {
			res.status(500).send({
				error: 'Error occured, trying to create the bookmark'
			})
		}
	},
	async delete (req, res) {
		try {
			const {bookmarkId} = req.params
			const bookmark = await Bookmark.findById(bookmarkId)
			await bookmark.destroy()
			res.send(bookmark)
		} catch (err) {
			res.status(500).send({
				error: 'Error occured, trying to delete the bookmark'
			})
		}
	},
}