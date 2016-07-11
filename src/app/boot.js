import angular from 'angular';
import main from './main.module';

angular.element(document)
  .ready(function () {
    var body = document.getElementsByTagName('body')[0];
    angular.bootstrap(body, [main.name], { strictDi: false });
  });