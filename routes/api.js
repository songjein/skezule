var express = require('express');
var router = express.Router();

/* mock data */ 
var data = [
		{id: 1, goal: "[코딩] Feeld 개발 (contents controllbar.. )", from: new Date(), to: new Date(), isCompleted: false}, 
		{id: 2, goal: "[운동] 머리 가슴 배 3세트", from: new Date(), to: new Date(), isCompleted: false},
		{id: 3, goal: "신한은행", from: new Date(), to: new Date(), isCompleted: false},
		{id: 4, goal: "교수님 미팅 준비", from: new Date(), to: new Date(), isCompleted: false},
		{id: 5, goal: "[게임] 파판 레벨업", from: new Date(), to: new Date(), isCompleted: false},
		{id: 6, goal: "[코딩,독서] 코딩의 기술 읽기", from: new Date(), to: new Date(), isCompleted: false},
		{id: 7, goal: "[독서] 수학이 좋아지는 수학 읽기", from: new Date(), to: new Date(), isCompleted: false},
		{id: 8, goal: "[영어] 영어 공부 1회", from: new Date(), to: new Date(), isCompleted: false}
	];

var logs = [];

/* GET todos list */
router.get('/todos', function(req, res, next) {
	var ret = [];
	for (var i = 0 ; i < data.length; i++){
		// 안끝난 것들만
		if (!data[i].isCompleted)
			ret.push(data[i]);
	}
	res.json(ret);
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

/* GET todos goals */
router.get('/todosOf/:selectedTodos', function(req, res, next) {
	var selectedTodos = req.params.selectedTodos.split(',');
	var ret = [];
	for (var i = 0 ; i < data.length; i++){
		if (selectedTodos.includes(data[i]["id"].toString())){
			ret.push(data[i]);	
		}
	}
	res.json(ret);
});

/* Create todo list */
router.post('/todos', function(req, res, next) {
	var goal = req.body.goal;
	var from = req.body.from;
	var to = req.body.to ;

	var item = {id: data.length + 1 , goal: goal, from: from, to: to, isCompleted: false};
	data.push(item);
	res.json(item);
});

/* Delete(finish) todo list and write log */
router.delete('/todos', function(req, res, next) {
	var selectedTodos = req.body.selectedTodos.split(',');
	var log = req.body.log;
	var ret = [];
	
	// complete
	for (var i = 0 ; i < data.length; i++){
		if (selectedTodos.includes(data[i]["id"].toString())){
			data[i].isCompleted = true;
			ret.push(data[i]);
		}
	}

	// add log
	if (log){
		logs.push({id: logs.length + 1, log: log, selectedTodos: req.body.selectedTodos});	
	}

	res.json(ret);
});

/* GET logs list */
router.get('/logs', function(req, res, next) {
	res.json(logs);
});


module.exports = router;
