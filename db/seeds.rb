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
    phone: "(215) 639-7427",
    address: "1545 Street Rd Bensalem, PA 19020",
    longitude: -74.94003325978738,
    latitude: 40.09179579481741,
    city: "Bensalman",
    state: "PA",
    price: 2,
    categories: "American Mexican Steak",
    claimed: true
)

file1_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/texasroadhouse0.jpg')
file1_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/texasroadhouse1.jpg')
file1_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/texasroadhouse2.jpg')
file1_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/texasroadhouse3.jpg')
file1_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/texasroadhouse4.jpg')

business1.photos.attach(io: file1_1, filename: "texasroadhouse1.jpg")
business1.photos.attach(io: file1_2, filename: "texasroadhouse2.jpg")
business1.photos.attach(io: file1_3, filename: "texasroadhouse3.jpg")
business1.photos.attach(io: file1_4, filename: "texasroadhouse4.jpg")
business1.photos.attach(io: file1_5, filename: "texasroadhouse5.jpg")

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
    monday_hour: "111:00 AM - 10:00 PM",
    tuesday_hour: "211:00 AM - 10:00 PM",
    wednesday_hour: "311:00 AM - 10:00 PM",
    thursday_hour: "411:00 AM - 10:00 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "011:00 AM - 10:00 PM"
)

business2 = Business.create!(
    name: "K-POT Korean BBQ & Hot Pot",
    website: "http://www.kpotphilly.com/",
    phone: "(215) 709-9588",
    address: "789 Franklin Mills Cir Philadelphia, PA 19154",
    longitude: -74.96296075978744,
    latitude: 40.09264904690322, 
    city: "Philadelphia",
    state: "PA",
    price: 3,
    categories: "Korean BBQ Hot-Pot"
)

file2_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/kpot1.jpg')
file2_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/kpot2.jpg')
file2_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/kpot3.jpg')
file2_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/kpot4.jpg')
file2_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/kpot5.jpg')

business2.photos.attach(io: file2_1, filename: "kpot1.jpg")
business2.photos.attach(io: file2_2, filename: "kpot2.jpg")
business2.photos.attach(io: file2_3, filename: "kpot3.jpg")
business2.photos.attach(io: file2_4, filename: "kpot4.jpg")
business2.photos.attach(io: file2_5, filename: "kpot5.jpg")

business_hour2 = BusinessHour.create!(
    business_id: business2.id,
    monday_hour: "19:00 AM - 10:00 PM",
    tuesday_hour: "29:00 AM - 10:00 PM",
    wednesday_hour: "39:00 AM - 10:00 PM",
    thursday_hour: "49:00 AM - 10:00 PM",
    friday_hour: "59:00 AM - 10:00 PM",
    saturday_hour: "611:00 AM - 12:00 PM",
    sunday_hour: "011:00 AM - 12:00 PM"
)