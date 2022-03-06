const express = require("express");
const router = express.Router();
const {isLogin} = require("../middlewares/auth")
const BoardController = require("../controllers/boardController")

router.get("/:teamId", isLogin, BoardController.getBoards)
router.post("/:teamId", isLogin, BoardController.createBoard)

router.get("/members/:boardId", isLogin, BoardController.getBoardMembers)
router.get("/members/:boardId/member", isLogin, BoardController.getOneUser)
router.put("/members/:boardId/member", isLogin, BoardController.inviteMembers)

router.get("/board/:boardId", isLogin, BoardController.getBoardDetail)

router.post("/:boardId/list", isLogin, BoardController.createList)
router.put("/:boardId/:listId/rename", isLogin, BoardController.renameList)
router.put("/:boardId/:listId/archive", isLogin, BoardController.archiveList)
router.post("/:boardId/:listId/copy", isLogin, BoardController.copyList)

module.exports = router