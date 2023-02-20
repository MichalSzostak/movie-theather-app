const express = require("express");
const usersRouter = express.Router();
const { User } = require("../models/index");


usersRouter.use(express.json());

usersRouter.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users)
})

usersRouter.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
})

usersRouter.get('/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const shows = await user.getShows();
    res.json(shows);
})

usersRouter.put('/:userId/shows/:showId', async (req, res) => {
  const userId = req.params.userId;
  const showId = req.params.showId;
  const watched = req.body.watched;

  // Find the UserShow record for the user and show
  let userShow = await UserShow.findOne({ where: { userId, showId } });

  // If the record doesn't exist, create it
  if (!userShow) {
    userShow = await UserShow.create({ userId, showId, watched });
  } else {
    // Update the existing record
    userShow.watched = watched;
    await userShow.save();
  }

  // Return the updated UserShow record
  res.json(userShow);
});

module.exports = usersRouter;git 