let resultCount = 0;
let currentQuestion = 0;

function initTest() {
	document.getElementById('js-totalQuestionCount').innerText = questions.length;
	setOuestionData();
}

function setOuestionData() {
	document.getElementById('js-questionText').innerText = questions[currentQuestion].questionText;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	document.getElementById('js-answers').innerHTML = getAnswersMarkDown(questions[currentQuestion].answers);
}

function getAnswersMarkDown(answers) {
	let result = ''; 

	answers.forEach(answer =>{
		result = result + '<li><button onclick="onAnswerClick(' + answer.value + ')"> ' + answer.answerText + '</button></li>';
	})

	return result;
}

function onAnswerClick(answerValue) {
	resultCount += answerValue;
	currentQuestion++;

	if (currentQuestion < questions.length) {
		setOuestionData();
	} else {
		showResult();
	}
}

function showResult() {
	document.getElementById('js-question').classList.add('-hidden');
	document.getElementById('js-result').classList.remove('-hidden');

	let result;

	console.log(resultCount)

	if (resultCount < 4) {
		result = resultData.sasuke;
	} else if (resultCount < 6) {
		result = resultData.hidan;
	} else if ( resultCount < 9) {
		result = resultData.shikamaru; 
	} else {
		result = resultData.naruto;
	}

	document.getElementById('js-resultImage').src = result.resultImage;
	document.getElementById('js-resultTitle').innerText = result.resultTitle;
	document.getElementById('js-resultDescription').innerText = result.resultDesc;
	document.getElementById('js-resultShare').innerHTML = VK.Share.button(
		{
			url: 'тут будет что-то что ведёт кудато',
			title: result.resultTitle,
			image: result.resultImage,
			noparse: true
		},
		{
			type: 'link',
			text: 'Текст кнопки'
		}	
	);
}

function restartTest() {
	document.getElementById('js-result').classList.add('-hidden');
	resultCount = 0;
	currentQuestion = 0;
	initTest();
	document.getElementById('js-question').classList.remove('-hidden');
}

function startTest() {
	document.getElementById('js-hello').classList.add('-hidden');
	document.getElementById('js-question').classList.remove('-hidden');
	initTest();
}

