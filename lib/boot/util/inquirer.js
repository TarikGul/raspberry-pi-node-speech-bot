const inquirer = require('inquirer');

module.exports = {
    askBotSelection: () => {
        const questions = [
            {
                type: 'list',
                name: 'Bot-Selection',
                message: 'Pick which bot you wish to hear a response from.',
                choices: ['WeatherBot', 'GreetingBot']
            }
        ];

        return inquirer.prompt(questions);
    }
}