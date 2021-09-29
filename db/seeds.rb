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

user4 = User.create!(
    first_name: "Rachel",
    last_name: "Chang",
    email: "efeadf@email.com",
    password: "longchen"
)

user5 = User.create!(
    first_name: "Paul",
    last_name: "Larry",
    email: "erwr@email.com",
    password: "longchen"
)

user6 = User.create!(
    first_name: "Lisa",
    last_name: "Robinson",
    email: "wwwer@email.com",
    password: "longchen"
)

user7 = User.create!(
    first_name: "Dwight",
    last_name: "James",
    email: "a23fwffe@email.com",
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
    categories: "Korean BBQ Hot-Pot",
    claimed: true
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

review2_1 = Review.create!(
    body: "Craving hot pot? Or korean BBQ? This place has both! For an additional $3, you get both options. The place is nicely decorated and spacious. I like how they have a parking lot which makes it easier to come to this restaurant. As for the food, I wasn't a huge fan of the hot pot as the meat was very thinly sliced and in super small bites. The broth was also okay, nothing extraordinary. On the other hand, the Korean BBQ was delicious and very well marinated. There is a sauce bar as well as a dessert bar which does not offer icecream. Overall, our experience was good as our waiter was nice and attentive. Make sure that you look at your bill closely though for big parties as I still don't understand how 7 people came out to over $300 even if we had four beers.",
    user_id: user6.id,
    business_id: business2.id,
    stars: 4,
)

review2_2 = Review.create!(
    body: "it was super busy on a sunday night. we had a party of 4 plus a toddler and it was around a 45 minute wait. once we were seated, our server was kind but a little in the weeds and forgot a few things that we had to ask another server for. the kpot signature soup wasn't that tasty, and i barely touched it. the BBQ meats were good. Pork belly way too fatty, the spicy pork bulgogi and the spicy beef bulgogi were both delicious. it's decent for an AYCE but i appreciate the quality of meat that you get from a standard authentic korean BBQ restaurant.",
    user_id: user2.id,
    business_id: business2.id,
    stars: 3,
)

business3 = Business.create!(
    name: "Bambu Noodle House",
    website: "https://www.parxcasino.com/bensalem/bambu",
    phone: "(888) 588-7279",
    address: "2999 Street Rd Bensalem, PA 19020",
    longitude: -74.95171590211504,
    latitude: 40.11852832781092, 
    city: "Philadelphia",
    state: "PA",
    price: 3,
    categories: "Chinese Noodles",
    claimed: true
)

file3_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/bambu1.jpg')
file3_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/bambu2.jpg')
file3_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/bambu3.jpg')
file3_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/bambu4.jpg')
file3_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/bambu5.jpg')

business3.photos.attach(io: file3_1, filename: "bambu1.jpg")
business3.photos.attach(io: file3_2, filename: "bambu2.jpg")
business3.photos.attach(io: file3_3, filename: "bambu3.jpg")
business3.photos.attach(io: file3_4, filename: "bambu4.jpg")
business3.photos.attach(io: file3_5, filename: "bambu5.jpg")

business_hour3 = BusinessHour.create!(
    business_id: business3.id,
    monday_hour: "112:00 PM - 9:00 PM",
    tuesday_hour: "212:00 PM - 9:00 PM",
    wednesday_hour: "312:00 PM - 10:00 PM",
    thursday_hour: "412:00 PM - 10:00 PM",
    friday_hour: "510:00 AM - 9:30 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "011:00 AM - 8:30 PM"
)

review3_1 = Review.create!(
    body: "Bambi Noodle House is. A pretty solid food option compared to the other options at Parx Casino. I really enjoyed how clean the place is and the overall service. The food is decent, although I find it to be a bit under seasoned and not as authentic as I thought it would be. We usually order the Kung Pao Chicken, the house special fried rice (which is usually a lot mushier than your average fried rice), and a general Tso's chicken and share it amongst 4 people. I also noticed that every time we go, the sodas are usually flat (lacking carbonation). I would recommend you stick to water. The restaurant does not have a bathroom, so make sure to make that pit stop before going to eat. They accept comp dollars from your players card if you have any accrued funds.",
    user_id: user4.id,
    business_id: business3.id,
    stars: 4
)

review3_2 = Review.create!(
    body: "I have to say that for a casino that isn't in a major city, the food has been top notch. We made it to Liberty Bell and Chickie & Pete's and wanted to finish our stay at Parx with trying out Bambu. I had the Pho which was delicious, the broth had a wonderful, fragrant flavor. My mother had the pepper steak and said it's the best she has ever had and my grandma who wasn't very hungry very much enjoyed the shumai. Chui was our server who was pleasant, helpful, kind and attentive to us. Overall, a great experience with the Parx restaurants.",
    user_id: user1.id,
    business_id: business3.id,
    stars: 5
)

review3_3 = Review.create!(
    body: "I love this place. The food is always fresh and delicious. The service is wonderful! I like the ambience but almost wish it was outside of the Parx. The only downfall is that I wish they had more to offer on the menu. I frequent this restaurant often and it has never disappointed me.",
    user_id: user2.id,
    business_id: business3.id,
    stars: 4
)

review3_4 = Review.create!(
    body: "Located inside of a food hall within the Parx Casino. They definitely are a authentic style Asian restaurant serving up some good ol classics people love.

    We ordered the wonton soup, added noodles. Very flavorful and big enough to share for two.
    
    We also ordered the Black Bean Lobster. This is one of their daily specials and I repeat, not on the menu! It is a bit pricey coming in at $55 a plate but absolutely worth it. The black bean sauce they cook it in makes the lobster so tender and all of the remaining vegetables compliment the dish. This is a must get!",
    user_id: user6.id,
    business_id: business3.id,
    stars: 5
)

business4 = Business.create!(
    name: "Peking Tokyo",
    website: "https://www.pekingtokyopa.com/",
    phone: "(215) 750-6666",
    address: "176 N Pine St Langhorne, PA 19047",
    longitude: -74.91895900220118,
    latitude: 40.178201403518024, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Chinese Japanese Asian-Fusion",
    claimed: false
)

file4_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/pekingtokyo1.jpg')
file4_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/pekingtokyo2.jpg')
file4_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/pekingtokyo3.jpg')
file4_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/pekingtokyo4.jpg')
file4_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/pekingtokyo5.jpg')

business4.photos.attach(io: file4_1, filename: "pekingtokyo1.jpg")
business4.photos.attach(io: file4_2, filename: "pekingtokyo2.jpg")
business4.photos.attach(io: file4_3, filename: "pekingtokyo3.jpg")
business4.photos.attach(io: file4_4, filename: "pekingtokyo4.jpg")
business4.photos.attach(io: file4_5, filename: "pekingtokyo5.jpg")

business_hour4 = BusinessHour.create!(
    business_id: business4.id,
    monday_hour: "110:00 AM - 9:30 PM",
    tuesday_hour: "210:00 AM - 9:30 PM",
    wednesday_hour: "311:00 AM - 10:30 PM",
    thursday_hour: "411:00 AM - 10:30 PM",
    friday_hour: "510:00 AM - 9:30 PM",
    saturday_hour: "610:00 AM - 11:00 PM",
    sunday_hour: "010:00 AM - 8:30 PM"
)

review4_1 = Review.create!(
    body: "Couldn't wait to have some of their delicious food again but because of the pandemic, they held off opening, even for takeout, until very recently.

    As soon as they did open for takeout, we called and placed an order.  We don't usually get take out but the order was completely correct and as good and fresh and delicious as we remembered it.
    
    Our 2nd order a few weeks later was just as good.
    
    Can't wait to be able to go and sit down and talk to the staff again in the restaurant once this is all over.",
    user_id: user3.id,
    business_id: business4.id,
    stars: 4
)

review4_2 = Review.create!(
    body: "Peking Tokyo has really great Chinese food and sushi, the General Tsos chicken, sushi and crab rangoons are the best in Langhorne. Its awesome to have a place this good a few blocks from home.",
    user_id: user5.id,
    business_id: business4.id,
    stars: 5
)

review4_3 = Review.create!(
    body: "So happy they're open again. Everything was very fresh! Vegetables were clearly fresh and not canned or frozen like other Asian places I. The area. The sushi was excellent! Probably the best in the area.
    Also, have to give them major props for their pickup procedures during this time. Only one person allowed in at a time, and shield windows. It felt very safe to be there. Thanks Peking Toyo, keep up the good work.",
    user_id: user1.id,
    business_id: business4.id,
    stars: 5
)

review4_4 = Review.create!(
    body: "Came here for dinner tonight with my folks who live nearby with a Groupon. The place was empty which I was worried about at first. Seaweed salad, sushi rolls were all fine. Meals did not come out at the same time. Steamed Dumplings were over cooked and my fathers entree was not warm enough. While the meal was fine there are better places out there.",
    user_id: user4.id,
    business_id: business4.id,
    stars: 3
)

review4_5 = Review.create!(
    body: "The food here is SO GOOD! We ordered dinner tonight on Uber Eats and it was cooked and delivered faster than the original estimated time. We ordered honey walnut shrimp, egg drop soup, crab rangoons, an egg roll, chicken teriyaki, miso soup, a dinosaur egg, and a sushi sandwich. ALL of it was extremely delicious. I had the honey walnut shrimp, and it was honestly the best honey walnut shrimp I have ever had. I also really recommend the dinosaur egg. We will definitely be ordering again from here!",
    user_id: user7.id,
    business_id: business4.id,
    stars: 5
)

business5 = Business.create!(
    name: "Panda Express",
    website: "https://order.pandaexpress.com/?utm_source=yelp&utm_medium=profile&utm_campaign=2499&utm_content=hscb",
    phone: "(215) 355-8899",
    address: "3570 Horizon Blvd Trevose, PA 19053",
    longitude: -74.96471718682348,
    latitude: 40.13735113047493, 
    city: "Philadelphia",
    state: "PA",
    price: 1,
    categories: "Chinese Fast-Food",
    claimed: false
)

file5_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/panda1.jpg')
file5_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/panda2.jpg')
file5_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/panda3.jpg')
file5_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/panda4.jpg')
file5_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/panda5.jpg')

business5.photos.attach(io: file5_1, filename: "panda1.jpg")
business5.photos.attach(io: file5_2, filename: "panda2.jpg")
business5.photos.attach(io: file5_3, filename: "panda3.jpg")
business5.photos.attach(io: file5_4, filename: "panda4.jpg")
business5.photos.attach(io: file5_5, filename: "panda5.jpg")

business_hour5 = BusinessHour.create!(
    business_id: business5.id,
    monday_hour: "111:30 AM - 9:30 PM",
    tuesday_hour: "211:30 AM - 9:30 PM",
    wednesday_hour: "311:30 AM - 9:30 PM",
    thursday_hour: "411:30 AM - 9:30 PM",
    friday_hour: "511:30 AM - 9:30 PM",
    saturday_hour: "611:00 AM - 11:00 PM",
    sunday_hour: "010:00 AM - 8:30 PM"
)

review5_1 = Review.create!(
    body: "Lacked any authentic flavor. Was Rushed and pressured to order. Lo mein was the saddest lo mein I've ever tasted in my life. The noodles were a cheap replacement of the authentic stuff, flavor was lackluster. A lot of things were not available when you arrived. I would never come here again.",
    user_id: user1.id,
    business_id: business5.id,
    stars: 1
)

review5_2 = Review.create!(
    body: "The person at the drive through wasn't very happy she was rude like I was bothering her? When I was asking questions. Then i asked for sauce a pack of sauce,  I got two items so I don't know why it would be that much to remember to  give a packet of sauce. I get it were not happy all the time but  just a hello would have been nice or even a smile even though we're wearing masks but you can still tell the face wasn't pleasant at all",
    user_id: user3.id,
    business_id: business5.id,
    stars: 2
)

review5_3 = Review.create!(
    body: "Pretty good spot for some Chinese food.

    My daughter wanted some lo mein  and rice so I decided to order Panda Express, it was our first time having it, but it didnt disappoint. The portions are huge and the meals are flavorful.
    
    We liked the food so much, we ended up going to up to the Panda Express to actually pick it up through drive thru.
    
    My daughter was raving about the rice and the noodles and was enjoying her meal.
    
    I had the orange chicken and the kung pao chicken and they were so good too.
    
    I also ordered the cheese rangoon, but they were just okay.",
    user_id: user5.id,
    business_id: business5.id,
    stars: 3
)

review5_4 = Review.create!(
    body: "I should have read the other reviews before eating here. I know Chinese food is cheap to make and this place is totally just a drive by!

    My daughter wanted shrimp.. I did too.  We both got really honey walnut shrimp.. they mis quoted the price for the surcharge.  They told me the kids meal was $.25 more and a panda bowl would be $1.25... they charged me for a plate meal and my daughter .75...  I guess I would have been that mad except I had 6.. yes 6 shrimp and my daughter had 4.. no veggies and literally just a few walnuts..
    
    There are MANY better places to get quick Chinese including the mall across the street!  I've attached pictures but highly recommend you find anywhere else to get Chinese!!",
    user_id: user7.id,
    business_id: business5.id,
    stars: 1
)

business6 = Business.create!(
    name: "Wing Lee Cuisine",
    website: "https://www.grubhub.com/restaurant/wing-lee-cuisine-537-easton-rd-horsham/2614871",
    phone: "(215) 442-1688",
    address: "537 Easton Rd Ste 3 Horsham, PA 19044",
    longitude: -75.13324248682197,
    latitude: 40.184556885481705, 
    city: "Philadelphia",
    state: "PA",
    price: 1,
    categories: "Chinese",
    claimed: true
)

file6_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/winglee1.jpg')
file6_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/winglee2.jpg')
file6_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/winglee3.jpg')
file6_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/winglee4.jpg')
file6_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/winglee5.jpg')

business6.photos.attach(io: file6_1, filename: "winglee1.jpg")
business6.photos.attach(io: file6_2, filename: "winglee2.jpg")
business6.photos.attach(io: file6_3, filename: "winglee3.jpg")
business6.photos.attach(io: file6_4, filename: "winglee4.jpg")
business6.photos.attach(io: file6_5, filename: "winglee5.jpg")

business_hour6 = BusinessHour.create!(
    business_id: business6.id,
    monday_hour: "111:00 AM - 9:30 PM",
    tuesday_hour: "211:00 AM - 9:30 PM",
    wednesday_hour: "311:00 AM - 9:30 PM",
    thursday_hour: "411:00 AM - 9:30 PM",
    friday_hour: "511:00 AM - 9:30 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "012:00 PM - 8:30 PM"
)

review6_1 = Review.create!(
    body: "When another Chinese house was closed on Tuesday in Hatboro, we pulled out the trustee Yelp App and found Wing Lee Cuisine not far away in Horsham on Easton Road. We may never know what we were missing, because there is little chance we will return to Hatboro from Newtown for dinner, but we definitely discovered a very good Chinese restaurant about a mile away that is open seven days a week and serves good quality dishes with friendly service from ownership. 
    This is one of the better suburban Chinese restaurants in this part of the world.  It makes up for lack of real Chengdu heat by the overall quality and skills apparent in their kitchen.  They would do themselves a favor by having the right spices above the stove for those who know what Szechuan food is supposed to taste like.  If they did, this place could be truly exceptional.",
    user_id: user2.id,
    business_id: business6.id,
    stars: 4
)

review6_2 = Review.create!(
    body: "This place was soo good!!! I wanted wonton soup (which I like albeit most wontons usually taste a little off to me) and it was such a refreshing surprise to get such good dumplings and broth!!!  They are shaped like little shooting stars so nice and easy to cut in half with a spoon.  The chicken fried rice was fresh and not greasy like the usual dark brown one.  My only complaint is could use a touch more vegetables maybe some carrots and peas or whatever.  Also saw Someone comment on the spring rolls so I tried those and he was right they are da bomb!!!",
    user_id: user3.id,
    business_id: business6.id,
    stars: 5
)

review6_3 = Review.create!(
    body: "We've tried many Chinese restaurants in the area and this has got to be top 2 and not number 2!

    The food was awesome. We ordered a large Chicken Lo Mein, 2 General Tso entrees (comes with broccoli and white rice but we substituted for fried rice - $2 more) and 2 orders of chicken wings. Our total came to 50 bucks and some change. This restaurant has the best General Tso..they give you BIG chunks of white meat and the sauce is yummy. Definitely worth the price.
    
    I can tell how much fresher their food is compared to other Chinese restaurants we've tried. Takeout usually gives me heartburn but that's not the case here! We'll be back",
    user_id: user4.id,
    business_id: business6.id,
    stars: 5
)

business7 = Business.create!(
    name: "Toscana 52",
    website: "https://toscana52.com/",
    phone: "(215) 942-7770",
    address: "4603 St Rd Feasterville, PA 19053",
    longitude: -74.97960088682359,
    latitude: 40.13561032554696, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Italian",
    claimed: false
)

file7_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/toscana1.jpg')
file7_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/toscana2.jpg')
file7_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/toscana3.jpg')
file7_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/toscana4.jpg')
file7_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/toscana5.jpg')

business7.photos.attach(io: file7_1, filename: "toscana1.jpg")
business7.photos.attach(io: file7_2, filename: "toscana2.jpg")
business7.photos.attach(io: file7_3, filename: "toscana3.jpg")
business7.photos.attach(io: file7_4, filename: "toscana4.jpg")
business7.photos.attach(io: file7_5, filename: "toscana5.jpg")

business_hour7 = BusinessHour.create!(
    business_id: business7.id,
    monday_hour: "111:00 AM - 9:00 PM",
    tuesday_hour: "211:00 AM - 9:00 PM",
    wednesday_hour: "311:00 AM - 9:00 PM",
    thursday_hour: "411:00 AM - 9:00 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "612:00 PM - 10:00 PM",
    sunday_hour: "012:00 PM - 9:00 PM"
)

review7_1 = Review.create!(
    body: "Great food, great service, great atmosphere, overall a perfect experience. Restaurants are struggling with staffing issues, but you wouldn't know it based on the fast and attentive service my wife and I had. Eddie was our server and was fantastic.

    The food here is without a doubt the best there is. I had been there 3 times before, and always was impressed.
    
    The other night, we had the Grappa Shrimp appetizer. Perfectly cooked and presented. What stood out was the Buffalo sauce. The best I have ever had, by far. Perfect mix of heat and flavor. So good.
    
    Entree- Linguini and clams, with shrimp. Unbelievably good. This was the second time I had this dish here, and both times I said that it was the best meal I've ever had, no exaggeration.
    
    Fantastic experience, and I can't wait to go back again.
    
    Thanks to the waitstaff and the kitchen staff for such a great experience.",
    user_id: user7.id,
    business_id: business7.id,
    stars: 5
)

review7_2 = Review.create!(
    body: "Beautiful restaurant with good service.    Bread was brought to our table before we even had our napkins on our laps.    

    My tuna was nicely done and a large portion.  The wasabi sauce was very spicy but delicious.    My eye were watering at almost every bite.",
    user_id: user6.id,
    business_id: business7.id,
    stars: 3
)

review7_3 = Review.create!(
    body: "This restaurant is where my husband and I had our first date, we decided to relive the special day on our 3 year anniversary, but unfortunately it was not the same. The staff was absolutely lovely, everyone very nice and very helpful. However the food was not its best. We have been there on several occasions and this last time was most likely the only time the food was not pleasant. My husband took maybe 3 bites of his plate and left it there because it was far too spicy. Both entrees were flaming hot, so we had to wait some time to be able to actually eat it. And my pasta honestly just tasted like it had been reheated, not fresh. I don't know if this was because the restaurant was near closing time (it was about 8:30 pm when we arrived), and they wanted to rush things, I don't know. Despite this, the ambiance was still lovely, and again, staff was very nice.",
    user_id: user5.id,
    business_id: business7.id,
    stars: 3
)

review7_4 = Review.create!(
    body: "I've made a point to visit Toscana on two recent business trips to the area and my second visit was just as great as the first. Toscana 52 was the perfect setting for a team dinner, and we enjoyed great service and food from start to finish. We started with the grappa shrimp, fried calamari and stuffed mushrooms of which the calamari was the clear winner. Entrees we're all received by lots of yummy noises around the table, but I was particularly jealous of my coworker's cacciucco which looked fabulous. And if that wasn't enough we shared a few desserts from the dessert tray including a chocolate mousse, strawberries and cream, cheesecake and a delicious tiramisu. With more trips planned to the area, I imagine we'll be visiting again soon!",
    user_id: user4.id,
    business_id: business7.id,
    stars: 4
)

business8 = Business.create!(
    name: "La Strada Italian Restaurant",
    website: "https://lastradaitalian.com/",
    phone: "(215) 947-1818",
    address: "2519 Huntingdon Pike Huntingdon Valley, PA 19006",
    longitude: -75.06352227333129,
    latitude: 40.12341528482477, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Italian",
    claimed: true
)

file8_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/lastrada1.jpg')
file8_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/lastrada2.jpg')
file8_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/lastrada3.jpg')
file8_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/lastrada4.jpg')
file8_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/lastrada5.jpg')

business8.photos.attach(io: file8_1, filename: "lastrada1.jpg")
business8.photos.attach(io: file8_2, filename: "lastrada2.jpg")
business8.photos.attach(io: file8_3, filename: "lastrada3.jpg")
business8.photos.attach(io: file8_4, filename: "lastrada4.jpg")
business8.photos.attach(io: file8_5, filename: "lastrada5.jpg")

business_hour8 = BusinessHour.create!(
    business_id: business8.id,
    monday_hour: "13:00 PM - 9:00 PM",
    tuesday_hour: "23:00 PM - 9:00 PM",
    wednesday_hour: "33:00 PM - 9:00 PM",
    thursday_hour: "43:00 PM - 9:00 PM",
    friday_hour: "53:00 PM - 10:00 PM",
    saturday_hour: "64:00 PM - 10:00 PM",
    sunday_hour: "04:00 PM - 9:00 PM"
)

review8_1 = Review.create!(
    body: "Visiting from out of town and as usual, we resorted to trusty Yelp and found this wonderful restaurant called LaStrada. From the phone call to make reservation, to the meal its self, the evening was a hit. Larry, the fellow who took my reservation call was great, and Sean the server was outstanding. Oh by the way, the food we ordered was delicious and the ambiance of a restored home made into a restaurant was very unique. I would highly recommend it if you are looking for Italian food.",
    user_id: user1.id,
    business_id: business8.id,
    stars: 5
)

review8_2 = Review.create!(
    body: "We have eaten here numerous times and the food is always delicious. With COVID measures still in effect we ordered one of their Family Style Takeout Dinner packages of Chicken Marsala (menu's are only online). Three course meal (salad, entree of choice, and desert) was ready in under 30min and served in sturdy tinfoil containers that made transporting and re-heating the next day super easy. The food was still super hot when we got home and just as good as if we were eating in.",
    user_id: user2.id,
    business_id: business8.id,
    stars: 5
)

review8_3 = Review.create!(
    body: "Very good food at a fair price.  Mario was a great server and the Manager came over several times to check on us.  They kept the bread basket full and the water flowing (we brought plenty of wine too) for our party of 7.
    Most of us got pasta dishes with seafood which were great with good portion sizes - next time I'm gonna have to try the chicken parm which looked huge and delicious.  We will definitely be back.",
    user_id: user6.id,
    business_id: business8.id,
    stars: 4
)

review8_4 = Review.create!(
    body: "Service very good, food needed salt, sauce tasted like came out of can with no seasoning.  Had better, had worse.",
    user_id: user5.id,
    business_id: business8.id,
    stars: 2
)

business9 = Business.create!(
    name: "Carlucci's Grill Yardley",
    website: "http://carluccisitaliangrill.com/",
    phone: "(215) 321-9010",
    address: "1633 Big Oak Rd Yardley, PA 19067",
    longitude: -74.86386898867212,
    latitude: 40.197656552836825, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Italian",
    claimed: true
)

file9_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/carlucci1.jpg')
file9_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/carlucci2.jpg')
file9_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/carlucci3.jpg')
file9_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/carlucci4.jpg')
file9_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/carlucci5.jpg')

business9.photos.attach(io: file9_1, filename: "carlucci1.jpg")
business9.photos.attach(io: file9_2, filename: "carlucci2.jpg")
business9.photos.attach(io: file9_3, filename: "carlucci3.jpg")
business9.photos.attach(io: file9_4, filename: "carlucci4.jpg")
business9.photos.attach(io: file9_5, filename: "carlucci5.jpg")

business_hour9 = BusinessHour.create!(
    business_id: business9.id,
    monday_hour: "111:00 AM - 9:30 PM",
    tuesday_hour: "211:00 AM - 9:30 PM",
    wednesday_hour: "311:00 AM - 9:30 PM",
    thursday_hour: "411:00 AM - 9:30 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "612:00 PM - 10:00 PM",
    sunday_hour: "012:00 PM - 9:30 PM"
)

review9_1 = Review.create!(
    body: "Service-service really could have been better. Refilling water, opening new bottles of our byo items, providing replacement plates for our bread that was brought out after our appetizer plates were already taken. Our server didn't anticipate any of these.

    Nonetheless, we would definitely return. Bottom line: this is a nice neighborhood place with some good offerings, pleasant atmosphere and it's BYOB, to boot!",
    user_id: user4.id,
    business_id: business9.id,
    stars: 3
)

review9_2 = Review.create!(
    body: "We frequent Carlucci's often and never have any complaints. From the bread, appetizers and entrees we haven't had a bad meal.

    This particular day (4th of the July weekend) the hubby and I wanted some time together after celebrating the holidays with family and friends.  A good pasta dish with a bottle of wine (BYOB) was just we needed.
    
    This is one of our go to spots and will continue to come to enjoy the food and great customer service.",
    user_id: user5.id,
    business_id: business9.id,
    stars: 4
)

business10 = Business.create!(
    name: "Tako Japanese Restaurant",
    website: "https://www.takojapanese.com/",
    phone: "(215) 245-0600",
    address: "2141 Galloway Rd Bensalem, PA 19020",
    longitude: -74.93602683103973,
    latitude: 40.111584634060605, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Japanese Sushi-Bar",
    claimed: true
)

file10_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/tako1.jpg')
file10_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/tako2.jpg')
file10_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/tako3.jpg')
file10_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/tako4.jpg')
file10_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/tako5.jpg')

business10.photos.attach(io: file10_1, filename: "tako1.jpg")
business10.photos.attach(io: file10_2, filename: "tako2.jpg")
business10.photos.attach(io: file10_3, filename: "tako3.jpg")
business10.photos.attach(io: file10_4, filename: "tako4.jpg")
business10.photos.attach(io: file10_5, filename: "tako5.jpg")

business_hour10 = BusinessHour.create!(
    business_id: business10.id,
    monday_hour: "111:30 AM - 9:30 PM",
    tuesday_hour: "211:30 AM - 9:30 PM",
    wednesday_hour: "311:30 AM - 9:30 PM",
    thursday_hour: "411:30 AM - 9:30 PM",
    friday_hour: "511:30 AM - 10:00 PM",
    saturday_hour: "611:30 AM - 10:00 PM",
    sunday_hour: "011:30 AM - 9:30 PM"
)

review10_1 = Review.create!(
    body: "I travel quite a bit for work and try sushi when I do. Spring rolls were awesome. Very good sushi.

        The staff was all wearing masks, but I couldn't tell if I needed to? Staff was very nice.",
    user_id: user3.id,
    business_id: business10.id,
    stars: 5
)

review10_2 = Review.create!(
    body: "Went on a week day, great service, BYBO.
    Sushi is ok, yellow tail jalapeños was great! Overall, wish it could be more authentic, not just another American sushi place.",
    user_id: user2.id,
    business_id: business10.id,
    stars: 3
)

review10_3 = Review.create!(
    body: "It's been awhile since I ordered here and would have gave it 5 stars the last time but today I was served burnt  dumplings and burnt pieces of onion and egg in my fried rice.",
    user_id: user1.id,
    business_id: business10.id,
    stars: 2
)

review10_4 = Review.create!(
    body: "I have been at this restaurant for about 5x and haven't had an upset or disappointed experience so far. I remember my first time trying out this place, my husband and I like this place. We like the fact that this restaurant has 4 individual rooms for their guests. Because I always have a little one with me, it is a plus for us to be seated in the room so my little girl can run around and not bother other customers or employees' work. With those rooms available, it is definitely a plus now during the pandemic. It is great that guest can be separated in their own little room and enjoy their meal.

    As for food quality, I think they are not bad at all. Food always taste good and fresh. Their servings size are decent as well, never too cheap on their food.
    
    Services there are great! Even when you're eating in the room, waitresses are always there to check on you and make sure everything is good during your meal.
    
    I will definitely return again and again. Keep up the good work!",
    user_id: user6.id,
    business_id: business10.id,
    stars: 5
)

business11 = Business.create!(
    name: "Yokohama Japanese Restaurant",
    website: "http://www.sushiandhibachi.com/",
    phone: "(856) 608-8812",
    address: "300 S Lenola Rd Maple Shade, NJ 08052",
    longitude: -74.9718745579936,
    latitude: 39.947692356009455, 
    city: "Maple Shade",
    state: "NJ",
    price: 2,
    categories: "Japanese Sushi",
    claimed: true
)

file11_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/yokohama1.jpg')
file11_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/yokohama2.jpg')
file11_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/yokohama3.jpg')
file11_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/yokohama4.jpg')
file11_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/yokohama5.jpg')

business11.photos.attach(io: file11_1, filename: "yokohama1.jpg")
business11.photos.attach(io: file11_2, filename: "yokohama2.jpg")
business11.photos.attach(io: file11_3, filename: "yokohama3.jpg")
business11.photos.attach(io: file11_4, filename: "yokohama4.jpg")
business11.photos.attach(io: file11_5, filename: "yokohama5.jpg")

business_hour11 = BusinessHour.create!(
    business_id: business11.id,
    monday_hour: "111:00 AM - 9:30 PM",
    tuesday_hour: "211:00 AM - 9:30 PM",
    wednesday_hour: "311:00 AM - 9:30 PM",
    thursday_hour: "411:00 AM - 9:30 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "011:00 AM - 9:30 PM"
)

review11_1 = Review.create!(
    body: "The best sushi in the area! I'm
    Obsessed with their peanut avocado
    Rolls and they have the best gyoza and fried ice cream too! I stop in whenever I can. I'm not a huge fish person so I love that they have so many veggie sushi options! My family and I have been coming here for years and have no intention of stopping anytime soon!",
    user_id: user1.id,
    business_id: business11.id,
    stars: 5
)

review11_2 = Review.create!(
    body: "It was late but I'm glad this place was open for indoor dining plus I wanted hibachi. I realized that afterward that the hibachi experience wasn't available due to Covid but I can still order the hibachi dinner on the menu. I got the steak and salmon with vegetables and fried rice. I wanted noodles instead of rice but they couldn't substitute so I decided to get a side of noodles as well. The rice was ok, a little bland for my taste. The noodle was not that good. Don't recommend. The salmon and steak were cooked well.",
    user_id: user3.id,
    business_id: business11.id,
    stars: 4
)

business12 = Business.create!(
    name: "Osaki Japanese Cuisine",
    website: "http://www.osaki3949.com/",
    phone: "(215) 942-5088",
    address: "3949 Brownsville Rd Feasterville-Trevose, PA 19053",
    longitude: -74.97599284449467,
    latitude: 40.15021739271623, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Japanese Sushi-Bar",
    claimed: false
)

file12_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/osaki1.jpg')
file12_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/osaki2.jpg')
file12_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/osaki3.jpg')
file12_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/osaki4.jpg')
file12_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/osaki5.jpg')

business12.photos.attach(io: file12_1, filename: "osaki1.jpg")
business12.photos.attach(io: file12_2, filename: "osaki2.jpg")
business12.photos.attach(io: file12_3, filename: "osaki3.jpg")
business12.photos.attach(io: file12_4, filename: "osaki4.jpg")
business12.photos.attach(io: file12_5, filename: "osaki5.jpg")

business_hour12 = BusinessHour.create!(
    business_id: business12.id,
    monday_hour: "111:00 AM - 9:00 PM",
    tuesday_hour: "211:00 AM - 9:00 PM",
    wednesday_hour: "311:00 AM - 9:00 PM",
    thursday_hour: "411:00 AM - 9:00 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "011:00 AM - 9:00 PM"
)

review12_1 = Review.create!(
    body: "Osaki is my go to place to get sushi when I'm in the area. The prices truly can't be beat--I'm afraid I've been spoiled by them and am shocked when I see a roll somewhere else that costs over $13! A few of my favorite rolls here are the Sky and Sammie roll, Sushi Tatsu roll, and Black Angel roll. The more basic rolls are good too, and so cheap!

    The place is fairly small but I've never had to wait for a table. The decor is charming and it's always clean. I always choose Osaki over other sushi places in the area because the price/quality ratio can't be beat! The service is always friendly, fast, and attentive, although it can be a little confusing because you'll have multiple waiters throughout the meal checking on you. The parking can sometimes be difficult, I always try to avoid the spots on the hill on the side of the building, but it's never a real problem.",
    user_id: user6.id,
    business_id: business12.id,
    stars: 4
)

business13 = Business.create!(
    name: "El Changarro",
    website: "http://places.singleplatform.com/el-changarro-4/menu?ref=google",
    phone: "(215) 244-9215",
    address: "2333 Street Rd Bensalem, PA 19020",
    longitude: -74.94799608867497,
    latitude: 40.10489613900217, 
    city: "Philadelphia",
    state: "PA",
    price: 1,
    categories: "Mexican Taco",
    claimed: false
)

file13_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/ei1.jpg')
file13_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/ei2.jpg')
file13_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/ei3.jpg')
file13_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/ei4.jpg')
file13_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/ei5.jpg')

business13.photos.attach(io: file13_1, filename: "ei1.jpg")
business13.photos.attach(io: file13_2, filename: "ei2.jpg")
business13.photos.attach(io: file13_3, filename: "ei3.jpg")
business13.photos.attach(io: file13_4, filename: "ei4.jpg")
business13.photos.attach(io: file13_5, filename: "ei5.jpg")

business_hour13 = BusinessHour.create!(
    business_id: business13.id,
    monday_hour: "111:00 AM - 8:00 PM",
    tuesday_hour: "211:00 AM - 8:00 PM",
    wednesday_hour: "311:00 AM - 8:00 PM",
    thursday_hour: "411:00 AM - 8:00 PM",
    friday_hour: "511:00 AM - 9:00 PM",
    saturday_hour: "611:00 AM - 9:00 PM",
    sunday_hour: "011:00 AM - 8:00 PM"
)

review13_1 = Review.create!(
    body: "Best Mexican snack I have ever had!

    Chicharrones Preparados - According to the web this dish is made out of leftover pork cracklings, which are sometimes fried again before being pressed down to remove the excess fat.  Well to be honest I feel a bit embarrassed because the whole time I was eating this magical Mexican snack I thought I was eating the softest most delicious tender onions I have ever had, LOL. After reading up on this appetizer I have found this was most likely pickled pork skins.
    
    Chorizo con Huevo (Scrambled Eggs with Sausage) - Ahh I have to be honest the bread was not to my likening at all. I would not order this again but the cheese which I want to say was cotija cheese was a great addition on top of the Chorizo.
    
    Tinga (Shredded Chicken) - The GF got this dish and said it was pretty good. I cannot recall the taste as we ordered from here over two weeks ago but still can taste that marvelous Chicharrones Preparados when thinking about it.
    
    Do yourself a favor and step outside your comfort zone and order it ASAP.",
    user_id: user2.id,
    business_id: business13.id,
    stars: 4
)

review13_2 = Review.create!(
    body: "Small hole in the wall Mexican place. We got carne asada tacos and a churro. They're tacos tasted great and definitely have flavor. We found our new taco spot. The red hot sauce was more spicy than the green. The Green sauce still has a kick to it. So test taste it before pouring it on your tacos. Other than that enjoy cause it's delicious!",
    user_id: user3.id,
    business_id: business13.id,
    stars: 5
)

review13_3 = Review.create!(
    body: "You know a place is authentic when you walk in and see lots of Mexican people eating happily. The restaurant is located at the rear of a small Mexican grocery store. The food was fresh and prepared quickly. I enjoyed my burrito. Salsas were good. Good random find out in the burbs (Bensalem)! I would come back.",
    user_id: user7.id,
    business_id: business13.id,
    stars: 4
)

review13_4 = Review.create!(
    body: "The food was pretty good, I am from the west coast, and I am conditioned to having the traditiona. however, they only had white rice, but the did dress it pretty good to give it a unique taste.

    I would go back!",
    user_id: user6.id,
    business_id: business13.id,
    stars: 4
)

business14 = Business.create!(
    name: "Peppe's Mexican Grill",
    website: "http://www.peppesmexicangrill.com/",
    phone: "(215) 357-3773",
    address: "3501 Brownsville Rd Trevose, PA 19053",
    longitude: -74.98111408867373,
    latitude: 40.14506181166978, 
    city: "Philadelphia",
    state: "PA",
    price: 1,
    categories: "Mexican Taco Ice-Cream Frozen-Yogurt",
    claimed: true
)

file14_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/peppe1.jpg')
file14_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/peppe2.jpg')
file14_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/peppe3.jpg')
file14_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/peppe4.jpg')
file14_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/peppe5.jpg')

business14.photos.attach(io: file14_1, filename: "peppe1.jpg")
business14.photos.attach(io: file14_2, filename: "peppe2.jpg")
business14.photos.attach(io: file14_3, filename: "peppe3.jpg")
business14.photos.attach(io: file14_4, filename: "peppe4.jpg")
business14.photos.attach(io: file14_5, filename: "peppe5.jpg")

business_hour14 = BusinessHour.create!(
    business_id: business14.id,
    monday_hour: "110:00 AM - 9:00 PM",
    tuesday_hour: "210:00 AM - 9:00 PM",
    wednesday_hour: "310:00 AM - 9:00 PM",
    thursday_hour: "410:00 AM - 9:00 PM",
    friday_hour: "510:00 AM - 10:00 PM",
    saturday_hour: "610:00 AM - 10:00 PM",
    sunday_hour: "010:00 AM - 9:00 PM"
)

review14_1 = Review.create!(
    body: "Good food. Bowls, tacos, burritos...fresh ingredients friendly service, prompt delivery.",
    user_id: user1.id,
    business_id: business14.id,
    stars: 4
)

review14_2 = Review.create!(
    body: "Absolutely amazing! Got it delivered to my boyfriends house as I'm not from around here and visiting and it's so good. I got the carnitas burrito and some steak tacos and the chips and guacamole. The guacamole is so nice and fresh.",
    user_id: user5.id,
    business_id: business14.id,
    stars: 5
)

review14_3 = Review.create!(
    body: "Peppe's is a GEM. They have the most delicious, fresh food. The restaurant is SPOTLESS and the staff is very friendly and welcoming. I've tried just about everything on the menu. My favorite are the shrimp tacos and the carnitas bowl. So flavorful.",
    user_id: user4.id,
    business_id: business14.id,
    stars: 5
)

business15 = Business.create!(
    name: "La Hacienda Mexican Restaurant",
    website: "http://ww25.lahaciendabensalem.com/?subid1=20210929-1504-3109-b59c-5e2e1b2df34d",
    phone: "(215) 322-2305",
    address: "4201 Neshaminy Blvd Ste 128 Bensalem, PA 19020",
    longitude: -74.95094675987517,
    latitude: 40.13593272960829, 
    city: "Philadelphia",
    state: "PA",
    price: 2,
    categories: "Mexican",
    claimed: false
)

file15_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/la1.jpg')
file15_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/la2.jpg')
file15_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/la3.jpg')
file15_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/la4.jpg')
file15_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/la5.jpg')

business15.photos.attach(io: file15_1, filename: "la1.jpg")
business15.photos.attach(io: file15_2, filename: "la2.jpg")
business15.photos.attach(io: file15_3, filename: "la3.jpg")
business15.photos.attach(io: file15_4, filename: "la4.jpg")
business15.photos.attach(io: file15_5, filename: "la5.jpg")

business_hour15 = BusinessHour.create!(
    business_id: business15.id,
    monday_hour: "111:00 AM - 9:00 PM",
    tuesday_hour: "211:00 AM - 9:00 PM",
    wednesday_hour: "311:00 AM - 9:00 PM",
    thursday_hour: "411:00 AM - 9:00 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "012:00 PM - 9:00 PM"
)

review15_1 = Review.create!(
    body: "Well, the place is nice, but the manager will not turn the A/C on cooler than 68 degrees and most are uncomfortable eating under these hot conditions. Just so you know...",
    user_id: user4.id,
    business_id: business15.id,
    stars: 2
)

review15_2 = Review.create!(
    body: "Food was good. Server was nice.
    They were very busy.  We needed to wait awhile for our chips & salsa.  Hard to get drinks refilled. Bottoms line....it was ok.  I guess like other businesses they are hurting for staff.",
    user_id: user1.id,
    business_id: business15.id,
    stars: 4
)

business16 = Business.create!(
    name: "Andale Latino Grill",
    website: "https://www.andalelatinogrill.com/",
    phone: "(484) 321-3748",
    address: "144 E Street Rd Feasterville-Trevose, PA 19053",
    longitude: -74.99808018871106,
    latitude: 40.14928959970174, 
    city: "Philadelphia",
    state: "PA",
    price: 1,
    categories: "Mexican Fast-Food Latin-American",
    claimed: true
)

file16_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/andale1.jpg')
file16_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/andale2.jpg')
file16_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/andale3.jpg')
file16_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/andale4.jpg')
file16_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/andale5.jpg')

business16.photos.attach(io: file16_1, filename: "andale1.jpg")
business16.photos.attach(io: file16_2, filename: "andale2.jpg")
business16.photos.attach(io: file16_3, filename: "andale3.jpg")
business16.photos.attach(io: file16_4, filename: "andale4.jpg")
business16.photos.attach(io: file16_5, filename: "andale5.jpg")

business_hour16 = BusinessHour.create!(
    business_id: business16.id,
    monday_hour: "111:00 AM - 9:00 PM",
    tuesday_hour: "211:00 AM - 9:00 PM",
    wednesday_hour: "311:00 AM - 9:00 PM",
    thursday_hour: "411:00 AM - 9:00 PM",
    friday_hour: "511:00 AM - 10:00 PM",
    saturday_hour: "611:00 AM - 10:00 PM",
    sunday_hour: "011:00 AM - 9:00 PM"
)

review16_1 = Review.create!(
    body: "I stopped in here on a whim when I had time even though I wasn't familiar with the neighborhood. I didn't want go to a chain and I wanted something more homemade.

    Even though I came in at the end of the night and had no idea what I wanted the owner was absolutely amazing built me exactly what I wanted to eat and the food was absolutely fantastic.  
    
    They were kind and courteous and even stopped to have a conversation.  Even though it's 40 minutes away I would make the drive to get the food and say hello.",
    user_id: user3.id,
    business_id: business16.id,
    stars: 5
)

business17 = Business.create!(
    name: "Krispy Kreme",
    website: "https://www.krispykreme.com/",
    phone: "(267) 223-4280",
    address: "1729 St Rd Bensalem, PA 19020",
    longitude: -74.94261604453132,
    latitude: 40.09435040177532, 
    city: "Philadelphia",
    state: "PA",
    price: 1,
    categories: "Donuts Coffee Tea",
    claimed: true
)

file17_1 = URI.open('https://yulp-seeds.s3.amazonaws.com/krispy1.jpg')
file17_2 = URI.open('https://yulp-seeds.s3.amazonaws.com/krispy2.jpg')
file17_3 = URI.open('https://yulp-seeds.s3.amazonaws.com/krispy3.jpg')
file17_4 = URI.open('https://yulp-seeds.s3.amazonaws.com/krispy4.jpg')
file17_5 = URI.open('https://yulp-seeds.s3.amazonaws.com/krispy5.jpg')

business17.photos.attach(io: file17_1, filename: "krispy1.jpg")
business17.photos.attach(io: file17_2, filename: "krispy2.jpg")
business17.photos.attach(io: file17_3, filename: "krispy3.jpg")
business17.photos.attach(io: file17_4, filename: "krispy4.jpg")
business17.photos.attach(io: file17_5, filename: "krispy5.jpg")

business_hour17 = BusinessHour.create!(
    business_id: business17.id,
    monday_hour: "16:00 AM - 9:30 PM",
    tuesday_hour: "26:00 AM - 9:30 PM",
    wednesday_hour: "36:00 AM - 9:30 PM",
    thursday_hour: "46:00 AM - 9:30 PM",
    friday_hour: "56:00 AM - 10:00 PM",
    saturday_hour: "66:00 AM - 10:00 PM",
    sunday_hour: "06:00 AM - 9:30 PM"
)
