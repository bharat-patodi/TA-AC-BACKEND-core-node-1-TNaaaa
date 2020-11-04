// write functions to calculate area of square, rectangle and circle and export them using module.exports
module.exports = {

    areaSquare(side) {
        return side*side;
    },

    areaRectangle(length, breadth) {
        return length*breadth;
    },

    areaCircle(radius) {
        return Math.PI*radius*radius;
    }

}