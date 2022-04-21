var Tutor = require('./Tutorial.js');
exports.NodeTutorial = function() {
    console.log('Node Tutorial from the extending module. hahahhahah');

    function pTutor() {
        var PTutor = Tutor
        PTutor.tutorial();
    }
    
}
