import profile1 from '../assets/images/Blog-Image/Aspect ratio.png'
import profile2 from '../assets/images/Blog-Image/Aspect ratio (1).png'
import profile3 from '../assets/images/Blog-Image/Aspect ratio (2).png'
import profile4 from '../assets/images/Blog-Image/Aspect ratio (3).png'
import cover1 from '../assets/images/Blog-Image/c6.jpg'
import cover2 from '../assets/images/Blog-Image/3_rome-in-a-day-walking-through-the-eternal-city.jpg'
import cover3 from '../assets/images/Blog-Image/The-10-Most-Exciting-Things-to-Do-in-Cairo-Egypt-.webp'
import cover4 from '../assets/images/Blog-Image/348698-Madrid.avif'

export const BlogArticle = [
    {
        id:1,
        title: "Paris: Beyond the Eiffel Tower",
        background: cover1,
        author: {
            name: "Sophie Leclair",
            image: profile2,
            bio: "Sophie Leclair is a Paris-based writer and photographer with a passion for uncovering hidden gems in the City of Lights. After living in Paris for over a decade, she’s learned to love its quiet corners just as much as its iconic landmarks. Sophie’s work focuses on travel, food, and local culture, capturing the essence of places off the beaten path. When she's not exploring Paris or sipping espresso at a café, she’s traveling the world in search of her next great adventure."
        },
        published_on: "April 15, 2025",
        reading_time: "4 min",
        tags: ["Paris", "France", "CityGuide", "HiddenSpots"],
        content: {
            intro: "Ah, Paris—the city of love, lights, and a million photo ops. But once you’ve ticked off the Eiffel Tower, Notre-Dame, and the Louvre, where do you go? This blog takes you beyond the classics to the soul of Paris—its hidden corners, quiet cafés, and local secrets.",
            top_experiences: [
            {
                place: "Canal Saint-Martin",
                description: "A favorite among Parisians, this laid-back neighborhood is lined with cozy cafés, boutique shops, and bridges perfect for golden hour pics."
            },
            {
                place: "Le Marais",
                description: "One of Paris’s oldest districts, it’s a blend of Jewish heritage, LGBTQ+ culture, art galleries, and legendary falafel from L’As du Fallafel."
            },
            {
                place: "Musée de l'Orangerie",
                description: "Nestled in the Tuileries Garden, this gem houses Monet’s Water Lilies in an immersive oval room—perfect for some peace in a busy city."
            }
            ],
            local_bite: "Grab a fresh croissant from Du Pain et des Idées, one of the best bakeries in Paris.",
            pro_tip: "Visit in April or early May—mild weather, blooming cherry blossoms, and far fewer crowds."
        }
    },
    {
        id:2,
        title: "Rome: Eternal City, Endless Wonders",
        background: cover2,
        author: {
        name: "Luca Romano",
        image: profile1,
        bio: "Luca Romano is an Italian travel writer and local Roman who shares the secrets of his city with the world. Born and raised in the heart of Rome, he has always been captivated by the city’s history, art, and, of course, its cuisine. Whether it’s through the lens of his camera or his pen, Luca brings the timeless beauty and energy of Rome to life. When he's not writing, you’ll find him enjoying a plate of cacio e pepe or taking long walks along the Tiber River."
        },
        published_on: "April 14, 2025",
        reading_time: "5 min",
        tags: ["Rome", "Italy", "CultureTrip", "HistoricCities"],
        content: {
            intro: "Every cobblestone in Rome tells a story—from gladiator battles at the Colosseum to romantic evenings at Trevi Fountain. But there's more to Rome than tourist spots.",
            top_experiences: [
                {
                place: "Trastevere",
                description: "This colorful neighborhood is filled with vine-covered buildings, live music, and mouthwatering pasta. It's Rome’s beating bohemian heart."
                },
                {
                place: "Villa Borghese Gardens",
                description: "A huge green space perfect for biking, picnics, or catching a view of Piazza del Popolo from the Pincian Terrace."
                },
                {
                place: "Campo de' Fiori",
                description: "A vibrant open-air market by day, and a social hub with bars and restaurants by night."
                }
            ],
            local_bite: "You must try cacio e pepe from Felice a Testaccio. It’s Roman pasta perfection.",
            pro_tip: "Book major attractions in advance, and carry a reusable water bottle—Rome has public fountains with drinkable water all over."
        }
    },
    {
        id:3,
        title: "Cairo: Where Ancient Meets Urban Chaos",
        background: cover3,
        author: {
        name: "Layla Nasser",
        image: profile3,
        bio: "Layla Nasser is an Egyptologist and seasoned travel writer based in Cairo. With a deep love for the ancient wonders of her homeland, she brings history and modern-day Egypt together in her writing. Layla has spent years exploring the streets, markets, and tombs of Cairo, capturing the stories that make this city one of the most fascinating in the world. When she's not penning travel stories, Layla is leading private tours and uncovering Egypt’s lesser-known treasures."
        },
        published_on: "April 13, 2025",
        reading_time: "5 min",
        tags: ["Cairo", "Egypt", "Pyramids", "CulturalExperience"],
        content: {
            intro: "Cairo is a city that throws you into the deep end—in the best way possible. It’s loud, it’s fast, it’s unpredictable. But that chaos comes with ancient wonder, rich culture, and street food that might just change your life. From standing at the foot of the Pyramids to sipping mint tea in a market that hasn’t changed in centuries, Cairo is where history and hustle collide.",
            top_experiences: [
            {
            place: "Pyramids of Giza",
            description: "Yes, they’re touristy—but they’re also mind-blowing."
            },
            {
            place: "Khan el-Khalili Market",
            description: "A maze of spices, lamps, and local treasures."
            },
            {
            place: "Coptic Cairo",
            description: "Discover Egypt’s Christian roots and serene churches."
            },
            {
            place: "Nile River Felucca Ride",
            description: "For a calming break, take a traditional felucca boat ride on the Nile River, especially around sunset."
            }
            ]
        },
        local_bite: "Grab a fresh taameya (Egyptian falafel made with fava beans) sandwich and wash it down with sugarcane juice from a street vendor. Cheap, authentic, and delicious.",
        pro_tip: "Dress modestly, especially in mosques and traditional areas. Cairo traffic is real—plan your trips early or later in the day. Download offline maps; cell service can be spotty in some areas."
    },
    {
        id:4,
        title: "Madrid: The Heartbeat of Spain",
        background: cover4,
        author: {
        name: "Carlos Fernandez",
        image: profile4,
        bio: "Carlos Fernandez is a Madrid-based travel expert and cultural enthusiast with a particular fondness for Spain’s history and architecture. After studying Spanish art and history, he began exploring every nook and cranny of Madrid, from the iconic royal palaces to the hidden tapas bars. Carlos’s writing immerses readers in the vibrant life of the city, offering unique perspectives and tips that only a true local could share. Outside of writing, he enjoys flamenco dancing and a good glass of Rioja."
        },
        published_on: "April 16, 2025",
        reading_time: "5 min",
        tags: ["Madrid", "Spain", "CultureTrip", "EuropeanDestinations"],
        content: {
            intro: "Madrid pulses with energy. From the royal palaces and world-class art museums to the buzzing tapas bars and lively plazas, Spain’s capital invites you to live in the moment. It’s a city full of passion—whether you’re watching a flamenco performance or enjoying an espresso in a sunlit café.",
            top_experiences: [
                {
                place: "Royal Palace of Madrid",
                description: "One of Europe’s grandest palaces, the Royal Palace is a must-see. Explore lavish rooms, manicured gardens, and the ceremonial halls that have seen centuries of royal history."
                },
                {
                place: "Museo del Prado",
                description: "Home to works by Velázquez, Goya, and El Greco, the Prado is a treasure trove of classical art. Even if you’re not an art enthusiast, the sheer scale of the collection is breathtaking."
                },
                {
                place: "Retiro Park",
                description: "If you need a break from the city’s buzz, head to Retiro. Rent a rowboat on the serene lake, or explore the park’s beautiful gardens and hidden corners."
                },
                {
                place: "Tapas Tour in La Latina",
                description: "Madrid’s food scene revolves around tapas—small, delicious dishes perfect for sharing. La Latina is the best neighborhood for a tapas crawl. Don’t miss the patatas bravas and jamón ibérico."
                },
            ],
            local_bite: "Savor a bocadillo de calamares (fried squid sandwich) from one of Madrid’s street vendors, especially near Plaza Mayor. It’s a local favorite!",
            pro_tip: "Visit the Royal Palace early to avoid crowds, and use Madrid’s efficient metro system to zip around the city like a local."
        }
    }        
]
  