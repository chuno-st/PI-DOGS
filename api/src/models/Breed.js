const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('breed', {
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        height_min: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        height_max: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        height: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.height_min} - ${this.height_max}`;
            },
            set() {
                throw new Error('Do not try to set the `height` value!');
            }
        },
        weight_min: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        weight_max: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        weight: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.weight_min} - ${this.weight_max}`;
            },
            set() {
                throw new Error('Do not try to set the `weight` value!');
            }
        },
        life_span_min: {
            type: DataTypes.INTEGER,
        },
        life_span_max: {
            type: DataTypes.INTEGER,
        },
        life_span: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.life_span_min} - ${this.life_span_max} years`;
            },
            set() {
                throw new Error('Do not try to set the `life_span` value!');
            }
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        timestamps: false
    });
};
