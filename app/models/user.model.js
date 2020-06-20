module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('users', {   
        firstname: {
            type: Sequelize.STRING, allowNull: false
        },
        lastname: {
            type: Sequelize.STRING, allowNull: false
        },
        email: {
            type: Sequelize.STRING, allowNull: false, unique : true
        },
        isauthor:{
            type: Sequelize.BOOLEAN, allowNull:false, default : false
        }
    
      });

    return User;  
};