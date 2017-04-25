import angular from 'angular';

import '../../style/question.css';

import { VALIDATION } from './validation'

let questionComponent = {
    template: require('./template.html'),
    controller: 'QuestionCtrl',
    controllerAs: 'question',
    require: {
      parent: '^survey'
    },
    bindings: {
        inputDetails : '<',
        text : '<',
        questionName : '<'
    }
};

class QuestionCtrl {
  constructor($scope, $element, $attrs) {
      this.$scope = $scope;
  };

  validate (type){
      let patternMatched = type ? VALIDATION[type].pattern.test(this.answer) : null;
      if (!type || patternMatched) {
          this.$scope.$parent.stageQuestion.answer = this.answer;
          this.error_message = ''
      } else if (type && !patternMatched){
          this.$scope.$parent.stageQuestion.answer = '';
          this.error_message = VALIDATION[type].error_message
      }
  }

}

const MODULE_NAME = 'app.question';

const questionModule = angular.module(MODULE_NAME, [

])
  .component('question', questionComponent)
  .controller('QuestionCtrl', QuestionCtrl);

export default questionModule;