import $ from 'jquery';
import 'bootstrap';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';
import './slider';
import './map';

$(document).ready(function() {
  svg4everybody({});
  console.log($);
  console.log('Hello webpack v4.35.3!');
});
