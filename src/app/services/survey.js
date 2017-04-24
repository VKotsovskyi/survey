export default class servicesSurvey {
  constructor($http, $q) {
      'ngInject';
      this._$http = $http;
      this._$q = $q;
  }
    get () {
        const url = '/questions.json';
        let deferred = this._$q.defer();
        this._$http.get(url).then(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }
};