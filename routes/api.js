var express = require('express');
var router = express.Router();

var data = [
		{id: 1, goal: "[코딩] Feeld 개발 (contents controllbar.. )"},
		{id: 2, goal: "[운동] 머리 가슴 배 3세트"},
		{id: 3, goal: "신한은행"},
		{id: 4, goal: "교수님 미팅 준비"},
		{id: 5, goal: "[게임] 파판 레벨업"},
		{id: 6, goal: "[코딩,독서] 코딩의 기술 읽기"},
		{id: 7, goal: "[독서] 수학이 좋아지는 수학 읽기"},
		{id: 8, goal: "[영어] 영어 공부 1회"},
	];
/* GET todos list */
router.get('/todos', function(req, res, next) {
	res.json(data);
});

module.exports = router;
