'use strict';

if (process.env.NODE_ENV === "development") import("../index.html");
import '../css/bootstrap.min.css';
import '../css/style.min.css';

import '../images/spinner.gif';
import '../images/command/command-1a.jpg';
import '../images/command/command-2a.jpg';
import '../images/command/command-3a.jpg';
import '../images/command/command-4a.jpg';
import '../images/command/command-5a.jpg';
import '../images/command/command-6a.jpg';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import smoothScrolling from './modules/smoothScrolling';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import validations from './modules/validations';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

countTimer();
toggleMenu();
togglePopup();
smoothScrolling();
tabs();
slider();
ourTeam();
validations();
calc();
sendForm();
