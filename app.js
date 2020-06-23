module.exports = {
    smallCar: {
        engineSize: 4,
        fuelType: 'diesel',
    },
    calculateVehicleRating: function (vehicle) {
        let rating = 0;
        switch (vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 6;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                rating = 4;
                break;
        };

        switch(vehicle.fuelType) {
            case 'diesel':
                rating = rating + 4;
                

        }



        return rating;
    }
};
