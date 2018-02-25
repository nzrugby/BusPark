import '../css/buspark.css'
import Car from './car.js'
import {instructions} from './const.js'
import {busArea} from './ui.js'
		

var car = new Car();
	
var btn = document.getElementById('btnStart');
btn.addEventListener('click',()=>{
	car.reset();
	StartPark();
})

function StartPark(){
	// use regex to find the first valid PLACE cmd in cmd sequence
	var pattern = /^PLACE \d,\d,(NORTH)|(EAST)|(WEST)|(SOUTH)$/
	while(!pattern.test(instructions[0])){
		// take instructions as queue and always remove the first element if it's not right one'
		instructions.shift();
	}
	//execute the valid instructions sequence
	instructions.map(function(instruction,index){setTimeout( car.instruction,(index+1)*1000,instruction)}); 
}
		