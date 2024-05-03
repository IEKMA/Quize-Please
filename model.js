const { log } = require("console");
const fs = require("fs").promises;

class Model {
  static async getQuestionsAndAnswers(path) {
    const text = await fs.readFile(`./topics/${path}`, "utf-8");
    const arr = text.split("\n");

    const arrFromTxt = [];
    for (let i = 0; i < arr.length - 2; i += 3) {
      const objFromTxt = {};
      const question = arr[i].trim();
      const value  = arr[i + 1].trim();
      const choices  = arr[i + 2];

      if (question && value ) {
        objFromTxt.question = question;
        objFromTxt.answer= value ;
        objFromTxt.choices = choices.split(", ");
        arrFromTxt.push(objFromTxt);
      }
    }
    return arrFromTxt;
  }
}

module.exports = Model;
