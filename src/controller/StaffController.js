import Ticket from '../model/Ticket.js';

import Order from "../model/Order.js";
import { parseToken } from '../utils/JwtVerifier.js';
class StaffController {
    async createOrder(req, res) {
        const { foods, drinks, tickets } = req.body;
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Bearer token missing or invalid',
            });
        }
        const token = authorizationHeader.split(' ')[1];
        const { id, role } = parseToken(token);

        try {
            console.log('1');
            // Create the order
            const order = new Order({
                food: null,
                drink: null,
                ticket: [],
                totalPrice: 0, // Set the initial total price
                createdAt: new Date(),
                staff: id
            });

            const purchasedFoods = foods.map((food) => ({
                item: food.item._id,
                quantity: food.quantity,
            }));

            const purchasedDrinks = drinks.map((drink) => ({
                item: drink.item._id,
                quantity: drink.quantity,
            }));

            const purchasedTickets = tickets.map((ticket) => ticket._id)

            order.foods = purchasedFoods;
            order.drinks = purchasedDrinks;
            order.tickets = purchasedTickets;

            console.log('purhchasedFoods: ');
            console.log(purchasedFoods);
            console.log('purchasedDrinks: ');
            console.log(purchasedDrinks);


            console.log("2");
            // Calculate the total price
            const foodPrices = foods.reduce(
                (total, food) => total + food.item.price * food.quantity,
                0
            );
            const drinkPrices = drinks.reduce(
                (total, drink) => total + drink.item.price * drink.quantity,
                0
            );
            const ticketPrices = tickets.reduce(
                (total, ticket) => total + ticket.price,
                0
            )


            order.totalPrice = foodPrices + drinkPrices + ticketPrices;

            console.log('3');
            console.log('order: ');
            console.log(order);

            // Save the order
            await order.save();


            console.log('4');
            // Update ticket status to "purchased"
            await Ticket.updateMany(
                { _id: { $in: tickets.map((ticket) => ticket._id) } },
                { $set: { status: "purchased" } }
            );

            // Send success response
            const response = {
                success: true,
                message: "Order created successfully",
                order,
            };
            res.status(200).json(response);
        } catch (err) {
            // Send error response
            const response = {
                success: false,
                message: err.message,
            };
            res.status(400).json(response);
        }
    }


    async getOrderHistory(req, res) {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Bearer token missing or invalid',
            });
        }
        const token = authorizationHeader.split(' ')[1];
        const { id, role } = parseToken(token);

        try {
            //
            const orders = await Order.find({ staff: id })
                .populate({
                    path: 'tickets',
                    populate: {
                        path: 'movieShowtime',
                        select: 'showtimeDate showtimeSpot',
                        populate: {
                            path: 'movie',
                            select: 'title poster'
                        }
                    }
                })
                .exec();

            const orderDetails = orders.map(order => {
                const movieShowtime = order.tickets[0].movieShowtime // all tickets of the same order will have the same movieShowtime
                const movie = movieShowtime.movie
                return {
                    _id: order._id,
                    foods: order.foods,
                    drinks: order.drinks,
                    tickets: order.tickets.map(ticket => ticket._id),
                    totalPrice: order.totalPrice,
                    createdAt: order.createdAt,
                    staff: order.staff,
                    showtimeDate: movieShowtime.showtimeDate,
                    showtimeSpot: movieShowtime.showtimeSpot,
                    movie: movie
                }
            })


            const response = {
                success: true,
                message: "Get order history successfully",
                data: orderDetails.reverse() // the lastest order is on top
            }

            res.status(200).json(response);

        } catch (err) {
            // Send error response
            const response = {
                success: false,
                message: err.message,
            };
            res.status(400).json(response);
        }
    }

    // view order history
}


export default new StaffController();