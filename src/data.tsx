import { IProduct, IDrawerMenu, IService } from "./interface";

export const ServiceItems: IService[] = [
    { id: 1, title: 'Wash & Iron', image: require('./assets/images/wash-iron.png')},
    { id: 2, title: 'Ironing', image: require('./assets/images/ironing.png') },
    { id: 3, title: 'Dry Cleaning', image: require('./assets/images/dry-cleaning.png') },
]

export const MenuItem: IDrawerMenu[] = [
    { id: 1, title: 'Home', icon: 'home-outline', route: 'Home' },
    { id: 2, title: 'Profile', icon: 'account-outline', route: 'Profile' },
    { id: 3, title: 'Laundries', icon: 'cart-outline', route: 'Laundries' },
    { id: 4, title: 'offer and promo', icon: 'tag-outline', route: 'Offers' },
    { id: 5, title: 'Privacy policy', icon: 'account-key-outline', route: 'Package' },
    { id: 6, title: 'Settings', icon: 'cog-outline', route: 'Setting' },
    { id: 7, title: 'About', icon: 'information-outline', route: 'Package' }
]

export const ProductItems: IProduct[] = [
    { id: 4, title: 'T-Shirt', createAt: 'Novemaber 10.2020', image: require('./assets/images/t-shirt.png'), quantity:0, price:80, category:'male' },
    { id: 4, title: 'Shirt', createAt: 'Novemaber 10.2020', image: require('./assets/images/shirt.png'), quantity:0, price:90, category:'male' },
    { id: 1, title: 'Shorts', createAt: 'December 20.2020', image: require('./assets/images/shorts.png'), quantity:0, price:110, category:'male' },
    { id: 2, title: 'Cardigans', createAt: 'December 14.2020', image: require('./assets/images/cardigan.png'), quantity:0, price:120, category:'male' },
    { id: 3, title: 'Dresses', createAt: 'Novemaber 22.2020', image: require('./assets/images/dress.png'), quantity:0, price:150, category:'male' },
    { id: 5, title: 'Home', createAt: 'Novemaber 02.2020', image: require('./assets/images/home.png'), quantity:0, price:200, category:'male' },
    { id: 6, title: 'Jeans', createAt: 'October 22.2020', image: require('./assets/images/jeans.png'), quantity:0, price:160, category:'male' },
    { id: 7, title: 'Others', createAt: 'October 12.2020', image: require('./assets/images/others.png'), quantity:0, price:100, category:'male' }
]