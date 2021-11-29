// 1. Importaciones

const mongoose = require("mongoose")
const Movie = require("./../models/Movies")

require("dotenv").config()

// 2. Conexión a base de datos

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hptoy.mongodb.net/marvel`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 3. Datos a poblar.

const movies = [
    {
        title: "Eternals",
        director: "Chloé Zhao",
        stars: ["Gemma Chan", "Richard Madden", "Angelina Jolie", "Salma Hayek", "Kumail Nanjiani", "Lia McHugh", "Brian Tyree Henry", "Lauren Ridloff", "Barry Keoghan", "Ma Dong-seok", "Harish Patel", "Bill Skarsgard", "Hazz Sleiman", "Esai Daniel Cross", "Harry Stiles"],
        image: "https://style.shockvisual.net/wp-content/uploads/2021/08/ETERNALS-POSTER.jpg", 
        year: 2021,
        description: "In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth on their starship, the Domo, to exterminate the invasive Deviants. The last of the Deviants are killed in 1521, and the group's opinions differ over their continued responsibilities and their relationship with humankind. Over the next five hundred years, they mostly live apart from each other, awaiting Arishem's return.",
        movieUrl: "https://youtu.be/0WVDKZJkGlY"
    }, 
    {
        title: "Captain America: The First Avenger",
        director: "Joe Johnston",
        stars: ["Chis Evans", "Hayley Atwell", "Sebastian Stan", "Tommy Lee Jones", "Hugo Weaving", "Dominic Cooper", "Richard Armitage", "Stanley Tucci", "Samuel L. Jackson", "Toby Jones", "Neal McDonough", "Kenneth Choi"],
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e6/El_Primer_Vengador_Poster_5.png/revision/latest?cb=20151224142624&path-prefix=es",
        year: 2011,
        description: "It is 1942, America has entered World War II, and sickly but determined Steve Rogers is frustrated at being rejected yet again for military service. Everything changes when Dr. Erskine recruits him for the secret Project Rebirth. Proving his extraordinary courage, wits and conscience, Rogers undergoes the experiment and his weak body is suddenly enhanced into the maximum human potential. When Dr. Erskine is then immediately assassinated by an agent of Nazi Germany's secret HYDRA research department (headed by Johann Schmidt, a.k.a. the Red Skull), Rogers is left as a unique man who is initially misused as a propaganda mascot; however, when his comrades need him, Rogers goes on a successful adventure that truly makes him Captain America, and his war against Schmidt begins.",
        movieUrl: "https://youtu.be/JerVrbLldXw"
    },
    {
        title: "Captain Marvel",
        director: "Anna Boden",
        stars: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn", "Jude Law", "Annette Bening", "Djimon Hounsou", "Lee Pace", "Lashana Lynch", "Gemma Chan", "Clark Gregg", "Rune Temte", "Mckenna Grace"], 
        image: "https://m.media-amazon.com/images/I/91VwaglLKpL._AC_SY679_.jpg",
        year: 2019,
        description: "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.",
        movieUrl: "https://youtu.be/Z1BCujX3pw8"
    },
    {
        title: "Iron Man",
        director: "Jon Favreau", 
        stars: ["Robert Downey Jr.", "Terrence Howard", "Jeff Bridges", "Gwyneth Paltrow", "Leslie Bibb", "Shaun Toub", "Shaun Toub", "Clark Gregg", "Bill Smitrovich", "Sayed Badreya", "Paul Bettany", "Paul Bettany"], 
        image: "https://m.media-amazon.com/images/I/61h3QYQmxeL._AC_SY679_.jpg",
        year: 2008,
        description: "Playboy and visionary industrial genius Tony Stark, CEO of leading military defense contractor, Stark Industries, is in war-torn Kunar, Afghanistan, to demonstrate his company's new Jericho missile. With him is his friend and military liaison, Lieutenant Colonel James Rhodes, a member of the U.S. Air Force.",
        movieUrl: "https://youtu.be/KAE5ymVLmZg"
    },
    {
        title: "The Incredible Hulk",
        director: "Louis Leterrier",
        stars: ["Edward Norton", "Liv Tyler", "Tim Roth", "William Hurt", "Tim Blake Nelson", "Ty Burrell", "Christina Cabot"],
        image: "https://m.media-amazon.com/images/I/61ikONHVOAL._AC_SY679_.jpg", 
        year: 2008,
        description: "After surviving a deadly gamma radiation accident, scientist Bruce Banner travels the world in search for a cure to his inner force of rage that turns him into a massive green monster known as the Hulk. Though he is close, Banner must watch out because the malevolent General Ross and his team are searching for him and want to use his condition for military weaponry. Running out of time and options, Banner turns to his old flame Betty Ross for help. Meanwhile, a new threat rises as a power hungry soldier turns into a deadlier and more terrifying beast that can match even the Hulk's powers.",
        movieUrl: "https://youtu.be/rExil-4VDSA"
    },
    {
        title: "Iron Man 2",
        director: "Jon Favreau",
        stars: ["Robert Downey Jr,", "Gwyneth Paltrow", "Don Cheadle", "Scarlett Johansson", "Sam Rockwell", "Mickey Rourke", "Samuel L. Jackson", "Clark Gregg", "John Slattery", "Garry Shandling", "Paul Bettany", "Kate Mara", "Leslie Bibb", "Jon Favreau"],
        image:
        year: 2010,
        description: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        movieUrl: "https://youtu.be/wKtcmiifycU"
    },
    {
        title: "Thor",
        director: "Kenneth Branagh",
        stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Stellan Skarsgård", "Kat Dennings", "Clark Gregg", "Clark Gregg", "Idris Elba", "Ray Stevenson", "Tadanobu Asano", "Josh Dallas", "Josh Dallas", "Rene Russo", "Adriana Barraza"],
        image: 
        year: 2011,
        description: "The warrior Thor is cast out of the fantastic realm of Asgard by his father Odin for his arrogance and sent to Earth to live amongst humans. Falling in love with scientist Jane Foster teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth."
        movieUrl:
    },
    {
        title: "The Avengers",
        director: "Joss Whedon"
        stars: ["Robert Downey Jr.", "Chris Evans", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Cobie Smulders", "Stellan Skarsgård", "Samuel L. Jackson", "Gwyneth Paltrow", "Paul Bettany"],
        image: 
        year: 2012,
        description: "S.H.I.E.L.D. has located the mysterious Tesseract device and the Army's super soldier Captain America. The Tesseract is actually a gateway to an entirely new world called Asgard. A mysterious being known as Loki arrives on earth and immediately assumes that he can rule all human beings. But that irks S.H.I.E.L.D. director Nick Fury the wrong way. As Loki escapes with the Tesseract, Nick Fury believes this is an act of war against Earth. His only hope is to assemble an actual team of super heroes. Dr. Bruce Banner, who turns into an enormous green rage monster known as the Hulk. Tony Stark and his venerable Iron Man armor. Captain America, the Stark Enterprises created super soldier. Thor, the god of thunder, protector of Earth and his home planet of Asgard, and Loki's brother. Master assassins Hawkeye and Natasha Romanoff. Together they will become a team to take on an attack that will call them to become the greatest of all time.",
        movieUrl:
    },
    {
        title: "Iron Man 3",
        director: "Shane Black",
        stars: ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Guy Pearce", "Rebecca Hall", "Jon Favreau", "Ben Kingsley", "James Badge Dale", "Stephanie Szostak", "Paul Bettany"],
        image: 
        year: 2013,
        description: "The events of Loki's attack on New York City has left Tony Stark a completely changed man. Now saddled with a severe case of insomnia and post traumatic stress disorder, Tony spends his sleepless nights the only way he knows how - coming up with new prototypes for the Iron Man suit. But now new events require that Tony suit up again. A villainous mad man known only as the Mandarin has staged a horrible attack on the Chinese Theater in Los Angeles, and is coming for Tony. An angry Tony wants to confront the Mandarin face to face, who proceeds to stage an attack on Tony's Malibu mansion and leaves him with absolutely nothing - no Pepper, no toys except for a defunct Iron Man prototype called the MK42, and he's stranded in the middle of Tennessee. Tony believes the attack on the Chinese Theater and an attack on a small town in Tennessee are related. As he puts the pieces together and tries to get the MK42 working, he discovers far more sinister forces at work greater than the Mandarin himself. But how does an event from Tony's past fit in with the events of the present?",
        movieUrl:
    }, 
    {
        title: "Thor: The Dark World",
        director: "Alan Taylor",
        stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Christopher Eccleston", "Jaimie Alexander", "Zachary Levi", "Ray Stevenson", "Tadanobu Asano", "Idris Elba", "Rene Russo", "Adewale Akinnuoye-Agbaje", "Kat Dennings", "Stellan Skarsgård"], 
        image:
        year: 2013,
        description: "Thor returns to do battle with Malekith, the vengeful leader of a primordial race that seeks to destroy the Nine Realms, in this big-budget comic book adventure set after the events of Marvel's The Avengers. With even Odin unable to protect Asgard from the approaching darkness, the god of thunder reunites with Jane Foster and prepares to make the ultimate sacrifice in order to save the world from certain destruction.",
        movieUrl:
    }, 
    {
        title: "Captain America: The Winter Soldier",
        director: "Anthony Russo, Joe Russo" 
        stars: ["Chris Evans", "Samuel L. Jackson", "Scarlett Johansson", "Robert Redford", "Sebastian Stan", "Anthony Mackie", "Cobie Smulders", "Frank Grillo", "Emily VanCamp", "Hayley Atwell", "Toby Jones", "Stan Lee"], 
        image:
        year: 2014,
        description: "For Steve Rogers, awakening after decades of suspended animation involves more than catching up on pop culture; it also means that this old school idealist must face a world of subtler threats and difficult moral complexities. That becomes clear when Director Nick Fury is killed by the mysterious assassin, the Winter Soldier, but not before warning Rogers that SHIELD has been subverted by its enemies. When Rogers acts on Fury's warning to trust no one there, he is branded as a traitor by the organization. Now a fugitive, Captain America must get to the bottom of this deadly mystery with the help of the Black Widow and his new friend, The Falcon. However, the battle will be costly for the Sentinel of Liberty, with Rogers finding enemies where he least expects them while learning that the Winter Soldier looks disturbingly familiar.",
        movieUrl:
    },
    {
        title: "Guardians of the Galaxy",
        director: "James Gunn",
        stars: ["James Gunn", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Lee Pace", "Karen Gillan", "Djimon Hounsou", "John C. Reilly", "Glenn Close", "Benicio Del Toro", "Laura Haddock", "Sean Gunn"],
        image:
        year: 2014,
        description: "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the 'Guardians of the Galaxy' to save the galaxy."
        movieUrl:
    },
    {
        title: "Guardians of the Galaxy Vol.2",
        director: "James Gunn",
        stars: ["James Gunn", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Karen Gillan", "Pom Klementieff", "Sylvester Stallone", "Sean Gunn", "Sylvester Stallone", "Elizabeth Debicki", "Chris Sullivan", "Tommy Flanagan", "Laura Haddock"],
        image:
        year: 2017,
        description: "After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming. And the Guardians find that they are up against a devastating new menace who is out to rule the galaxy.",
        movieUrl:
    },
    {
        title: "Avengers. Age of Ultron",
        director: "Joss Whedon",
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Jeremy Renner", "James Spader", "Samuel L. Jackson", "Don Cheadle", "Aaron Taylor-Johnson", "Elizabeth Olsen", "Paul Bettany", "Cobie Smulders", "Cobie Smulders", "Hayley Atwell", "Idris Elba", "Linda Cardellini", "Stellan Skarsgård", "Claudia Kim", "Andy Serkis", "Stan Lee"],
        image:
        year: 2015,
        description: "After finding intelligence in Loki's scepter, Tony Stark and Bruce Banner use it to start Ultron, a peacemaker, who soon uncovers the world's wrongs, and plans to rid human error. With help from experimented human beings turned allies, the Avengers search to hunt for Ultron, who is trying to make a synthetic human body to upload his mind into."
        movieUrl:
    },
    {
        title: "Ant Man",
        director: "Peyton Reed",
        stars: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly", "Corey Stoll", "Bobby Cannavale", ]
        image:
        year: 2015,
        description:
        movieUrl:
    },
    {
        title: "Captain America: Civil War",
        director: 
        stars:
        image:
        year: 2016,
        description:
        movieUrl:
    },
    {
        title: "Black Widow",
        director: 
        stars:
        image:
        year: 2020,
        description:
        movieUrl:
    }, 
    {
        title: "Black Panther",
        director: 
        stars:
        image:
        year: 2018,
        description:
        movieUrl:
    },
    {
        title: "Spider-Man: Homecoming",
        director: 
        stars:
        image:
        year: 2017,
        description:
        movieUrl:
    }, 
    {
        title: "Ant Man and the Wasp",
        director: 
        stars:
        image:
        year: 2018,
        description:
        movieUrl:
    },
    {
        title: "Dr. Strange",
        director: 
        stars:
        image:
        year: 2016,
        description:
        movieUrl:
    },
    {
        title: "Thor: Ragnarok",
        director: 
        stars:
        image:
        year: 2017,
        description:
        movieUrl:
    },
    {
        title: "Avengers: Infinity War",
        director: 
        stars:
        image:
        year: 2018,
        description:
        movieUrl:
    },
    {
        title: "Avengers: Endgame",
        director: 
        stars:
        image:
        year: 2019,
        description:
        movieUrl:
    },
    {
        title: "Spider-Man: Far from home",
        director: 
        stars:
        image:
        year: 2019,
        description:
        movieUrl:
    },
    {
        title: "Shang-Chi",
        director: 
        stars:
        image:
        year: 2021,
        description:
        movieUrl:
    }
]