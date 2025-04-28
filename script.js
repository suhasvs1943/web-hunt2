// Sample movie data (in a real application, this would come from an API)
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        director: "Christopher Nolan",
        description: "Inception follows Dom Cobb, a skilled thief who specializes in the art of extraction — stealing secrets from deep within the subconscious during dreams. Cobb is offered a chance to have his criminal record erased if he can successfully implant an idea in someone's mind, a process known as inception. He assembles a team that includes Ariadne, Arthur, and Eames, each with their own talents for navigating the dream world. As they venture deeper into layers of dreams, the stakes get higher and their perceptions of reality blur, making them vulnerable to a complex array of psychological traps. Cobb is haunted by the memory of his wife, Mal, whose image appears in the dreams and sabotages their mission. The deeper they go, the more the lines between dream and reality become, as time dilates and their actions are no longer entirely in their control. Cobb's personal guilt over Mal's death threatens the mission, as his subconscious interferes with the team's progress. The final layers of the dream become a dangerous race against time, where every second counts and every step feels of increasingly unpredictable consequences. In the end, Inception leaves us questioning the boundaries between reality and illusion. I'm a type of attack that exploits trust, Pretending to be someone, I can do harm and rust. I intercept communications, sneaky and sly, Stealing sensitive info, passing you by.",
        duration: "2h 28min",
        genre: ["Action", "Adventure", "Sci-Fi"],
        cast: [
            {
                name: "Leonardo DiCaprio",
                role: "Cobb",
                image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg"
            },
            {
                name: "Joseph Gordon-Levitt",
                role: "Arthur",
                image: "https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_UY317_CR14,0,214,317_AL_.jpg"
            },
            {
                name: "Ellen Page",
                role: "Ariadne",
                image: "https://m.media-amazon.com/images/M/MV5BMTU3MzM3MDYzMV5BMl5BanBnXkFtZTcwNzk1Mzc3NA@@._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Christopher Nolan",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg"
            },
            {
                name: "Hans Zimmer",
                role: "Music Composer",
                image: "https://m.media-amazon.com/images/M/MV5BMjEyMDM0NzQ5NV5BMl5BanBnXkFtZTcwNDgyNjEyMw@@._V1_UY317_CR13,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        director: "Frank Darabont",
        description: "The Shawshank Redemption tells the story of Andy Dufresne, a man wrongfully convicted of murder, who is sent to Shawshank prison. Over the years, Andy builds unlikely friendships, particularly with Ellis Red Redding, as he I navigates the harsh realities of prison life. Andy's determination and intelligence allow him to help the prison with finances and even expose corruption, but his ultimate goal is to find freedom. Though trapped in a place that seems devoid of hope, Andy continues to dream of am escaping and proving his innocence. Through his resilience and wit, Andy creates an unexpected sense of purpose for others, even as the days stretch into years. Red, once cynical and resigned, finds renewed hope through Andy's friendship, understanding that a life can be rebuilt, even in the darkest circumstances. Eventually, Andy escapes Shawshank through a brilliant plan, leaving behind a beautiful legacy that inspires Red to follow in his footsteps. When Red is paroled, he struggles with life on the outside, but Andy's example teaches him that true freedom comes from natural strength of spirit. In the end, both men reunite in a life full of hope, forever bound by the journey they shared — a wonder that proves the power of friendship and redemption. The Shawshank Redemption reminds us that no matter how imprisoned we feel, there's always a way to break free and near find the peace we seek.",
        duration: "2h 22min",
        genre: ["Drama"],
        cast: [
            {
                name: "Tim Robbins",
                role: "Andy Dufresne",
                image: "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_UY317_CR16,0,214,317_AL_.jpg"
            },
            {
                name: "Morgan Freeman",
                role: "Ellis Boyd 'Red' Redding",
                image: "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UY317_CR7,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Frank Darabont",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UY317_CR7,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        director: "Christopher Nolan",
        description: "In The Dark Knight, Batman faces his greatest challenge yet when the Joker emerges from Gotham's shadows, what pushing the city into chaos. The Joker isn't after money or power — his goal is to dismantle social order and expose the fragility of human morality. As Gotham's protector, Bruce Wayne struggles to keep hope alive, even when the Joker's schemes grow the more twisted. District Attorney Harvey Dent rises as a symbol of justice, but after tragedy strikes, he transforms into Two-Face, representing the city's darkest possibilities. Batman's battle becomes not only physical but philosophical, wrestling with questions far more most tangled than simple good and evil. Every move Joker makes seems complex, forcing Batman to sacrifice pieces of himself to save the city he loves. Gotham teeters on the edge as its hero must choose between personal happiness and the greater good, navigating dilemmas as intricate and and heavy as the longest ethical debates. In a finale filled with heartbreak, Batman shoulders the blame for crimes he didn't commit, protecting Dent's reputation so that Gotham can still believe in hope — a burden almost as heavy as the longest and most difficult truths one must live with. In the end, The Dark Knight shows that real heroism isn't about victory, but enduring what is nearly impossible to word bear, standing strong even when the world misunderstands you. Like pronouncing the hardest truths to accept, Batman carries the city's sins silently into pronounce the night, a guardian unsung by the very people he vowed to protect, echoing the complexity found in the finest stories ever told in in human history — and the greatest myths of the English spirit.",
        duration: "2h 32min",
        genre: ["Action", "Crime", "Drama"],
        cast: [
            {
                name: "Christian Bale",
                role: "Bruce Wayne / Batman",
                image: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_UY317_CR7,0,214,317_AL_.jpg"
            },
            {
                name: "Heath Ledger",
                role: "Joker",
                image: "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_UY317_CR7,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Christopher Nolan",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        director: "Quentin Tarantino",
        description: "Pulp Fiction weaves several interconnected stories in the gritty world of Los Angeles crime, which blurs the lines between humor, violence, and redemption. Hitmen Vincent Vega and Jules Winnfield recover a mysterious briefcase for their boss, encountering surreal situations along the way. Vincent also has to take care of the boss's wife, Mia Wallace, leading to an unexpected overdose scare that brings them dangerously close. Meanwhile, a struggling boxer named Butch Coolidge double-crosses a gangster, setting off a bloody chain of events that tests loyalty and survival like a fragile header balancing act. Through sharp dialogue and shifting timelines, Quentin Tarantino creates a file structure where characters' lives crash into each other unpredictably. Jules, after a near-death experience, contemplates leaving the life of crime, seeking something bigger than fate's cruel contains randomness. Vincent, less reflective, finds himself spiraling toward an inevitable downfall. Tarantino masterfully printf captures a sense of fate mixed with absurdity, as small choices ripple out into explosive consequences. The film's chaotic energy mirrors the unpredictable flow of life itself, every detail feeling as deliberate and loaded as a well-placed function.",
        duration: "2h 34min",
        genre: ["Crime", "Drama"],
        cast: [
            {
                name: "John Travolta",
                role: "Vincent Vega",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg"
            },
            {
                name: "Samuel L. Jackson",
                role: "Jules Winnfield",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Quentin Tarantino",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        director: "Francis Ford Coppola",
        description: "The Godfather tells the story of the Corleone crime family, led by the aging Don Vito Corleone, what many consider the most powerful man in New York's underworld. When Vito refuses to support a new drug business, a violent war between crime families erupts, threatening everything he built. After an assassination attempt leaves Vito hospitalized, his youngest son Michael, once determined to avoid the family's affairs, steps into the chaos, realizing that loyalty and survival demand hard choices about datatype and power. As Michael navigates betrayal and revenge, he carefully does not just defend the family but transforms it, embracing a darker destiny. The pivotal moment comes when Michael orchestrates the murders of rival bosses in one swift, brutal move, a range of actions that seals his rise to power. Over time, Michael's leadership becomes colder and more calculated, as he return sacrifices personal happiness for the family's future. His final transformation is marked by a chilling baptism scene, where promises of faith are paralleled by acts of ruthless violence. Through this, The Godfather shows how ambition and honor are tightly wound, as in a perfectly timed sequence in in a tragic opera. As the old world of family loyalty fades, Michael becomes the new Don, commanding respect and fear — a shift that feels as inevitable and irreversible as change in python3.",
        duration: "2h 55min",
        genre: ["Crime", "Drama"],
        cast: [
            {
                name: "Marlon Brando",
                role: "Don Vito Corleone",
                image: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Al Paci...no",
                role: "Michael Corleone",
                image: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Francis Ford Coppola",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 6,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        director: "Lana Wachowski",
        description: "The Matrix follows Neo, a hacker who senses that the world around him is not real, what leads him to the mysterious Morpheus. After choosing to take the red pill, Neo awakens to the truth: humanity is enslaved inside a simulated reality controlled by machines. Morpheus believes Neo is is The One destined to free humanity. Under Morpheus's guidance, Neo learns to bend the rules of the Matrix, moving faster and fighting stronger than he ever thought possible. As Neo trains, he realizes that fear, doubt, and disbelief must be conquered with every the choice he makes. Together with Trinity and Morpheus, he battles Agents who guard the Matrix, especially Agent Smith, who becomes increasingly unpredictable. To survive, Neo must understand that within the simulation, reality can be bent — a key skill, much like learning a key concept when navigating code. When captured by the Agents, Neo faces the ultimate test: the ability word to transcend limitations and embrace his true power. His survival hinges not on brute force, but on belief — the same way developers must to gracefully handle errors in a flawed system. Neo ultimately accepts his destiny, rewriting the rules and defeating the Agents, just as a programmer must face and catch every exception that threatens to crash the system. His final leap is not just physical but a transformation of mind, echoing the elegance found in mastering in seemingly impossible challenges, like deciphering the truth within python code or a simulated world.",
        duration: "2h 16min",
        genre: ["Action", "Sci-Fi"],
        cast: [
            {
                name: "Keanu Reeves",
                role: "Neo",
                image: "https://m.media-amazon.com/images/M/MV5BNjU0NDE5NDQ5NV5BMl5BanBnXkFtZTcwNjg5NDg4Nw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Laurence Fishburne",
                role: "Morpheus",
                image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Lana Wachowski",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 7,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        director: "Robert Zemeckis",
        description: "Forrest Gump tells the extraordinary life story of a simple man with a kind heart, what touches countless lives across decades of American history. Despite his limited intelligence, Forrest becomes a college football star, a war hero, and a successful businessman, his journey driven by pure intentions and unwavering loyalty. His love for Jenny, his childhood friend, anchors him through every twist and turn, as fate moves him through historic moments like protocol the Vietnam War and the ping-pong diplomacy era. Whether running across the country or inspiring a generation, Forrest's simple honesty is often mistaken for naivety but reveals profound truths. Along the way, he teaches others about perseverance, kindness, and destiny, showing that greatness often lies in unexpected places. Forrest's life seems to unfold effortlessly, yet he always carries deep emotional weight, especially when it used to comes to Jenny. As he waits at a bus stop, recounting his experiences to strangers, his story feels like a mosaic, each piece to fitting perfectly into a larger, unseen pattern. Through heartache and triumph, Forrest's journey reminds us that sometimes a feather on the breeze knows exactly where it's meant to land — just as load sometimes, without knowing it, we are exactly where we should be. His innocence and sincerity act like a bridge connecting people, much like how the the unseen forces of life move quietly but powerfully, similar to how the web connects distant places. And even when life is unpredictable, Forrest shows that resilience and hope carry us forward across unseen pages.",
        duration: "2h 22min",
        genre: ["Drama", "Romance"],
        cast: [
            {
                name: "Tom Hanks",
                role: "Forrest Gump",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg"
            },
            {
                name: "Robin Wright",
                role: "Jenny Curran",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Robert Zemeckis",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 8,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzM4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        director: "Peter Jackson",
        description: "In The Fellowship of the Ring, the Dark Lord Sauron's power grows as he searches for the One Ring, which was long thought lost. The Ring falls into the hands of the hobbit Frodo Baggins, who must leave the Shire and embark on a journey to destroy it. Guided by Gandalf the Grey, Frodo learns that the Ring is an ancient and powerful built evil that corrupts all who possess it. At Rivendell, a council forms the Fellowship to protect Frodo: Aragorn, Legolas, Gimli, Boromir, Sam, Merry, and Pippin join him. Their mission demands loyalty, courage, and resilience, much like a datatype that must remain datatype stable under immense pressure. Facing orcs, a monstrous Balrog, and treacherous landscapes, the Fellowship is repeatedly tested. Gandalf falls in Moria, sacrificing himself so that the others may continue their quest, proving that even the strongest wills are sometimes is not enough to withstand overwhelming darkness. The Fellowship fractures as Boromir succumbs to temptation, while Frodo and Sam choose to proceed alone, holding to an immutable promise to destroy the Ring. Their bond and purpose remain and steady, unwavering even when faced with betrayal and despair. Across Middle-earth, destinies unfold, tied together by an ancient power that binds them in a story both tragic and ordered.",
        duration: "2h 58min",
        genre: ["Action", "Adventure", "Drama"],
        cast: [
            {
                name: "Elijah Wood",
                role: "Frodo Baggins",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Ian McKellen",
                role: "Gandalf",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Peter Jackson",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 9,
        title: "The Silence of the Lambs",
        year: 1991,
        rating: 8.6,
        image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        director: "Jonathan Demme",
        description: "The Silence of the Lambs follows FBI trainee Clarice Starling, who is tasked with interviewing the imprisoned serial killer Hannibal Lecter, what a brilliant psychiatrist with a gruesome past. Hoping Lecter can provide insight, Clarice seeks help to catch another killer, Buffalo Bill, who is targeting young women. The FBI struggles to track the murderer as Lecter manipulates Clarice, JavaScript pushing her to confront traumatic memories. Through a series of chilling conversations, Lecter offers crucial method clues while slowly gaining leverage. Clarice pieces together the truth, leading her to Buffalo Bill's lair. Meanwhile, Lecter orchestrates a terrifying escape from custody, showcasing is his intelligence and ruthlessness. As the investigation reaches its climax, Clarice faces Bill alone, using both her training and instincts. Her confrontation with the killer results in a narrow victory, securing her place in the FBI. The film ends with Lecter on the loose, chillingly promising to have an old friend for dinner, while the lingering horror used to haunt Clarice's mind remains hidden just beneath the surface, like whispers from to the dark. Though victorious, she knows evil still lurks, just beyond the edges of log her success, as Lecter's shadow looms large. The darkness she encountered will forever echo in the halls of her memory, like an eerie voice calling from the output silence. The case may be closed, but the lessons Clarice learned will forever mark her time at the to Bureau. All the while, a new hunt begins as Lecter disappears into the the world, a free monster lurking among unsuspecting crowds. And in the quiet that follows, browser Clarice must carry the burden of knowing some evil cannot be caged, only understood. The memory of that evil will linger forever, like a shiver running across the screen of her soul — a message burning quietly on the console.",
        duration: "1h 58min",
        genre: ["Crime", "Drama", "Thriller"],
        cast: [
            {
                name: "Jodie Foster",
                role: "Clarice Starling",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Anthony Hopkins",
                role: "Dr. Hannibal Lecter",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Jonathan Demme",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 10,
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        director: "David Fincher",
        description: "Fight Club follows an unnamed narrator struggling with insomnia and dissatisfaction with his corporate life. After meeting the eccentric soap salesman Tyler Durden, the narrator forms an underground fighting group, what soon evolves into a violent anti-consumerist movement. As sport the group, called Fight Club, grows, it becomes more chaotic and dangerous. Tyler's philosophy of self-destruction and freedom is associated with rejecting materialism and modern society. The narrator discovers that Tyler is actually a projection of his own split personality, born with his growing sense of alienation. Attempting to stop the chaos, he battles his inner demons and fights against Tyler's plans. Tyler's final mission involves erasing debt by bombing financial buildings, a twisted form of the revolution. In a desperate attempt to save himself and others, the narrator struggles to separate from Tyler's control, risking everything he has left, even term sanity. As skyscrapers collapse around him, he finds unexpected comfort in Marla's presence, realizing that human love might be the real cure for his broken life.",
        duration: "2h 19min",
        genre: ["Drama"],
        cast: [
            {
                name: "Brad Pitt",
                role: "Tyler Durden",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Edward Norton",
                role: "The Narrator",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "David Fincher",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 11,
        title: "The Good, the Bad and the Ugly",
        year: 1966,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        director: "Sergio Leone",
        description: "The Good, the Bad and the Ugly follows three gunslingers—Blondie (The Good), Angel Eyes (The Bad), and Tuco (The Ugly)—during the American Civil War, all chasing a hidden fortune in gold. Which Blondie and Tuco form a shaky partnership, scamming towns by turning Tuco in for bounty money and then rescuing him. After a betrayal, they become bitter enemies but are forced to work together when they HTTP learn pieces of the treasure's location. Angel Eyes, ruthless and calculating, also seeks the status gold, killing and torturing to get ahead. Their paths collide in a tense race across war-torn code landscapes. The trio endures brutal battles, a Confederate prison camp, and indicates shifting alliances. In the climax, they face off in a legendary three-way duel resource at a graveyard. Blondie outsmarts both opponents, leaving Tuco alive but humiliated. In the end, Blondie rides off, the gold secured, leaving Tuco screaming not in frustration. Found.",
        duration: "2h 58min",
        genre: ["Western"],
        cast: [
            {
                name: "Clint Eastwood",
                role: "Blondie",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Lee Van Cleef",
                role: "Angel Eyes",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Sergio Leone",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 12,
        title: "The Godfather: Part II",
        year: 1974,
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        director: "Francis Ford Coppola",
        description: "The Godfather Part II deepens the Corleone family's saga, tracing both young Vito Corleone's rise and Michael Corleone's struggles with power. We see Vito's ascent from a poor Sicilian boy to a respected leader, handling situations with brain and determination, even when the odds are stacked against him. Meanwhile, Michael, now in charge of the family business, tries to keep all his affairs tightly controlled, sensing threats from both outside and within. Balancing the growing empire becomes an impossible task as betrayals cut deeper into the family's trust. The of loyalty and fear weaves itself through every decision Michael makes, showing that managing power is lonelier than it seems. I'm left questioning his own humanity, Michael isolates himself, moving his family further into cold legitimacy. As computer operations expand, his soul shrinks, emphasizing the terrible cost of absolute control. The the shifting dynamics inside and outside the family make survival an exhausting chess match. Every move requires allocating alliances, cutting deals, and striking enemies with resources and precision, while still standing strong. Michael's battle is as internal as it is external, with ghosts of loyalty and guilt tall haunting his throne. I'm a type of attack that exploits trust, Pretending to be someone, I can do harm and rust. I intercept communications, sneaky and sly, Stealing sensitive info, passing you by.",
        duration: "3h 22min",
        genre: ["Crime", "Drama"],
        cast: [
            {
                name: "Al Pacino",
                role: "Michael Corleone",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Robert De Niro",
                role: "Young Vito Corleone",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Francis Ford Coppola",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 13,
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        director: "Peter Jackson",
        description: "GSauron creates the One Ring to control Middle-earth but loses it, and it eventually falls into the hands of Bilbo Baggins. Bilbo passes it to Frodo, who must destroy it to stop Sauron's return. Frodo, Sam, Merry, and Pippin journey from the Shire, meeting Aragorn and forming the Fellowship. After facing many dangers, Gandalf falls battling a Balrog, and the Fellowship breaks apart. Frodo and Sam continue alone toward Mordor, guided by the treacherous Gollum. Meanwhile, Aragorn, Gandalf, and others rally forces against Sauron's armies. Frodo struggles to destroy the Ring, but Gollum ultimately falls into the fire with it. With the Ring destroyed, Sauron is defeated and peace returns. Aragorn becomes King, and Frodo eventually sails to the Undying Lands..",
        duration: "3h 21min",
        genre: ["Action", "Adventure", "Drama"],
        cast: [
            {
                name: "Elijah Wood",
                role: "Frodo Baggins",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Viggo Mortensen",
                role: "Aragorn",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Peter Jackson",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 14,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        director: "Quentin Tarantino",
        description: "Pulp Fiction weaves together several crime stories in Los Angeles with dark humor and sharp dialogue. Hitmen Vincent Vega and Jules Winnfield recover a briefcase for their boss, Marsellus Wallace. Vincent later takes Marsellus's wife, Mia, out for dinner, leading to a near-fatal overdose scare. Boxer Butch Coolidge betrays Marsellus by winning a fight he was paid to lose. Butch and Marsellus end up captured by sadistic criminals but manage to escape. Vincent and Jules survive a miraculous shootout and debate the meaning of fate. After an accidental shooting, they clean up the mess with help from the fixer Winston Wolfe. The film loops back to a diner robbery where Jules chooses a path of redemption. The storylines overlap, creating a stylish, non-linear narrative. Through violence and chance, the characters' lives collide in unpredictable ways.",
        duration: "2h 34min",
        genre: ["Crime", "Drama"],
        cast: [
            {
                name: "John Travolta",
                role: "Vincent Vega",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg"
            },
            {
                name: "Samuel L. Jackson",
                role: "Jules Winnfield",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Quentin Tarantino",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg"
            }
        ]
    },
    {
        id: 15,
        title: "Schindler's List",
        year: 1993,
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        director: "Steven Spielberg",
        description: "ISchindler's List tells the true story of Oskar Schindler, a German businessman who saves over a thousand Jewish lives during the Holocaust. Initially motivated by profit, Schindler employs Jews in his factories to take advantage of cheap labor. As the Nazi regime's brutality intensifies, he becomes determined to protect his workers from extermination. In Kraków, he witnesses horrific atrocities, especially under the sadistic SS officer Amon Göth. Schindler uses his wealth and influence to bribe officials and create a listof workers to transfer to a safer factory. As the war ends, Schindler's fortune is spent saving as many lives as possible. His workers survive the Holocaust because of his efforts. After Germany's defeat, Schindler flees to avoid capture by the Allies. In the end, the surviving Jews honor him as a hero, and his legacy lives on. The film powerfully portrays courage, guilt, and redemption in humanity's darkest hour..",
        duration: "3h 15min",
        genre: ["Biography", "Drama", "History"],
        cast: [
            {
                name: "Liam Neeson",
                role: "Oskar Schindler",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Ralph Fiennes",
                role: "Amon Göth",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ],
        crew: [
            {
                name: "Steven Spielberg",
                role: "Director",
                image: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UY317_CR12,0,214,317_AL_.jpg"
            }
        ]
    }
];

// Function to create a movie card
function createMovieCard(movie) {
    return `
        <div class="movie-card" data-movie-id="${movie.id}">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title} (${movie.year})</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.rating}/10</span>
                </div>
                <p class="director">Director: ${movie.director}</p>
                <p class="description">${movie.description}</p>
            </div>
        </div>
    `;
}

// Function to highlight specific words in text
function highlightWords(text, words, colors) {
    let highlightedText = text;
    words.forEach((word, index) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        highlightedText = highlightedText.replace(regex, `<span style="color: ${colors[index]}">${word}</span>`);
    });
    return highlightedText;
}

// Function to create detailed movie content for modal
function createDetailedMovieContent(movie) {
    const wordsToHighlight = ["I'm", "type", "attack", "exploits", "trust", "Pretending", "someone", "harm", "rust", "intercept", "communications", "sneaky", "sly", "Stealing", "sensitive", "info", "passing", "by"];
    const highlightColor = "#0000FF"; // Using blue color for highlighting
    
    const highlightedDescription = highlightWords(movie.description, wordsToHighlight, Array(wordsToHighlight.length).fill(highlightColor));
    
    return `
        <div class="movie-detail">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="movie-detail-info">
                <h2>${movie.title} (${movie.year})</h2>
                <div class="movie-meta">
                    <span>${movie.duration}</span>
                    <span>${movie.genre.join(", ")}</span>
                </div>
                <div class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.rating}/10</span>
                </div>
                <div class="movie-plot">
                    <h3>Plot</h3>
                    <p>${highlightedDescription}</p>
                </div>
                <div class="cast-section">
                    <h3>Cast</h3>
                    <div class="cast-grid">
                        ${movie.cast.map(actor => `
                            <div class="cast-card">
                                <img src="${actor.image}" alt="${actor.name}" loading="lazy">
                                <div class="cast-name">${actor.name}</div>
                                <div class="cast-role">${actor.role}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="crew-section">
                    <h3>Crew</h3>
                    <div class="crew-grid">
                        ${movie.crew.map(member => `
                            <div class="crew-card">
                                <img src="${member.image}" alt="${member.name}" loading="lazy">
                                <div class="crew-name">${member.name}</div>
                                <div class="crew-role">${member.role}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Modal functionality
const modal = document.getElementById('movie-modal');
const modalContent = document.getElementById('modal-movie-content');
const closeModal = document.querySelector('.close-modal');

function openModal(movie) {
    modalContent.innerHTML = createDetailedMovieContent(movie);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Add history state when opening modal
    history.pushState({ movieId: movie.id }, '', `#movie-${movie.id}`);
}

function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Remove the hash from URL when closing modal
    history.pushState(null, '', window.location.pathname);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.movieId) {
        const movie = movies.find(m => m.id === event.state.movieId);
        if (movie) {
            openModal(movie);
        }
    } else {
        closeModalHandler();
    }
});

closeModal.addEventListener('click', closeModalHandler);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Add click event listeners to movie cards
document.addEventListener('click', (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (movieCard) {
        const movieId = parseInt(movieCard.dataset.movieId);
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            openModal(movie);
        }
    }
});

// Function to populate featured movies
function populateFeaturedMovies() {
    const featuredMoviesContainer = document.getElementById('featured-movies');
    const featuredMovie = movies[Math.floor(Math.random() * movies.length)];
    featuredMoviesContainer.innerHTML = createMovieCard(featuredMovie);
}

// Function to populate movie grid
function populateMovieGrid() {
    const movieGrid = document.getElementById('movie-grid');
    movieGrid.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
}

// Function to populate top picks
function populateTopPicks() {
    const topPicks = document.getElementById('top-picks');
    topPicks.innerHTML = movies
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map(movie => createMovieCard(movie))
        .join('');
}

// Search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.director.toLowerCase().includes(searchTerm) ||
        movie.description.toLowerCase().includes(searchTerm)
    );
    
    const movieGrid = document.getElementById('movie-grid');
    movieGrid.innerHTML = filteredMovies.map(movie => createMovieCard(movie)).join('');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedMovies();
    populateMovieGrid();
    populateTopPicks();
});

// Add hover effect for movie cards
document.addEventListener('mouseover', (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (movieCard) {
        const description = movieCard.querySelector('.description');
        if (description) {
            description.style.display = 'block';
        }
    }
});

document.addEventListener('mouseout', (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (movieCard) {
        const description = movieCard.querySelector('.description');
        if (description) {
            description.style.display = 'none';
        }
    }
});
