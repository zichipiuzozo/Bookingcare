'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'admin@gmail.com',
                password: '123456',
                firstName: 'Tuan',
                lastName: 'Anh',
                address: 'BG',
                phonenumber: '0913424281',
                gender: 1,
                image: 'aewefwh1231231',
                roleId: 'R1',
                positionId: 'P1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
