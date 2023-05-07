'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        student.belongsToMany(models.course, {
            through: 'enrollment',
        })
    }
  }
  student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};