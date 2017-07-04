'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.d279013f-5025-4a52-aa14-8c34a7d1e81b";

var SKILL_NAME = "Fun Russia Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say Tell me a fact about russia, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "The word vodka derives for the word voda, which means water.",
    "Moscow's underground is perhaps the world's most beautiful. It is also the fastest means of transport. During rush hour, trains are scheduled for every 90 seconds. It is estimated that over 9 million passengers ride the Meto every day. The Metro of St. Petersburg is also the deepest subway in the world, clocking in at a whopping 100 meters deep.",
    "There are approximately ten million more women in Russia than there are men. The imbalance was initially believed to the result of so many men dying during World War Two.",
    "The Trans-Siberian Railway spans almost all the way across the county, making it the single longest railway in the world.",
    "Recently, some Russian restaurants have stopped using the word borscht — instead opting to say beet root soup — because the word borscht is Ukrainian.",
    "Postnik Yakovlev is best known as the man behind St Basil's Cathedral. Legend has it that Ivan the Terrible blinded him afterwards, so he could never build anything to rival it.",
    "Russia used to have 11 time zones but cut it down to nine in 2010.",
    "Russia is home to the largest McDonalds restaurant in the world. With seven hundred seats.",
    "Moscow has more billionaire residents than any other city in the world. There are a total of seventy four billionaires living in the popular city, which is exactly three more than the second-place city, New York.",
    "Russia is the largest country in the world by area. It’s total area is seventeen million and seventy five thousand square kilometers and it covers more than a ninth of the Earth’s land area. The area of the land in Russia is almost twice as large than the total size of the United States.",
    "You can visit Russia without applying for a visa by taking a short cruise by ferry from Helsinki to Saint Petersburg.",
    "Russia is home to Europe’s longest river, the Volga, at 3 thousand and 690 kilometers or 2 thousand and 293 miles. It has more than 200 tributaries that, if counted with the main river, would add up to 357 thousand kilometers or 221 thousand miles.",
    "Russia’s hard labour camps, known as gulags, could soon be turned into tourist camps. The controversial plan to attract visitors was announced last year by the regional tourist department in the Sakha Republic, in eastern Siberia.",
    "The name Red Square has nothing to do with communism, but derives from the word krasnyi, which once meant beautiful",
    "Giving flowers to residents in Russia can be a delicate point of etiquette. You should always make sure you give them in odd numbers, unless going to a funeral, when even numbers are the rule.",
    "Russians are the world's fourth biggest drinkers, according to statistics, behind Belarus, Moldova and Lithuania. Britain comes twenty fifth.",
    "Russian lake Baikal is the largest freshwater lake in the world. It reaches one thousand and 642 metres or five thousand and 387 feet in depth and contains around twenty percent of the world’s unfrozen fresh water.",
    "The Soviet Union dissolved after a failed coup in 1991, producing Russia and 14 independent republics—with Russian minorities totaling some 20 million.",
    "Russia has 87 billion barrels of proven oil reserves; enough to last it another 75 years.",
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};