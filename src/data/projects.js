import FNTSY from '../assets/fntsy-project.png';
import Cradle from '../assets/cradle-project.png';
import Chariot from '../assets/chariot-project.png';
import FlexInc from '../assets/flexinc-project.png';
import EduNest from '../assets/edunest-project.png';

// Importing images for projects
import EduNestInfo from '../assets/edunest-project-info.png';
import EduNestInfo2 from '../assets/edunest-project-info-2.png';
import EduNestInfo3 from '../assets/edunest-project-info-3.png';
import FlexIncInfo from '../assets/flexinc-project-info.png';
import FlexIncInfo2 from '../assets/flexinc-project-info-2.png';
import FlexIncInfo3 from '../assets/flexinc-project-info-3.png';


const projects = [
    {
        id: "fntsy",
        label: "FNTSY.",
        title: "A Fantasy Social App",
        image: FNTSY,
        about: `FNTSY is a modern fantasy app that puts the social side of fantasy sports front and center. Designed for today’s fans, it turns traditional leagues into interactive communities. With live scoring, league tools, real-time chat and features like memes and reactions, FNTSY makes playing fantasy as fun as talking about it.`,
        challenge: `Most fantasy sports platforms lack built-in social features, forcing fans to use separate apps or chats to talk trash and share highlights. The goal was to combine fantasy management with real community interaction, all in one smooth, user-friendly app.`,
        results: `FNTSY launched with a loyal user base that loved its social-first design. Users spent more time on FNTSY than on other platforms thanks to built-in chat, sharing and live league updates. FNTSY made fantasy sports easier and more social, becoming a true hub for fans.`,
        images: []
    },
    {
        id: "cradle",
        label: "Cradle.",
        title: "A Smart Baby Monitor",
        image: Cradle,
        about: `Cradle is a smart baby monitor app that connects with a custom crib system to help babies sleep better and parents feel at ease. Built to strengthen the parent-baby bond, Cradle turns a phone into a real-time tool for tracking sleep, setting soothing routines and controlling the crib remotely. More than just a monitor, Cradle actively supports restful, tech-assisted sleep for healthier families.`,
        challenge: `Most baby monitors just watch and alert but don’t help improve sleep. Cradle set out to change that with an easy-to-use app that tracks patterns, adjusts the crib environment automatically and gives parents useful insights, even when they’re exhausted.`,
        results: `Cradle helped babies sleep 30 percent longer and made 86 percent of parents feel more confident at night. In the first month, 78 percent of downloads turned into active users, with most using the automated soothing features to cut down on overnight wake-ups.`,
        images: []
    },
    {
        id: "chariot",
        label: "Chariot.",
        title: "A Premium Ridesharing Experience",
        image: Chariot,
        about: `Chariot is a luxury ride-sharing app for people who expect more than just a ride. Built for those who value comfort, discretion and style, it makes booking premium chauffeur services simple and seamless. Whether for a black-tie event, a business meeting or a stylish night out, Chariot ensures every ride is elegant and effortless, with high-end cars, trained drivers and smooth pickups.`,
        challenge: `Most ride apps focus on price and scale, not experience. Chariot set out to fill this gap with a high-touch service that removes hassle and keeps premium standards high, from booking to in-car details. The goal was to deliver polish, privacy and peace of mind for riders who want more than utility.`,
        results: `Chariot earned 92 percent “exceptional” ratings from riders and grew new premium sign-ups by 40 percent month over month in the first 90 days. Nearly 70 percent of users booked again within ten days. In the launch city, Chariot onboarded over 100 top-rated chauffeurs and gained strong traction with event guests, business clients and luxury hotel partners. The result: a ride experience that feels like an extension of the user’s personal brand.`,
        images: []
    },
    {
        id: "flexinc",
        label: "Flex Inc.",
        title: "Your Personal Assistant for Hybrid Living",
        image: FlexInc,
        about: `Flex Inc. is your personal assistant for hybrid living. It’s designed to help you manage your work-life balance by automating tasks and providing personalized recommendations. With features like smart scheduling, task management, and productivity tracking, Flex Inc. makes it easy to stay organized and focused on what matters most. Whether you’re working from home or on the go, Flex Inc. is there to support you every step of the way.`,
        challenge: `In today’s fast-paced world, managing work-life balance can be a challenge. Flex Inc. was created to address this need by providing a comprehensive solution that helps users automate their daily tasks and stay organized. The goal was to create an app that not only simplifies life but also enhances productivity and well-being.`,
        results: `Flex Inc. has been embraced by users looking for a smarter way to manage`,
        images: [FlexIncInfo, FlexIncInfo2, FlexIncInfo3]
    },
    {
        id: "edunest",
        label: "EduNest.",
        title: "A New Take on UW Learn",
        image: EduNest,
        about: `EduNest is your campus, your courses, your way.It’s a new take on UW Learn that puts students in control of their education.With features like personalized course recommendations, interactive learning tools, and community engagement, EduNest makes it easy to navigate the academic landscape and succeed in your studies.Whether you’re a first- year student or a seasoned scholar, EduNest is here to support your educational journey.`,
        challenge: `In a rapidly changing educational environment, students often struggle to find the resources and support they need to succeed.EduNest was created to address this challenge by providing a comprehensive platform that empowers students to take charge of their learning experience.`,
        results: `EduNest has been well - received by students, with many reporting improved academic performance and greater satisfaction with their educational experience.By putting students at the center of their learning journey, EduNest is helping to create a more engaged and successful student body.`,
        images: [EduNestInfo, EduNestInfo2, EduNestInfo3]
    },
    // Add more projects here...
];

export default projects;
