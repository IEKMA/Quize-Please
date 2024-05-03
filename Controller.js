
const View = require('./View.js')
const Model = require('./model.js')

class Controller {
    static async runQuiz() {
        let counter = 0;
        const userCategory = await View.startQuiz();
        console.log(` категория "${userCategory.category}"`);
        let arrOfObjs;
    if (userCategory.category === 'Кофе') {
        arrOfObjs = await Model.getQuestionsAndAnswers('Coffee.txt');
      } else {
        arrOfObjs = await Model.getQuestionsAndAnswers('Ice_cream.txt');
      }
      for (const question of arrOfObjs) {
        counter = await View.pullQuestions(question, counter);
      }
      console.log(`набранно ${counter} очков`);
    }
  }

  Controller.runQuiz();

module.exports = Controller;