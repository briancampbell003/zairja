const router = require("express").Router();
const session = require("express-session");
const { Verse } = require("../../models");

// // CREATE new dream
// router.post("/", async (req, res) => {
//   try {
//     const dbVerseData = await Verse.create({
//       title: req.body.title,
//       content: req.body.content,
//       date: req.body.date,
//       user_id: req.session.loggedUser,
//       tag: req.body.tag,
//       private: req.body.private,
//       lucid: req.body.lucid,
//       nightmare: req.body.nightmare,
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       res.status(200).json(dbVerseData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // delete dream
// router.delete("/:id", async (req, res) => {
//   try {
//     console.log("Connected____DELETE");
//     const deletedId = req.params.id;
//     const deletedData = await Verse.destroy({
//       where: {
//         id: deletedId,
//       },
//     });
//     return res.json(deletedData);
//   } catch (err) {
//     res.send(err);
//   }
// });

module.exports = router;
