var express = require('express');
var router = express.Router();

/* mock data */ 
var data = [
		{id: 1, goal: "[코딩] Feeld 개발 (contents controllbar.. )", from: new Date(), to: new Date()},
		{id: 2, goal: "[운동] 머리 가슴 배 3세트", from: new Date(), to: new Date()},
		{id: 3, goal: "신한은행", from: new Date(), to: new Date()},
		{id: 4, goal: "교수님 미팅 준비", from: new Date(), to: new Date()},
		{id: 5, goal: "[게임] 파판 레벨업", from: new Date(), to: new Date()},
		{id: 6, goal: "[코딩,독서] 코딩의 기술 읽기", from: new Date(), to: new Date()},
		{id: 7, goal: "[독서] 수학이 좋아지는 수학 읽기", from: new Date(), to: new Date()},
		{id: 8, goal: "[영어] 영어 공부 1회", from: new Date(), to: new Date()}
	];

var logs = [];

/* GET todos list */
router.get('/todos', function(req, res, next) {
	res.json(data);
});

/* GET todos list */
router.get('/todos/:id', function(req, res, next) {
	var id = req.params.id;
	var ret;
	for (var i = 0 ; i < data.length; i ++){
		if (data[i].id == id){
			ret = data[i];	
		}
	}
	res.json(ret);
});

/* Create todo list */
router.post('/todos', function(req, res, next) {
	var goal = req.body.goal;
	var from = req.body.from;
	var to = req.body.to ;

	var item = {id: data.length + 1 , goal: goal, from: from, to: to};
	data.push(item);
	res.json(item);
});

/* Delete todo list */
router.delete('/todos', function(req, res, next) {
	var selectedItems = req.body.selectedItems.split(',');
	var log = req.body.log;
	
	//delete
	for (var i = 0 ; i < data.length; i++){
		if (selectedItems.includes(data["id"]).toString()){
			data.splice(i, 1);
		}
	}

	// add log
	if (log){
		logs.push({id: logs.length + 1, log: log});	
	}
	res.json(data);
});

/* GET logs list */
router.get('/logs', function(req, res, next) {
	res.json(logs);
});


module.exports = router;
