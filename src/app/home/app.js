import angular from 'angular';

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

      servicesSurvey.get().then(
          (stages) => this.stages = stages
      );

  }

}

const MODULE_NAME = 'app.home';

const homeModule = angular.module(MODULE_NAME, [

])
  .component('survey', app)
  .controller('AppCtrl', AppCtrl);

export default homeModule;