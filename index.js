const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(
	'Welcome to ' +
		chalk.green.bold('F') +
		chalk.red.bold(' R') +
		chalk.blueBright.bold(' I') +
		chalk.yellowBright.bold(' E') +
		chalk.redBright.bold(' N') +
		chalk.bold(' D') +
		chalk.greenBright.bold(' S') +
		' QUIZ!!'
);
var username = readlineSync.question(chalk.bold("What's your name? "));
console.log(chalk.yellow.bold('All the best ') + chalk.yellowBright.bold(username));
var highscore = [
	{
		name: 'Anon',
		totalScore: 12
	}
];
var sc = 0;

play = (question, answer) => {
	var usrans = readlineSync.question(question);
	if (usrans.toUpperCase() === answer.toUpperCase()) {
		console.log(chalk.green('Right!'));
		sc++;
	} else {
		console.log(chalk.redBright('Wrong!'));
	}
	//sc--;
	console.log('Your score: ' + chalk.greenBright.bold(sc));
	console.log(
		chalk.blueBright(
			'------------------------------------------------------------------'
		)
	);
};

var questions = [
	{
		ques:
			'What was the tittle of show before they settled on ' +
			chalk.green('F') +
			chalk.red('R') +
			chalk.blueBright('I') +
			chalk.yellowBright('E') +
			chalk.redBright('N') +
			chalk('D') +
			chalk.greenBright('S') +
			'?\na)Family\nb)Coffee House\nc)Six of One\nd)Mates\nYour answer: ',
		ans: 'c'
	},
	{
		ques:
			'How many sisters did Joey have?\na)7\nb)6 \nc)8 \nd)5\nYour answer: ',
		ans: 'a'
	},
	{
		ques:
			"What was Chandler's middle name?\na)Mark\nb)Muriel\nc)Reynold\nd)Terry\nYour answer: ",
		ans: 'b'
	},
	{
		ques:
			'Who peed on Monica when she got stung by a jellyfish?\na)Joey\nb)Chandler\nc)Monica herself\nd)Ross\nYour answer: ',
		ans: 'b'
	},
	{
		ques:
			"Who was Joey's stalker ?\na)Sarah\nb)Beth\nc)Erica\nd)Janine\nYour answer: ",
		ans: 'c'
	},
	{
		ques:
			"What was Rachel's cat name?\na)Mrs. Baldy\nb)Marcelia\nc)Mrs. Whiskerson\nd)Smelly cat\nYour answer: ",
		ans: 'c'
	},
	{
		ques:
			"Who was Monica's first kiss?\na)Chandler\nb)Ross\nc)Joey\nd)Richard\nYour answer: ",
		ans: 'b'
	},
	{
		ques:
			'How many times has Ross been married and divorced ?\na)married and divorced twice\nb)married twice and divorced thrice\nc)married and divorced thrice\nd)married thrice and divorced twice\nYour answer: ',
		ans: 'c'
	},
	{
		ques:
			"What was the name of Ross' first wife?\na)Susan\nb)Carol\nc)Elizabeth\nd)Janice\nYour answer: ",
		ans: 'b'
	},
	{
		ques:
			'On which game show did Joey appear in ' +
			chalk.green('F') +
			chalk.red('R') +
			chalk.blueBright('I') +
			chalk.yellowBright('E') +
			chalk.redBright('N') +
			chalk('D') +
			chalk.greenBright('S') +
			' ?\na)Jeopardy\nb)Wheel of fortune\nc)Quizzy\nd)Pyramid\nYour answer: ',
		ans: 'd'
	},
	{
		ques:
			'How many categories of towels does Monica have ?\na)10\nb)11\nc)15\nd)20\nYour answer: ',
		ans: 'b'
	},
	{
		ques:
			'For which lipstick commercial did Joey act?\na)Ichigan lipstick\nb)Ichihan lipstick\nc)Michigan lipstick\nd)Ichiban lipstick\nYour answer: ',
		ans: 'd'
	},
	{
		ques:
			"What was the name of Rachel's childhood Dog ?\na)Sky\nb)Laura\nc)Bolt\nd)LaPoo\nYour answer: ",
		ans: 'd'
	},
	{
		ques:
			'Cassie was never roommate of?\na)Joey\nb)Chandler\nc)Ross\nd)Phoebe\nYour answer: ',
		ans: 'a'
	},
	{
		ques:
			'Who sang ' +
			chalk.green('F') +
			chalk.red('R') +
			chalk.blueBright('I') +
			chalk.yellowBright('E') +
			chalk.redBright('N') +
			chalk('D') +
			chalk.greenBright('S') +
			' theme song ?\na)The Beatles\nb)The Cranberries\nc)The Rembrandts\nd)The Offspring\nYour answer: ',
		ans: 'c'
	}
];

for (var i = 0; i < questions.length; i++) {
	var x = i + 1;
	console.log('Question: ' + x);
	play(questions[i].ques, questions[i].ans);
}
console.log(
	chalk.greenBright(username) + '! You Scored ' + chalk.greenBright(sc)
);

var y = highscore.length;
//console.log(y);

for (var i = 0; i < y; i++) {
	if (highscore[i].totalScore <= sc) {
		console.log(
			'Congratulations! You have beaten ' +
				chalk.redBright.bold(highscore[i].name) +
				' with a high score ' +
				chalk.greenBright.bold(sc) +
				'/15'
		);
		console.log('You belong to Leaderboard. Send me your screenshot');
		break;
	}
}
