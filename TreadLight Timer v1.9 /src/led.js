//@module
/*
  Copyright 2011-2014 Marvell Semiconductor, Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

exports.pins = {
    redLed: {type: "Digital", direction: "output"},
    purpleLed: {type: "Digital", direction: "output"},
    blueLed: {type: "Digital", direction: "output"},
};

exports.configure = function() {
    this.redLed.init();
    this.purpleLed.init();
    this.blueLed.init();
}

// ---------------------------
//   WORKING/DEFAULT FUNCTION (when only redLed is used at least)
// ---------------------------
exports.turnOn = function() {
    this.redLed.write( 1 );
    this.purpleLed.write( 1 );
    this.blueLed.write( 1 );
}
// ---------------------------
//   END OF WORKING/DEFAULT FUNCTION
// ---------------------------

exports.redTurnOn = function() {
    this.redLed.write( 0 );
    //this.purpleLed.write( 1 );
    //this.blueLed.write( 1 );
}
exports.purpleTurnOn = function() {
    //this.redLed.write( 1 );
    this.purpleLed.write( 0 );
    //this.blueLed.write( 1 );
}
exports.blueTurnOn = function() {
    //this.redLed.write( 1 );
    //this.purpleLed.write( 1 );
    this.blueLed.write( 0 );
}
		
// ---------------------------
//   WORKING/DEFAULT FUNCTION (when only redLed is used at least)
// ---------------------------
exports.turnOff = function() {
    this.redLed.write( 1 );
    this.purpleLed.write( 1 );
    this.blueLed.write( 1 );
}
// ---------------------------
//   END OF WORKING/DEFAULT FUNCTION
// ---------------------------

exports.redTurnOff = function() {
    this.redLed.write( 1 );
    //this.purpleLed.write( 0 );
    //this.blueLed.write( 0 );
}
exports.purpleTurnOff = function() {
    //this.redLed.write( 0 );
    this.purpleLed.write( 1 );
    //this.blueLed.write( 0 );
}
exports.blueTurnOff = function() {
    //this.redLed.write( 0 );
    //this.purpleLed.write( 0 );
    this.blueLed.write( 1 );
}

exports.close = function() {
	this.redLed.close();
	this.purpleLed.close();
	this.blueLed.close();
}