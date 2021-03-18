'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')
const CategoryController = require('../app/Controllers/Http/CategoryController')

Route.on('/').render('welcome')

// routes for categories
Route.group(() => {
    Route.resource('categories', 'CategoryController').apiOnly().validator(new Map([
        [['categories.store'], ['StoreCategory']]
    ]))
}).prefix('api/v1')

