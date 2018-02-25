//Dir: direction
const Dir = ['NORTH','EAST','SOUTH','WEST'];
const ANGLE = {'NORTH':0,'EAST':-90,'SOUTH':180,'WEST':90};
//X direction
const EAST_BORDER = 6;
const WEST_BORDER = 2;
//Y direction
const NORTH_BORDER = 2;
const SOUTH_BORDER = 6;
const pattern = /^PLACE\s{1}\d,\d,(NORTH)|(EAST)|(WEST)|(SOUTH)$/;
export {instructions,Dir,EAST_BORDER,NORTH_BORDER,SOUTH_BORDER,WEST_BORDER,pattern,ANGLE}
