var litCircle = {
    radius: 10,

    getArea: function () {
        var self = this;

        var incRad()=function()
        {
            self.radius = 20;
        }
        incRad();
        console.log(this.radius);
        return this.radius * this.radius * 3.142;
    }
};

console.log(litCircle.getArea());
