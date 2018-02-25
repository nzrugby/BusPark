import {Dir,EAST_BORDER,NORTH_BORDER,SOUTH_BORDER,WEST_BORDER} from './const.js'
import {output} from './ui.js'

var Car = function(){
    //initial value
    var X = 0,Y = 0, direction = "NORTH;
    //real distance for car to move in webpage
    var cellLength = 42;
    //for car rotation
    var angle = 0;
    //to judge if bus is inside carpark
    var insideCarPark = false;
    var car = document.querySelector('.car');

    // every time when start button clicked the car will be reseted to original location and status
    this.reset = function(){
        insideCarPark = false;
        setCarPosition(0,0,"NORTH");
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
    
    // execute PLACE cmd. d represent direction like "WEST" .etc.
    function place(x,y,d){
        X = parseInt(x);
        Y = parseInt(y);
        if(isInsidCarPark(X,Y)){
            insideCarPark = true;
            setCarPosition(X,Y,d);
        }
    }
    
    // set car position. called by reset and place 
    function setCarPosition(x,y,d){
        direction = d;
        car.style.top = y*cellLength + 'px';
        car.style.left = x*cellLength + 'px';
    }
    
    function isInsidCarPark(x,y){
        return x>= WEST_BORDER && x<=EAST_BORDER && y>=NORTH_BORDER && y<=SOUTH_BORDER
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
