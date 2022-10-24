const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cabins: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    draft: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuelCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    waterCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cruiseVel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fuelType: {
      type: DataTypes.STRING,
      defaultValue: "gasoline",
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    }
  });
};

// {
//   hour: 450,
//   fourHours: 1900,
//   eightHours: 2900,
//   description:
//     "This elegant 40 Sundancer is sure to get noticed. This member of the Sundancer family custom-designed instruments, plus an fiberglass hardtop. Engineered to outpace every other boat in its class, the 40 Sundancer offers a spectacular combination of style, power and grace.",
//   make: "Sea Ray",
//   model: 40,
//   year: 2014,
//   cabins: 2,
//   bathrooms: 1,
//   guests: 13,
//   length: 41,
//   beam: "",
//   draft: "",
//   fuelCapacity: "",
//   waterCapacity: "",
//   cruiseVel: "",
//   services: [
//     "Wifi",
//     "Wireless Stereo",
//     "Climate Control",
//     "Complete Kitchen",
//     "Freezer & Refrigerator",
//     "Bar",
//     "Sight Top Deck",
//   ],
//   id:0,
//   pictures: [
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809147/SEA%20RAY%2040/Sea_Ray_40_1_d2ypee.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809148/SEA%20RAY%2040/Sea_Ray_40_2_tnfh82.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809148/SEA%20RAY%2040/Sea_Ray_40_6_zujsxh.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809147/SEA%20RAY%2040/Sea_Ray_40_5_tpeb2r.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809147/SEA%20RAY%2040/Sea_Ray_40_7_y7urx6.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809147/SEA%20RAY%2040/Sea_Ray_40_4_pits34.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809147/SEA%20RAY%2040/Sea_Ray_40_8_waya1l.jpg',
//     'https://res.cloudinary.com/dnnwshf50/image/upload/v1664809147/SEA%20RAY%2040/Sea_Ray_40_3_kfespg.jpg'

//   ],
// }