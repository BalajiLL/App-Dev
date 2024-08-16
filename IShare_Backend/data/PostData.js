const mongoose = require("mongoose");
const Post = require("../model/Posts");
const User = require("../model/User");
const posts = [
    {
        author: "66a4b4ea51a2c93dc6f76ce6",
        category: "Traveling",
        description: "My Solo Trip to Tokyo: A Journey of Discovery",
        content: "Embarking on a solo trip to Tokyo was one of the most liberating experiences of my life. 🌟✨ I remember the thrill of navigating through bustling streets, discovering hidden gems in various neighborhoods, and immersing myself in a culture so different from my own. 🇯🇵 The highlight was visiting Shibuya Crossing, where the sheer number of people crossing in every direction felt like a beautifully choreographed dance. 💃🕺 I also explored traditional temples like Senso-ji, where the serene atmosphere provided a stark contrast to the vibrant city life. 🏯🌸 The food was another incredible aspect; from sushi bars to ramen shops, every meal was a new adventure. 🍣🍜 Learning basic Japanese phrases helped me connect with locals and enhance my travel experience. 🗣️🙌 Overall, this trip not only broadened my horizons but also taught me the value of embracing new cultures. 🌍💖"
    },
    {
        author: "66a4b4ea51a2c93dc6f76ce7",
        category: "Education",
        description: "The Power of Mind Mapping for Studying",
        content: "Mind mapping revolutionized the way I approached studying during my college years. 📚🧠 Initially, I was overwhelmed by the sheer volume of material I needed to cover. 😰 I discovered mind mapping as a technique to visualize and organize information effectively. 🌐🗺️ By starting with a central idea and branching out into subtopics, I was able to create a visual representation of complex concepts. 📝🔍 This method not only helped me see connections between different topics but also made it easier to recall information during exams. 🏆🧩 I incorporated colors and images into my maps, which made studying more engaging and less monotonous. 🎨📊 Mind mapping has since become an indispensable tool in my learning process, enabling me to grasp and retain information more efficiently. 📈👏"
    },
    {
        author: "66a4b4ea51a2c93dc6f76ce8",
        category: "Food",
        description: "The Journey to Perfecting My Homemade Pizza",
        content: "Perfecting homemade pizza was a rewarding culinary challenge that I undertook over several months. 🍕👩‍🍳 It all began with experimenting with different dough recipes. I tried various ratios of flour, water, yeast, and salt to find the perfect balance that yielded a crust with the right texture and flavor. 🌾💧🍞 The next challenge was mastering the sauce. I started with basic tomato sauce and gradually added herbs and spices to create a rich, flavorful base. 🍅🌿 Topping the pizza was the fun part – from classic margherita to more adventurous combinations like pear and gorgonzola. 🍕🍐🧀 Each pizza was a learning experience, and I adjusted the cooking time and temperature to achieve the ideal crispy crust and gooey cheese. ⏲️🔥 Sharing these homemade pizzas with family and friends has been a delightful part of this journey, and the positive feedback motivates me to keep experimenting. 🎉🥂🍽️"
    },
    {
        author: "66a4b4ea51a2c93dc6f76ce9",
        category: "Fitness",
        description: "Building a Routine: My Journey to a Balanced Fitness Plan",
        content: "Creating a balanced fitness routine was crucial for achieving my health goals. 🏋️‍♀️💪 I started by evaluating my current fitness level and identifying areas for improvement. 📊🔍 I incorporated a mix of cardiovascular exercises, strength training, and flexibility workouts into my routine. 🏃‍♂️💪🧘 I began with 30 minutes of cardio, such as running or cycling, to build endurance. 🚴‍♀️🏃‍♀️ Strength training followed, focusing on different muscle groups each day to ensure balanced development. 💪🏋️‍♂️ Yoga and stretching were essential components to improve flexibility and prevent injuries. 🧘‍♀️🤸 I set realistic goals and tracked my progress using a fitness app. 📱📈 Over time, I noticed improvements in my overall fitness and energy levels. 🌟🔥 This balanced approach not only helped me stay motivated but also contributed to a healthier lifestyle. 🥗💖"
    },
    {
        author: "66a4b4ea51a2c93dc6f76cea",
        category: "Technology",
        description: "My Journey into the World of Data Science",
        content: "Venturing into data science was both exciting and challenging. 📊🚀 I started with online courses that introduced me to fundamental concepts such as data analysis, machine learning, and statistical modeling. 📚🧠 Working on real-world datasets was an eye-opener, allowing me to apply theoretical knowledge to practical problems. 💻🔍 I learned to use tools like Python, R, and SQL for data manipulation and visualization. 🐍📈 One of the most rewarding projects involved predicting customer churn for a retail company. 🛒📉 I developed a model that identified key factors influencing customer retention, which had a tangible impact on business strategies. 📊📈 This experience reinforced my passion for data science and highlighted the importance of continuous learning and adaptation in this rapidly evolving field. 🌟📚"
    },
    {
        author: "66a4b4ea51a2c93dc6f76ceb",
        category: "Traveling",
        description: "Exploring the Wonders of New Zealand: A Personal Experience",
        content: "My trip to New Zealand was a breathtaking adventure. 🌄✈️ From the moment I arrived, I was captivated by the country’s diverse landscapes. 🏞️🌟 The highlight of the trip was hiking the Tongariro Alpine Crossing, a challenging yet rewarding trek through volcanic terrain. 🥾🌋 The views from the top were nothing short of spectacular. 🏔️🌈 In addition to hiking, I explored the vibrant city of Wellington, where I enjoyed local cuisine and visited cultural landmarks. 🏙️🍲 I also spent time in Queenstown, known as the adventure capital of the world, where I tried bungee jumping and jet boating. 🪂🚤 The warm hospitality of the locals and the stunning natural beauty made this trip unforgettable. 🤗🌍 Each day was filled with new experiences and discoveries, leaving me with cherished memories. 📸❤️"
    },
    {
        author: "66a4b4ea51a2c93dc6f76cec",
        category: "Education",
        description: "How Reading Widely Enhanced My Learning Experience",
        content: "Incorporating a wide range of reading materials into my study routine significantly enhanced my learning experience. 📚📖 Initially, I focused solely on textbooks and academic papers, but I soon realized that exploring various genres and authors provided a broader perspective on the subject matter. 📘🌍 I started reading non-fiction books related to my field of study, which offered practical insights and real-world applications. 🧠💡 Fiction and historical novels also played a role in developing critical thinking and creativity. 📚🕵️‍♂️ I made it a habit to read articles, journals, and blogs related to my interests, which kept me informed about current trends and developments. 📰🌐 This diverse approach to reading not only improved my knowledge but also fostered a deeper appreciation for different viewpoints and ideas. 🌟🗣️"
    },
    {
        author: "66a4b4ea51a2c93dc6f76ced",
        category: "Food",
        description: "The Art of Baking Bread: From Novice to Expert",
        content: "Baking bread from scratch was a journey that required patience and practice. 🍞👩‍🍳 I began with simple recipes, focusing on understanding the basics of yeast, flour, and water ratios. 🌾💧 My first few attempts were less than perfect, with dense loaves and uneven crusts. 😅 However, I learned from each mistake and adjusted my techniques accordingly. 🔄📈 Gradually, I mastered the art of kneading dough, allowing it to rise, and baking it to achieve a golden-brown crust. 🥖🔥 I experimented with different types of bread, from classic sourdough to whole wheat and rye. 🍞🍞 The process of baking bread became a therapeutic and rewarding activity. 🧘‍♀️💖 The aroma of freshly baked bread filling the kitchen and the satisfaction of slicing into a well-made loaf made all the effort worthwhile. 🥪🍞"
    },
    {
        author: "66a4b4ea51a2c93dc6f76cee",
        category: "Fitness",
        description: "My Journey to Mastering the Art of Yoga",
        content: "Practicing yoga has been a transformative experience for me. 🧘‍♂️💫 I started with basic poses and gradually progressed to more advanced techniques. 🧘‍♀️🧘 Yoga improved not only my physical strength and flexibility but also my mental well-being. 🧠💪 I attended various classes and workshops to deepen my understanding of different styles, such as Hatha, Vinyasa, and Ashtanga. 🏫📚 Incorporating meditation and mindfulness into my practice helped me manage stress and enhance focus. 🧘‍♀️🌟 I set personal goals for each session, whether it was mastering a challenging pose or achieving a deeper level of relaxation. 🎯🧘 The journey of learning and growing in yoga has been both fulfilling and empowering, contributing significantly to my overall health and balance. 🌈🙏"
    },
    {
        author: "66a4b4ea51a2c93dc6f76cef",
        category: "Technology",
        description: "Building My First Mobile App: A Step-by-Step Experience",
        content: "Creating my first mobile app was an exciting project that involved learning and applying new skills. 📱🚀 I started by researching various development platforms and chose Flutter for its cross-platform capabilities. 🖥️🌐 I began with a simple app idea and mapped out the basic features and user interface. 📝📊 The development process involved writing code, designing screens, and testing the app on different devices. 🛠️📱 I faced challenges such as debugging issues and optimizing performance, but overcoming these obstacles was a valuable learning experience. 🧩🔧 Launching the app on the Google Play Store and receiving positive feedback from users was incredibly rewarding. 🌟📈 This project not only honed my programming skills but also ignited my passion for mobile app development. 💖📲"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf0",
         category: "Traveling",
         description: "A Week-Long Adventure in the Swiss Alps",
         content: "Spending a week in the Swiss Alps was an exhilarating and unforgettable experience. ⛷️🏔️ From the moment I arrived, I was captivated by the majestic mountains and picturesque landscapes. 🏞️🌟 My adventure began with skiing down the slopes of Zermatt, where the snow was perfect and the views were breathtaking. 🎿🏔️ Each day, I explored different trails, from challenging black runs to serene cross-country routes. 🏂🚠 In the evenings, I relaxed in cozy mountain lodges, enjoying hearty Swiss cuisine like fondue and raclette. 🍲🧀 One of the highlights was taking a cable car to the top of the Matterhorn Glacier Paradise, where I was greeted with panoramic views of the surrounding peaks. 🏔️🌄 The serenity and beauty of the Alps provided a much-needed escape from the hustle and bustle of daily life. 🌬️💫"
    },
    {
        author: "66a4b4ea51a2c93dc6f76cf1",
        category: "Education",
        description: "The Impact of Collaborative Learning on My Academic Journey",
        content: "Collaborative learning has been a game-changer in my academic journey. 👩‍🎓🤝 Working in study groups and participating in group projects has greatly enhanced my understanding of complex topics. 📚💡 Through discussions and teamwork, I gained diverse perspectives that enriched my learning experience. 🗣️🔍 Group work encouraged me to think critically and articulate my ideas more clearly. 💬🧠 I also developed valuable skills in communication, problem-solving, and time management. ⏰🔧 One memorable project involved creating a comprehensive research presentation with my peers, which taught me the importance of collaboration and collective effort. 🎤📈 Collaborative learning not only improved my academic performance but also prepared me for future professional challenges. 🌟🚀"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf2",
         category: "Food",
         description: "Exploring the Flavors of Mediterranean Cuisine",
         content: "Exploring Mediterranean cuisine has been a culinary adventure filled with vibrant flavors and healthy ingredients. 🥗🍆 I started by experimenting with classic dishes like Greek salad, hummus, and falafel. 🥙🍇 The fresh ingredients, including olives, feta cheese, and sun-dried tomatoes, added a delightful twist to my meals. 🌿🧀 I also tried making my own tzatziki sauce, which became a favorite addition to many dishes. 🥒🧄 Cooking Mediterranean food at home allowed me to appreciate the cultural significance of each dish and the health benefits of a Mediterranean diet. 🍋🍽️ Sharing these meals with friends and family has been a joy, and their positive feedback encourages me to continue exploring this flavorful cuisine. 🥂👨‍👩‍👧‍👦"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf3",
         category: "Fitness",
         description: "The Benefits of Incorporating Strength Training into My Routine",
         content: "Incorporating strength training into my fitness routine has had a profound impact on my overall health. 💪🏋️‍♀️ I began by adding basic weightlifting exercises, such as squats, deadlifts, and bench presses. 🏋️‍♂️🔩 Gradually, I increased the intensity and included more complex movements like kettlebell swings and pull-ups. 🏋️‍♀️🪘 Strength training not only helped me build muscle and increase my metabolism but also improved my posture and functional strength. 💪🧍‍♂️ I noticed significant improvements in my daily activities, such as lifting heavy objects and maintaining good posture. 🏋️‍♀️🛠️ I also experienced a boost in my confidence and overall well-being. 🌟💖 Including strength training in my routine has been a valuable investment in my long-term health and fitness. 🏅🚀"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf4",
         category: "Technology",
         description: "Learning Web Development: My First Full-Stack Project",
         content: "Embarking on my first full-stack web development project was both challenging and rewarding. 🌐💻 I started by learning the basics of front-end technologies like HTML, CSS, and JavaScript. 🖥️🔧 Once I felt comfortable with the front-end, I moved on to back-end development using Node.js and Express. 📦🛠️ Building a RESTful API was a crucial part of the project, and I used MongoDB for database management. 🗃️🧩 Integrating front-end and back-end components involved connecting user interfaces with server-side logic and ensuring seamless data flow. 🌟🔗 Testing and debugging were essential to ensure the application functioned correctly. 🧩🔍 Completing this project not only strengthened my technical skills but also gave me a sense of accomplishment and confidence in my abilities as a web developer. 🚀🎉"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf5",
         category: "Traveling",
         description: "A Cultural Immersion in Barcelona: My Personal Experience",
         content: "Experiencing the vibrant culture of Barcelona was a journey filled with unforgettable moments. 🇪🇸🏛️ From the moment I arrived, I was captivated by the city’s architectural marvels and lively atmosphere. 🏰🌆 I began my exploration with a visit to the iconic Sagrada Familia, marveling at Gaudí's masterpiece. 🏰🌟 Wandering through the bustling streets of La Rambla, I enjoyed local markets, street performers, and delicious tapas. 🍇🎨🍴 I also took a leisurely stroll through Park Güell, where the colorful mosaics and panoramic views were truly enchanting. 🏞️🌟 Immersing myself in the local culture, I attended a traditional Flamenco performance and learned about the history and traditions of Catalonia. 🎶🕺 Barcelona’s rich cultural heritage and warm hospitality made this trip a truly memorable experience. 🌟💖"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf6",
         category: "Education",
         description: "The Benefits of Interdisciplinary Learning in My Academic Journey",
         content: "Interdisciplinary learning has enriched my academic journey by providing a broader perspective and deeper understanding of complex subjects. 🌐📚 I started integrating knowledge from different fields, such as combining psychology with data science to analyze human behavior. 🧠📊 This approach allowed me to see connections and applications that I wouldn't have noticed otherwise. 🔍🔗 Engaging in projects that spanned multiple disciplines enhanced my problem-solving skills and encouraged innovative thinking. 💡🌟 One of my favorite experiences was working on a project that combined art and technology, resulting in an interactive digital art installation. 🎨💻 This interdisciplinary approach not only broadened my horizons but also made learning more engaging and fulfilling. 🌈📈"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf7",
         category: "Food",
         description: "Exploring Vegan Cooking: My Culinary Adventure",
         content: "Exploring vegan cooking has been a culinary adventure full of delicious discoveries. 🥑🍴 I began by experimenting with plant-based ingredients, such as tofu, tempeh, and legumes. 🌱🍲 One of my first successful dishes was a hearty chickpea curry, which became a staple in my kitchen. 🍛🌶️ I also tried making my own nut milk and vegan cheese, which added a homemade touch to my meals. 🥜🧀 Discovering new recipes and cooking techniques kept me motivated and inspired. 🧑‍🍳📖 Sharing these dishes with friends and family led to positive feedback and encouraged me to continue exploring vegan cuisine. 🌟👨‍👩‍👧‍👦 The journey of transitioning to a plant-based diet has not only been rewarding for my health but also for the environment. 🌍💚"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf8",
         category: "Fitness",
         description: "The Impact of High-Intensity Interval Training (HIIT) on My Fitness Goals",
         content: "Incorporating High-Intensity Interval Training (HIIT) into my fitness routine has significantly impacted my progress towards my fitness goals. 🏃‍♀️🔥 HIIT involves alternating between short bursts of intense exercise and periods of rest or low-intensity activity. ⏱️💪 I started with basic exercises like burpees, jumping jacks, and sprints, gradually increasing the intensity and duration of my workouts. 🏋️‍♂️🚀 The efficiency of HIIT workouts allowed me to achieve noticeable improvements in cardiovascular fitness, strength, and endurance. 💪📈 I also appreciated the flexibility of HIIT, as I could customize workouts based on my schedule and fitness level. 📅🕒 The results, including increased energy levels and enhanced overall fitness, have made HIIT a core component of my exercise routine. 🌟🏅"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cf9",
         category: "Technology",
         description: "Building a Smart Home: My Experience with IoT Devices",
         content: "Building a smart home using IoT (Internet of Things) devices was an exciting and transformative project. 🏡💡 I started by researching various smart home technologies and selecting devices that met my needs. 📚🔍 Smart lighting systems, thermostats, and security cameras were among the first additions to my setup. 💡📈 I configured these devices to be controlled remotely via a central hub, allowing me to automate routines and enhance convenience. 📱🏠 Integrating voice assistants like Alexa or Google Assistant enabled hands-free control and seamless interaction with my smart home ecosystem. 🎙️🔗 One of the highlights was setting up automated routines, such as having the lights dim and the thermostat adjust when I arrived home. 🌟🏡 The process of creating a connected and intelligent living space was both fun and rewarding. 🌈🔧"
    },
    {
          author: "66a4b4ea51a2c93dc6f76cfa",
          category: "Traveling",
          description: "A Culinary Journey Through Italy: My Italian Food Adventure",
          content: "Exploring Italy through its cuisine was a delicious and memorable adventure. 🇮🇹🍝 From the moment I arrived, I was eager to sample the diverse and flavorful dishes that Italy is known for. 🍕🍷 I began with a food tour in Rome, where I indulged in classic pasta dishes, pizza, and gelato. 🍝🍨 Each region of Italy offered unique culinary experiences, from the rich risottos of Milan to the fresh seafood of Naples. 🦑🍤 I also visited local markets and participated in cooking classes to learn how to prepare traditional Italian dishes. 🛒👩‍🍳 Sharing meals with locals and learning about their food traditions added depth to my travel experience. 🌟👨‍👩‍👧‍👦 The journey through Italy’s culinary landscape was a feast for the senses and a celebration of the country’s rich food heritage. 🍽️❤️"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cfb",
         category: "Education",
         description: "The Role of Online Courses in My Lifelong Learning Journey",
         content: "Online courses have played a crucial role in my lifelong learning journey. 💻📚 I began exploring online platforms to gain new skills and knowledge in various subjects. 🌐🎓 Courses on topics ranging from programming and data science to creative writing and personal development have expanded my horizons. 📊📝 One of the most valuable aspects of online learning is the flexibility it offers, allowing me to learn at my own pace and fit coursework into my schedule. ⏱️📅 Interactive elements, such as quizzes and discussion forums, enhanced my engagement and understanding of the material. 🤓💡 Completing certifications and applying newly acquired skills to real-world projects has been incredibly rewarding. 🏆🔧 Online courses have empowered me to continuously grow and adapt in an ever-changing world. 🌍🚀"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cfc",
         category: "Food",
         description: "Exploring the World of International Street Food",
         content: "Diving into international street food has been an exciting culinary adventure. 🌎🍢 Street food offers a unique opportunity to experience authentic flavors and local specialties. 🌯🍜 During my travels, I sought out street food vendors in various cities, sampling everything from savory kebabs in Istanbul to spicy tacos in Mexico City. 🌮🍢 One memorable experience was trying Japanese takoyaki, a delicious octopus-filled snack from Osaka. 🐙🍣 Each street food encounter was a journey of discovery, revealing new tastes and cooking techniques. 🧑‍🍳🌟 The vibrant atmosphere of street markets and the chance to interact with local vendors added to the experience. 🛒🤝 Exploring international street food has broadened my culinary palate and deepened my appreciation for diverse food cultures. 🌍🍽️"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cfd",
         category: "Fitness",
         description: "The Journey of Training for a Marathon",
         content: "Training for a marathon was a challenging yet incredibly rewarding experience. 🏃‍♀️🏅 I began by setting a realistic training plan that included a mix of long runs, speed workouts, and rest days. 📅🗓️ Gradually, I increased my mileage each week, focusing on building endurance and stamina. ⏱️🏃‍♂️ Along the way, I faced physical and mental hurdles, such as overcoming fatigue and staying motivated. 💪🧠 I learned the importance of proper nutrition, hydration, and recovery to keep my body in peak condition. 🍎💧 Completing my first marathon was a moment of immense pride and accomplishment. 🎉🏅 The experience not only tested my limits but also taught me valuable lessons about perseverance and dedication. 🌟💪"
    },
    {
         author: "66a4b4ea51a2c93dc6f76cfe",
         category: "Technology",
         description: "My Experience with Building a Personal Blog from Scratch",
         content: "Building a personal blog from scratch was an exciting project that allowed me to explore web development and design. 🌐🖥️ I started by choosing a domain name and setting up web hosting. 🌟📦 Designing the layout and customizing the blog’s appearance to reflect my personal style was a creative process. 🎨🖌️ I used HTML, CSS, and JavaScript to create a responsive and user-friendly interface. 💻📱 Adding features such as a comment section, social media integration, and a content management system enhanced the functionality of the blog. 📝📲 Regularly updating content and engaging with readers helped me build a community around my blog. 👩‍💻💬 This experience not only improved my technical skills but also allowed me to share my passions and ideas with a wider audience. 🌟📝"
    }
];



async function seedDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/E-Share', { useNewUrlParser: true, useUnifiedTopology: true });
        
        for (const postData of posts) {
            const post = new Post(postData);
            await post.save();

            await User.findByIdAndUpdate(
                postData.author, 
                { $push: { posts: post._id } }, 
                { new: true, useFindAndModify: false }
            );
        }

        console.log('Database seeded successfully');
        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seedDatabase();
