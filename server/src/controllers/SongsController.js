const {Song} = require('../models')

module.exports = {
	async index (req, res) {
		try {
			let songs = null
			const search = req.query.search
			if (search) {
				songs = await Song.findAll({
					where: {
						$or: [
							'title', 'artist', 'genre', 'album'
						].map(key => ({
							[key]: {
								$like: `%${search}%`
							}
						}))
					}
				})
				// console.log('Executed search, key')
			} else {
				songs = await Song.findAll({
					limit: 10
				})
			}

			res.send(songs)
		} catch (err) {
			res.status(500).send({
				error: 'Error occured, trying to fetch the songs'
			})
		}
	},
	async insert (req, res) {
		try {
			const song = await Song.create(req.body)
			res.send(song)
		} catch (err) {
			res.status(500).send({
				error: 'Error: trying to create a song'
			})
		}
	},
	async show (req, res) {
		try {
			const song = await Song.findById(req.params.songId)
			res.send(song)
			//console.log(song)
		} catch (err) {
			res.status(500).send({
				error: 'Error: cannot show info of requested song!'
			})
		}
	},
	async update (req, res) {
		try {
			const song = await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			})
			res.send(song)
			//console.log('SOng ID: ', req.params.songId)
		} catch (err) {
			res.status(500).send({
				error: 'Error: cannot update info of requested song!'
			})
		}
	}
}
