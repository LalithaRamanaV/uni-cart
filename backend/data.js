import bcrypt from 'bcryptjs';

const data = {
users: [
    {
      name: 'Lalitha',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'test',
      email: 'test@user.com',
      password: bcrypt.hashSync('111111'),
      isAdmin: false,
    }
  ],
    products: [
        {
            // _id:"1",
            name: 'Women',
            slug: 'Women',
            category: 'Daniel Willington',
            image:'/images/image1.png',
            price: 2000,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.8,
            numReviews: 10,
            description: 'High quality'
        },
        {
          
          name: 'Watch',
          slug: 'Watch',
          category: 'Watches',
          image:'/images/image1.png',
          price: 3000,
          countInStock: 15,
          brand: 'Nike',
          rating: 4.8,
          numReviews: 10,
          description: 'High quality'
      },
      
        {
            // _id:"3",
            name: 'watch-women',
            slug: 'watch-women',
            category: 'Watches',
            image:'/images/image1.png',
            price: 4000,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.8,
            numReviews: 10,
            description: 'High quality'
        },
        {
            // _id:"4",
            name: 'Women Watch',
            slug: 'Women Watch',
            category: 'Daniel Willington',
            image:'/images/image1.png',
            price: 5000,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.8,
            numReviews: 10,
            description: 'High quality'
        },
        {
          // _id:"5",
          name: 'Women Watch',
          slug: 'Women Watch',
          category: 'Daniel Willington',
          image:'/images/image1.png',
          price: 5000,
          countInStock: 0,
          brand: 'Nike',
          rating: 4.8,
          numReviews: 10,
          description: 'High quality'
      }
    ]
}
export default data;