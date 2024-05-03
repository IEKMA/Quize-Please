const inquirer = require('inquirer')

const fs = require ('fs').promises



class View {
    static async startQuiz() {
        return inquirer
          .prompt([
            {
              type: 'list',
              name: 'category',
              message: 'Выберите категорию',
              choices: [
                'Кофе',

                

                'мороженное'

              ],
            }
          ]);
      }
      static async pullQuestions({ question, answer, choices }, counter){
               let userAnswer = await inquirer.prompt([{
               type: 'list',
               name: 'userAnswer',
               message: question,
               choices,
             }
           ]);        
         if (userAnswer.userAnswer.trim().toLowerCase() === answer.toLowerCase()) {

            console.log(chalk.green('Правильно'));
            counter += 10;
          } else {
            console.log(chalk.red('Не верно'));
            console.log(`Правильный ответ: ${chalk.green(answer)}`);



          }
          return counter;
        }
    }
module.exports = View