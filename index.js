

import './jasmine/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';



import './jasmine/js-test.spec.js'

(function bootstrap () {
  jasmine.getEnv().configure({random: false});
  
  if (window.jasmineRef) {
    location.reload();
    return;
  }

  window.onload(new Event(undefined));
  window.jasmineRef = jasmine.getEnv();
  


  //env.stopOnSpecFailure(true);
  //env.throwOnExpectationFailure(true);

}());
