import $ from 'jquery';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';
import './slider';
import './counters';
import './navigation';
import './map';
import './wow';

$(document).ready(function() {
  svg4everybody({});
  console.log($);
  console.log('Hello webpack v4.35.3!');
});
