import angular from 'angular';
import _ from 'lodash';

import '../../style/app.css';


let app = {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'survey'
};

class AppCtrl {
    constructor(servicesSurvey) {
        'ngInject';
        this.servicesSurvey = servicesSurvey;
        this.activePane = 1;

        servicesSurvey.get().then(
            (stages) => this.stages = stages.data.data
        )
    }

    setPane(id) {
        this.activePane = id;
    }

    allowNext(stageId) {
        let stage = _.find(this.stages, ['id', stageId]);
        let questionLength = stage.questions.length;
        let answersLength = _.filter(stage.questions, 'answer', !null).length;
        
        return answersLength == questionLength

    }
}

const MODULE_NAME = 'app.home';

const homeModule = angular.module(MODULE_NAME, [])
    .component('survey', app)
    .controller('AppCtrl', AppCtrl);

export default homeModule;