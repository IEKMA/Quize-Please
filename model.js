const { log } = require("console");
const fs = require("fs").promises;

class Model {
  static async getQuestionsAndAnswers(path) {
    const text = await fs.readFile(`./topics/${path}`, "utf-8");
    const arr = text.split("\n");
    console.log(arr);

    const arrFromTxt = [];
    for (let i = 0; i < arr.length-2; i += 3) {
      const objFromTxt = {};
      const question = arr[i];
      const correctAnsw = arr[i + 1];
      const answer = arr[i + 2];

      if (question && correctAnsw) {
        objFromTxt.question = question;
        objFromTxt.correctAnsw = correctAnsw;
        objFromTxt.answer = answer.split(', ');
        arrFromTxt.push(objFromTxt)
      }
    } 
    return arrFromTxt
  }
}

console.log(Model.getQuestionsAndAnswers("nighthawk_flashcard_data.txt"));

module.exports = Model;
