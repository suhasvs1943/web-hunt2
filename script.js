// Sample movie data (in a real application, this would come from an API)
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        director: "Christopher Nolan",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
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
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
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
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
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
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
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
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        duration: "2h 55min",
        genre: ["Crime", "Drama"],
        cast: [
            {
                name: "Marlon Brando",
                role: "Don Vito Corleone",
                image: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR12,0,214,317_AL_.jpg"
            },
            {
                name: "Al Pacino",
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
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
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
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
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
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
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
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
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
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
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
        description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
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
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
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
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
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
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
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
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
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

// Function to create detailed movie content for modal
function createDetailedMovieContent(movie) {
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
                    <p>${movie.description}</p>
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