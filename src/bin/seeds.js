// 1. Importaciones

const mongoose = require("mongoose")
const Movie = require("./../models/Movies")

require("dotenv").config()

// 2. Conexión a base de datos

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hptoy.mongodb.net/marvel`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 3. Establecer los datos para poblar la base de datos 

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
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1a/Iron_Man_2_Poster_Oficial_Internacional.png/revision/latest?cb=20151006204823&path-prefix=es",
        year: 2010,
        description: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        movieUrl: "https://youtu.be/wKtcmiifycU"
    },
    {
        title: "Thor",
        director: "Kenneth Branagh",
        stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Stellan Skarsgård", "Kat Dennings", "Clark Gregg", "Clark Gregg", "Idris Elba", "Ray Stevenson", "Tadanobu Asano", "Josh Dallas", "Josh Dallas", "Rene Russo", "Adriana Barraza"],
        image: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
        year: 2011,
        description: "The warrior Thor is cast out of the fantastic realm of Asgard by his father Odin for his arrogance and sent to Earth to live amongst humans. Falling in love with scientist Jane Foster teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth.",
        movieUrl: "https://youtu.be/JOddp-nlNvQ"
    },
    {
        title: "The Avengers",
        director: "Joss Whedon",
        stars: ["Robert Downey Jr.", "Chris Evans", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Cobie Smulders", "Stellan Skarsgård", "Samuel L. Jackson", "Gwyneth Paltrow", "Paul Bettany"],
        image: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/268821/4556789/apiihy1mm__31528.1625622408.jpg?c=2",
        year: 2012,
        description: "S.H.I.E.L.D. has located the mysterious Tesseract device and the Army's super soldier Captain America. The Tesseract is actually a gateway to an entirely new world called Asgard. A mysterious being known as Loki arrives on earth and immediately assumes that he can rule all human beings. But that irks S.H.I.E.L.D. director Nick Fury the wrong way. As Loki escapes with the Tesseract, Nick Fury believes this is an act of war against Earth. His only hope is to assemble an actual team of super heroes. Dr. Bruce Banner, who turns into an enormous green rage monster known as the Hulk. Tony Stark and his venerable Iron Man armor. Captain America, the Stark Enterprises created super soldier. Thor, the god of thunder, protector of Earth and his home planet of Asgard, and Loki's brother. Master assassins Hawkeye and Natasha Romanoff. Together they will become a team to take on an attack that will call them to become the greatest of all time.",
        movieUrl: "https://youtu.be/eOrNdBpGMv8"
    },
    {
        title: "Iron Man 3",
        director: "Shane Black",
        stars: ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Guy Pearce", "Rebecca Hall", "Jon Favreau", "Ben Kingsley", "James Badge Dale", "Stephanie Szostak", "Paul Bettany"],
        image: "https://lavozenoffdotnet.files.wordpress.com/2013/02/iron_man_3-857552501-large.jpg?w=640",
        year: 2013,
        description: "The events of Loki's attack on New York City has left Tony Stark a completely changed man. Now saddled with a severe case of insomnia and post traumatic stress disorder, Tony spends his sleepless nights the only way he knows how - coming up with new prototypes for the Iron Man suit. But now new events require that Tony suit up again. A villainous mad man known only as the Mandarin has staged a horrible attack on the Chinese Theater in Los Angeles, and is coming for Tony. An angry Tony wants to confront the Mandarin face to face, who proceeds to stage an attack on Tony's Malibu mansion and leaves him with absolutely nothing - no Pepper, no toys except for a defunct Iron Man prototype called the MK42, and he's stranded in the middle of Tennessee. Tony believes the attack on the Chinese Theater and an attack on a small town in Tennessee are related. As he puts the pieces together and tries to get the MK42 working, he discovers far more sinister forces at work greater than the Mandarin himself. But how does an event from Tony's past fit in with the events of the present?",
        movieUrl: "https://youtu.be/f_h95mEd4TI"
    }, 
    {
        title: "Thor: The Dark World",
        director: "Alan Taylor",
        stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Christopher Eccleston", "Jaimie Alexander", "Zachary Levi", "Ray Stevenson", "Tadanobu Asano", "Idris Elba", "Rene Russo", "Adewale Akinnuoye-Agbaje", "Kat Dennings", "Stellan Skarsgård"], 
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Thor_-_The_Dark_World_poster.png/revision/latest?cb=20191029194909&path-prefix=es",
        year: 2013,
        description: "Thor returns to do battle with Malekith, the vengeful leader of a primordial race that seeks to destroy the Nine Realms, in this big-budget comic book adventure set after the events of Marvel's The Avengers. With even Odin unable to protect Asgard from the approaching darkness, the god of thunder reunites with Jane Foster and prepares to make the ultimate sacrifice in order to save the world from certain destruction.",
        movieUrl: "https://youtu.be/npvJ9FTgZbM"
    }, 
    {
        title: "Captain America: The Winter Soldier",
        director: "Anthony Russo, Joe Russo",
        stars: ["Chris Evans", "Samuel L. Jackson", "Scarlett Johansson", "Robert Redford", "Sebastian Stan", "Anthony Mackie", "Cobie Smulders", "Frank Grillo", "Emily VanCamp", "Hayley Atwell", "Toby Jones", "Stan Lee"], 
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/15/Captain_America_The_Winter_Soldier_Poster_3.png/revision/latest?cb=20191029194950&path-prefix=es",
        year: 2014,
        description: "For Steve Rogers, awakening after decades of suspended animation involves more than catching up on pop culture; it also means that this old school idealist must face a world of subtler threats and difficult moral complexities. That becomes clear when Director Nick Fury is killed by the mysterious assassin, the Winter Soldier, but not before warning Rogers that SHIELD has been subverted by its enemies. When Rogers acts on Fury's warning to trust no one there, he is branded as a traitor by the organization. Now a fugitive, Captain America must get to the bottom of this deadly mystery with the help of the Black Widow and his new friend, The Falcon. However, the battle will be costly for the Sentinel of Liberty, with Rogers finding enemies where he least expects them while learning that the Winter Soldier looks disturbingly familiar.",
        movieUrl: "https://youtu.be/tbayiPxkUMM"
    },
    {
        title: "Guardians of the Galaxy",
        director: "James Gunn",
        stars: ["James Gunn", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Lee Pace", "Karen Gillan", "Djimon Hounsou", "John C. Reilly", "Glenn Close", "Benicio Del Toro", "Laura Haddock", "Sean Gunn"],
        image: "https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_SL1000_.jpg",
        year: 2014,
        description: "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the 'Guardians of the Galaxy' to save the galaxy.",
        movieUrl: "https://youtu.be/d96cjJhvlMA"
    },
    {
        title: "Guardians of the Galaxy Vol.2",
        director: "James Gunn",
        stars: ["James Gunn", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Karen Gillan", "Pom Klementieff", "Sylvester Stallone", "Sean Gunn", "Sylvester Stallone", "Elizabeth Debicki", "Chris Sullivan", "Tommy Flanagan", "Laura Haddock"],
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/GOTG_Vol_2_-_Poster.png/revision/latest?cb=20191029195255&path-prefix=es",
        year: 2017,
        description: "After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming. And the Guardians find that they are up against a devastating new menace who is out to rule the galaxy.",
        movieUrl: "https://youtu.be/wUn05hdkhjM"
    },
    {
        title: "Avengers. Age of Ultron",
        director: "Joss Whedon",
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Jeremy Renner", "James Spader", "Samuel L. Jackson", "Don Cheadle", "Aaron Taylor-Johnson", "Elizabeth Olsen", "Paul Bettany", "Cobie Smulders", "Cobie Smulders", "Hayley Atwell", "Idris Elba", "Linda Cardellini", "Stellan Skarsgård", "Claudia Kim", "Andy Serkis", "Stan Lee"],
        image: "https://m.media-amazon.com/images/I/71wV2rzkFwL._AC_SL1022_.jpg",
        year: 2015,
        description: "After finding intelligence in Loki's scepter, Tony Stark and Bruce Banner use it to start Ultron, a peacemaker, who soon uncovers the world's wrongs, and plans to rid human error. With help from experimented human beings turned allies, the Avengers search to hunt for Ultron, who is trying to make a synthetic human body to upload his mind into.",
        movieUrl: "https://youtu.be/tmeOjFno6Do"
    },
    {
        title: "Ant Man",
        director: "Peyton Reed",
        stars: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly", "Corey Stoll", "Bobby Cannavale", "Anthony Mackie", "Judy Greer", "Abby Ryder Fortson", "Michael Peña", "David Dastmalchian", "T.I.", "Wood Harris", "Hayley Atwell", "John Slattery", "Martin Donovan"],
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/bb/Ant-Man_Poster.png/revision/latest?cb=20191029195134&path-prefix=es",
        year: 2015,
        description: "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
        movieUrl: "https://youtu.be/pWdKf3MneyI"
    },
    {
        title: "Captain America: Civil War",
        director: "Anthony Russo, Joe Russo", 
        stars: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Sebastian Stan", "Anthony Mackie", "Don Cheadle", "Jeremy Renner", "Chadwick Boseman", "Paul Bettany", "Elizabeth Olsen", "Paul Rudd", "Emily VanCamp", "Tom Holland", "Daniel Brühl", "Frank Grillo", "Marisa Tomei", "John Kani", "John Slattery", "Hope Davis", "Alfre Woodard"],
        image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
        year: 2016,
        description: "With many people fearing the actions of super heroes, the government decides to push for the Hero Registration Act, a law that limits a hero's actions. This results in a division in The Avengers. Iron Man stands with this Act, claiming that their actions must be kept in check otherwise cities will continue to be destroyed, but Captain America feels that saving the world is daring enough and that they cannot rely on the government to protect the world. This escalates into an all-out war between Team Iron Man (Iron Man, Black Panther, Vision, Black Widow, War Machine, and Spider-Man) and Team Captain America (Captain America, Bucky Barnes, Falcon, Scarlet Witch, Hawkeye, and Ant Man) while a new villain emerges.",
        movieUrl: "https://youtu.be/43NWzay3W4s"
    },
    {
        title: "Black Widow",
        director: "Cate Shortland", 
        stars: ["Scarlett Johansson", "Florence Pugh", "Rachel Weisz", "David Harbour","Ray Winstone", "Ever Anderson", "Violet McGraw", "O-T Fagbenle", "William Hurt", "Olga Kurylenko", "Ryan Kiera Armstrong"],
        image: "http://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_2660-173807.jpg?v=1611687837",
        year: 2020,
        description: "In Marvel Studios' action-packed spy thriller 'Black Widow,' Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        movieUrl: "https://youtu.be/Fp9pNPdNwjI"
    }, 
    {
        title: "Black Panther",
        director: "Ryan Coogler",
        stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira", "Martin Freeman", "Daniel Kaluuya", "Letitia Wright", "Winston Duke", "Sterling K. Brown", "Angela Bassett", "Forest Whitaker", "Andy Serkis", "Florence Kasumba", "John Kani", "David S. Lee"],
        image: "https://images-na.ssl-images-amazon.com/images/I/91eR7HRz9TL.jpg",
        year: 2018,
        description: "Follows T'Challa who, after the death of his father, the King who of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king and Black Panther is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
        movieUrl: "https://youtu.be/dxWvtMOGAhw"
    },
    {
        title: "Spider-Man: Homecoming",
        director: "Jon Watts",
        stars: ["Tom Holland", "Michael Keaton", "Robert Downey Jr.", "Marisa Tomei", "Jon Favreau", "Gwyneth Paltrow", "Zendaya", "Donald Glover", "Jacob Batalon", "Laura Harrier", "Tony Revolori", "Bokeem Woodbine", "Tyne Daly", "Kenneth Choi", "Angourie Rice", "Martin Starr", "Michael Chernus"],
        image: "https://m.media-amazon.com/images/I/91HzykE4bdL._AC_SL1500_.jpg",
        year: 2017,
        description: "A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging super hero Spider-Man. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark. Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.",
        movieUrl: "https://youtu.be/39udgGPyYMg"
    }, 
    {
        title: "Ant Man and the Wasp",
        director: "Peyton Reed",
        stars: ["Paul Rudd", "Evangeline Lilly", "Michael Peña", "Walton Goggins", "Bobby Cannavale", "Judy Greer", "T.I.", "David Dastmalchian", "Hannah John-Kamen", "Abby Ruder Fortson", "Randal Park", "Michelle Pfeiffer", "Laurence Fishburne", "Michael Douglas", "Goran Kostic"],
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/70/A_%26_TW_poster_1.png/revision/latest?cb=20191029195613&path-prefix=es",
        year: 2018,
        description: "In the aftermath of his experiences in Germany with the Avengers, Scott Lang must now deal with the consequences of his past actions while under house arrest. But Scott answers a call back into action when Hope Van Dyne and Dr. Hank Pym approach him with a new mission to find the truth about secrets from their past, all while facing a new enemy who anticipates their every move.",
        movieUrl: "https://youtu.be/UUkn-enk2RU"
    },
    {
        title: "Dr. Strange",
        director: "Scott Derrickson",
        stars: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Benedict Wong", "Mads Mikkelsen", "Tilda Swinton", "Michael Stuhlbarg", "Benjamin Bratt", "Scott Adkins", "Zara Phytian", "Alla Safi"],
        image: "https://m.media-amazon.com/images/I/71gyLVWIfIL._AC_SL1032_.jpg",
        year: 2016,
        description: "Stephen Strange is a surgeon with a God complex. When he gets in an accident and his hands are injured, he feels as if his life is over. His therapist tells him of a guy he knew who couldn't walk but is now walking again. The therapist tells Strange where he can find the man and he tells Strange he did it with his mind, he went to a place called Kamar-Taj and there he was taught how to use his mind to heal himself. Strange goes there to seek the ones who taught him. He finds them and learns that they use mystic arts and they take Strange in, reluctantly and teach him. Strange learns that a former member is planning something and tries to stop him. But he also learns that his teacher is keeping a secret too.",
        movieUrl: "https://youtu.be/Lt-U_t2pUHI"
    },
    {
        title: "Thor: Ragnarok",
        director: "Taika Waititi",
        stars: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett", "Idris Elba", "Jeff Goldblum", "Tessa Thompson", "Karl Urban", "Mark Ruffalo", "Anthony Hopkins", "Benedict Cumberbatch", "Taika Waititi", "Rachel House", "Ray Stevenson", "Zachary Levi"],
        image: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        year: 2017,
        description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against The Incredible Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
        movieUrl: "https://youtu.be/ue80QwXMRHg"
    },
    {
        title: "Avengers: Infinity War",
        director: "Anthony Russo, Joe Russo", 
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Don Cheadle", "Benedict Cumberbatch", "Tom Holland", "Chadwick Boseman", "Zoe Saldana", "Karen Gillan", "Tom Hiddleston", "Paul Bettany", "Elizabeth Olsen", "Anthony Mackie", "Sebastian Stan", "Idris Elba", "Danai Gurira", "Peter Dinklage", "Benedict Wong", "Pom Klementieff", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Gwyneth Paltrow", "Benicio Del Toro", "Josh Brolin", "Chris Pratt", "Sean Gunn", "Letitia Wright", "Tom Vaughan-Lawlor", "Stan Lee", "Florence Kasumba"],
        image: "https://m.media-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg",
        year: 2018,
        description: "The mad titan Thanos begins his hunt for the most powerful objects in the universe, the Infinity Stones, in this movie. With the Space Stone, given by Loki, and the Power Stone, Thanos sends Ebony Maw, Cull Obsidian to retrieve the Time Stone from Doctor Strange, sends Proxima Midnight, and Corvus Glaive to retrieve the Mind Stone from Vision. Meanwhile, Tony Stark meets up with Bruce Banner and sorcerers Doctor Strange and Wong. With help from Peter Parker/Spider-Man, Stark and Strange join forces together and agree to stop Thanos. In space, Thor also joins forces with the Guardians of the Galaxy, Star-Lord, Drax , Rocket, Groot, Mantis, and Gamora, the daughter of Thanos who warns Thor of his power. Thor travels away to defeat Thanos with Rocket and Groot, while the other Guardians join forces with Stark, Strange, and Parker. In Wakanda, Steve Rogers and his team, Black Widow, Falcon, Scarlet Witch, War Machine, and Bruce Banner to protect Vision and the Mind Stone in his forehead. With protection given from King T'Challa/Black Panther, and his Wakandan army, Thanos will come for everyone to destroy half the universe.",
        movieUrl: "https://youtu.be/6ZfuNTqbHE8"
    },
    {
        title: "Avengers: Endgame",
        director: "Anthony Russo, Joe Russo", 
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Jeremy Renner", "Don Cheadle", "Paul Rudd", "Benedict Cumberbatch", "Tom Holland", "Chadwick Boseman", "Brie Larson", "Zoe Saldana", "Karen Gillan", "Tom Hiddleston", "Evangeline Lilly", "Tessa Thompson", "Rene Russo", "Paul Bettany", "Elizabeth Olsen", "Anthony Mackie", "Sebastian Stan", "Danai Gurira", "Benedict Wong", "Pom Klementieff", "Dave Bautista", "John Slattery", "Tilda Swinton", "Jon Favreau", "Hayley Atwell", "Natalie Portman", "Marisa Tomei", "Taika Waititi", "Angela Bassett", "Michael Douglas", "Michelle Pfeiffer", "Codie Smulders", "linda Cardinelli", "Frank Grillo", "Hiroyuki Sanada", "Vin Diesel", "Bradley Cooper", "Gwyneth Paltrow", "Benicio Del Toro", "Josh Brolin", "Chris Pratt", "Sean Gunn", "Letitia Wright", "Tom Vaughan-Lawlor", "Stan Lee", "Florence Kasumba"],
        image: "https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg",
        year: 2019,
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
        movieUrl: "https://youtu.be/TcMBFSGVi1c"
    },
    {
        title: "Spider-Man: Far from home",
        director: "Jon Watts", 
        stars: ["Tom Holland", "Samuel L. Jackson", "Jake Gyllengaal", "Marisa Tomei", "Jon Favreau", "Zendaya", "Jacob Batalon", "Tony Revolori", "Angourie Rice", "Remi Hii", "Martin Starr", "J.B. Smoove", "Cobie Smulders", "J.K. Simmons"], 
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fc/Spider_Man_Far_From_Home_-_P%C3%B3ster_EEUU.png/revision/latest?cb=20190522204227&path-prefix=es",
        year: 2019,
        description: "Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent.",
        movieUrl: "https://youtu.be/NHWoVs5Sxuc"
    },
    {
        title: "Shang-Chi and the Legend of the Ten Rings",
        director: "Destin Daniel Cretton",
        stars: ["Simu Liu", "Tony Chiu-Wai Leung", "Awkwafina", "Ben Kingsley", "Meng'er Zhang", "Fala Chen", "Michelle Yeoh", "Michelle Yeoh"],
        image: "https://pbs.twimg.com/media/EzVrEUCUYAgLXtJ?format=jpg&name=4096x4096",
        year: 2021,
        description: "Around a thousand years ago, Xu Wenwu discovers the mystical ten rings which grant immortality and godly powers. He establishes the Ten Rings organization, conquering kingdoms and toppling governments throughout history. In 1996, Wenwu searches for Ta Lo, a village said to harbor mythical beasts. He travels through a magical forest to the village entrance but is stopped by guardian Ying Li. The two fall in love, and when the Ta Lo villagers reject Wenwu, Li chooses to leave with him. They marry and have two children, Shang-Chi and Xialing. Wenwu abandons his organization and locks away the ten rings.",
        movieUrl: "https://youtu.be/giWIr7U1deA"
    }
]

// 4. Poblar la base de datos 

const createMovieDB = async () => {
    const newMovies = await Movie.create(movies)
    console.log("Base de datos poblada con películas de Marvel")

    // Cierre de conexión de Mongoose.

    mongoose.connection.close()
}

createMovieDB()