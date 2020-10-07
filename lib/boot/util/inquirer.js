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
    },

    askForCityId: () => {
        const questions = [
            {
                name: 'cityId',
                type: 'input',
                message: 'Enter the cities ID that you would like the weather of, or just press enter for San Francisco.',
                default: 5391959
            }
        ];
        
        return inquirer.prompt(questions);
    }
}