# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Business.destroy_all
Review.destroy_all
BusinessHour.destroy_all

demo_user = User.create!(
    first_name: "Long",
    last_name: "Chen",
    email: "longchen@email.com",
    password: "longchen"
)

user1 = User.create!(
    first_name: "Jack",
    last_name: "Bush",
    email: "jb@email.com",
    password: "longchen"
)

user2 = User.create!(
    first_name: "Kelly",
    last_name: "Goodman",
    email: "kellyg@email.com",
    password: "longchen"
)

user3 = User.create!(
    first_name: "Theresa",
    last_name: "James",
    email: "tjames@email.com",
    password: "longchen"
)

business1 = Business.create!(
    name: "Texas Roadhouse",
    website: "https://www.texasroadhouse.com/locations/pennsylvania/bensalem",
    phone: "(215)639-7427",
    address: "1545 Street Rd Bensalem, PA 19020"
)

review1_1 = Review.create!(
    body: "Our food was delicious and our waitress was fabulous! Very helpful and friendly. We shared appetizers and I had the steak salad and my steak was cooked just right! And, the veggies and blue cheese crumbles were all cool and fresh! My Mom, sister, and Niece all enjoyed their meals, too! Sirloin tips, sirloin steak, chicken tenders and shrimp! They enjoyed their margaritas but just wished they were more frozen. The staff who helped serve the food were all friendly, too - service with a smile and humor :0)",
    user_id: user1.id,
    business_id: business1.id,
    stars: 5,
)

review1_2 = Review.create!(
    body: "First time here in years. They don't do reservations at all but they do something called a waitlist where you can sit in your car and be waitlisted your be seated. It was extremely busy for a Thursday night but we were seated within the 15 minutes we were waitlisted for. Our booth was in a back corner which is an inconvenient spot for both patrons and waiters/waitresses. I'm not big on restaurants like this but the kids like it. We asked for more bread but never got it. 3 of us got steak, one got ribs. We also had the blooming onion called something these which was my favorite thing there. Everything is average. Steaks were cooked as ordered which is an accomplishment for some places. They don't have the peanuts right now as well due to Covid which my son was looking forward to but oh well no biggie.",
    user_id: user2.id,
    business_id: business1.id,
    stars: 3,
)

review1_3 = Review.create!(
    body: "Overall, the food was good. The steaks were cooked just the way we ordered and it all came out within 20 minutes of ordering which was pleasantly surprising. Have I had better? Yes, of course I have but I've also had much worse from their chain in NJ.",
    user_id: user3.id,
    business_id: business1.id,
    stars: 4,
)

business_hour1 = BusinessHour.create!(
    business_id: business1.id,
    monday_hour: "11:00 AM - 10:00 PM",
    tuesday_hour: "11:00 AM - 10:00 PM",
    wednesday_hour: "11:00 AM - 10:00 PM",
    thursday_hour: "11:00 AM - 10:00 PM",
    friday_hour: "11:00 AM - 10:00 PM",
    saturday_hour: "11:00 AM - 10:00 PM",
    sunday_hour: "11:00 AM - 10:00 PM"
)
