import bcrypt from 'bcryptjs';

const data = {



    users:[
        {
            name:'Admin',
            email:'admin123@gmail.com',
            password:bcrypt.hashSync('admin'),
            address: 'dolmen mall, Islamabad',
            phone:'03483639202',
            //image:
        },
        {
            name:'Warda',
            email:'warda123@gmail.com',
            password:bcrypt.hashSync('admin'),
            address: 'dolmen mall, Islamabad',
            phone:'03383439202',
            //image:
        }
    ],

    category:[
        {
            name:'Fruits'

        },
        {
            name:'vegetables'
        }
    ],

    products: [
        {
            name: 'Alo',
            slug: 'grocery-alo',
            category: 'vegetables',
            image: '/images/p1.jpg',
            price: 50,
            countInStock: 30,
            rating: 4.5,
            description: 'Top quality fresh alo',
            seller: 'Warda'

        },
        {
            name: 'Onion',
            slug: 'grocery-onion',
            category: 'vegetables',
            image: '/images/p2.jpg',
            price: 60,
            countInStock: 30,
            rating: 4.5,
            description: 'Top quality fresh onion',
            seller: 'Admin'

        },
        {
            name: 'Tomato',
            slug: 'grocery-tomato',
            category: 'vegetables',
            image: '/images/p3.jpg',
            price: 50,
            countInStock: 30,
            rating: 4.5,
            description: 'Top quality fresh tomato',
            seller: 'Admin'


        },
        {
            name: 'Orange',
            slug: 'grocery-orange',
            category: 'vegetables',
            image: '/images/p4.jpg',
            price: 50,
            countInStock: 30,
            rating: 4.5,
            description: 'Top quality fresh oranges',
            seller: 'Admin'

        },


    ],
};

export default data;