import ProductRouter from './product.js';
import CategoryRouter from './category.js';

export function route(app){
    // Create a data object to pass to the template
    const data = {
        name: 'Alice',
        address: {
            city: 'Hanoi',
            country: 'Vietnam'
        },
        hobbies: ['reading', 'coding', 'traveling']
    };
    app.use('/product', ProductRouter)

    app.use('category', CategoryRouter)

    app.get('/', (req, res) => {
        res.render('home', data);
    });

}