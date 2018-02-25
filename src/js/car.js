import {Dir,EAST_BORDER,NORTH_BORDER,SOUTH_BORDER,WEST_BORDER} from './const.js'
import {output} from './ui.js'

var Car = function(){
    var X = 0,Y = 0;
    var direction = "NORTH";
    var cellLength = 42;
    var angle = 0;
    var insideCarPark = false;
    var car = document.querySelector('.car');

    // every time when start button clicked the car will be reseted to original location and status
    this.reset = function(){
        place(0,0,"NORTH");
        insideCarPark = false;
        angle = 0;
        car.style.transform = `rotate(${angle}deg)`;
    }
    // accept instruction from control system
    this.instruction = function(cmd){ 
        console.log(cmd);
        var instrs = cmd.replace(" ",",").split(",");
        if(instrs.indexOf('PLACE')>=0){
            place(instrs[1],instrs[2],instrs[3])
        }
        else{
            var fun = insideCarPark? cmd.toLowerCase()+"()":"";
            eval(fun);
        }
        showReport(cmd);
    }
    // private function to show real-time data and report
    function showReport(cmd){
        output.innerHTML = `Real-time data:<br>
                            Current instruction:  ${cmd}<br>
                            Current X position:  ${X}<br>
                            Current Y position:  ${Y}<br>
                            Current Direction:  ${direction}<br>
                            Report:  ${cmd.indexOf('REPORT')>=0? [X,Y,direction]:""}
                            `;
    }
    // execute PLACE cmd
    function place(x,y,d){
        X = parseInt(x);
        Y = parseInt(y);
        direction = d;
        car.style.top = Y*cellLength + 'px';
        car.style.left = X*cellLength + 'px';
        if(X>= WEST_BORDER && X<=EAST_BORDER && Y>=NORTH_BORDER && Y<=SOUTH_BORDER){
            insideCarPark = true;
        }
    }
    // execute LEFT cmd
    function left(){
        angle -= 90;
        direction = Dir[(Dir.indexOf(direction)+3)%4];
        car.style.transform = `rotate(${angle}deg)`;
    }
    // execute RIGHT cmd
    function right(){
        angle +=90;
        direction = Dir[(Dir.indexOf(direction)+1)%4];
        car.style.transform = `rotate(${angle}deg)`;
    }
    // execute MOVE cmd
    function move(){
        var step = 1;
        switch(direction){
            case 'NORTH': if((Y - step)>=NORTH_BORDER){Y -= step;car.style.top = Y*cellLength + 'px';};break;
            case 'EAST' : if((X + step)<=EAST_BORDER){X += step;car.style.left = X*cellLength + 'px';};break;
            case 'SOUTH': if((Y + step)<=SOUTH_BORDER){Y += step;car.style.top = Y*cellLength + 'px';};break;
            case 'WEST' : if((X - step)>=WEST_BORDER){X -= step;car.style.left = X*cellLength + 'px';};break;
            default: break;
        }
    }
     // execute REPORT cmd
    function report(){
        console.log( [X,Y,direction] );
    }
}

export default Car; 
