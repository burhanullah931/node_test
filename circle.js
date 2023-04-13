
class Circle {
    area(r){
        return 2 * Math.PI * r*r;
    }
    circum(r){
        return 2 * Math.PI * r;
    }
}

module.exports = Circle;


// exports.area = function() {
//     console.log('this is from circle js file')
// }