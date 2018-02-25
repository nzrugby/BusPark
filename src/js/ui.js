import '../css/buspark.css'
import instructions from './instructions.json'
// construct bus area including valid park area and invalid park area
var busArea= document.querySelector('.frame');
var step = 42;
for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        var div = generateDiv(i,j,step);
        busArea.appendChild(div);
    }
}

function generateDiv(x,y,length){
    var div = document.createElement("div");
    div.style.top = i*length + 'px';
    div.style.left = j*length + 'px';
    div.className = (x>=2 && x<=6 && y>=2 && y<=6) ? 'parkArea' : 'noParkArea'
    return div;
}

// create output console
var output = document.createElement('div');
output.className = 'output';
busArea.appendChild(output);

// create car UI element 
var car = document.createElement('div');
car.className = 'car';
busArea.appendChild(car);

var testOptions = document.createElement('select');
testOptions.className = 'testSelect';
var optionsKeys = Object.keys(instructions);
var optList = optionsKeys.map(function(op){return `<option value=${op}>TEST${op}</option>`});
optList.unshift(`<option value=${optionsKeys[0]}>Select Test</option>`);
testOptions.innerHTML = optList;
document.getElementById('test').appendChild(testOptions);

export {busArea,output,testOptions}
