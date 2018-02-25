import '../css/buspark.css'
import Car from './car.js'
import {pattern} from './const.js'
import {busArea,testOptions} from './ui.js'
import instructionTests from './instructions.json'		

var car = new Car();

var btn = document.getElementById('btnStart');
btn.addEventListener('click',()=>{
	var testIndex = getTestOption();
	car.reset();
	var instructions = preFilterInstructions(instructionTests[testIndex])
	startPark(instructions);
})

function getTestOption(){
	var index = testOptions.selectedIndex;
	return testOptions.options[index].value;
}  

function preFilterInstructions(instructions){
	return instructions.split(";"); 
}

function startPark(instructions){
	// use regex to find the first valid PLACE cmd in cmd sequence
	while(!pattern.test(instructions[0])){
		// take instructions as queue and always remove the first element if it's not right one'
		instructions.shift();
	}
	//execute the valid instructions sequence
	instructions.map(function(instruction,index){setTimeout( car.instruction,(index+1)*1000,instruction)}); 
}
		
