const initialState = {
  list: [
    {
      title: "Beyond Earth",
      id: 1,
      thumbnail: {
        trending: {
          small: "../../images/thumbnails/beyond-earth/trending/small.jpg",
          large: "../../images/thumbnails/beyond-earth/trending/large.jpg"
        },
        regular: {
          small: "../../images/thumbnails/beyond-earth/regular/small.jpg",
          medium: "../../images/thumbnails/beyond-earth/regular/medium.jpg",
          large: "../../images/thumbnails/beyond-earth/regular/large.jpg"
        }
      },
      year: 2019,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: true
    },

    {
      title: "Bottom Gear",
      id: 2,
      thumbnail: {
        trending: {
          small: "../../images/thumbnails/bottom-gear/trending/small.jpg",
          large: "../../images/thumbnails/bottom-gear/trending/large.jpg"
        },
        regular: {
          small: "../../images/thumbnails/bottom-gear/regular/small.jpg",
          medium: "../../images/thumbnails/bottom-gear/regular/medium.jpg",
          large: "../../images/thumbnails/bottom-gear/regular/large.jpg"
        }
      },
      year: 2021,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: true
    },

    {
      title: "Undiscovered Cities",
      id: 3,
      thumbnail: {
        trending: {
          small: "../../images/thumbnails/undiscovered-cities/trending/small.jpg",
          large: "../../images/thumbnails/undiscovered-cities/trending/large.jpg"
        },
        regular: {
          small: "../../images/thumbnails/undiscovered-cities/regular/small.jpg",
          medium: "../../images/thumbnails/undiscovered-cities/regular/medium.jpg",
          large: "../../images/thumbnails/undiscovered-cities/regular/large.jpg"
        }
      },
      year: 2019,
      category: "TV Series",
      rating: "E",
      isBookmarked: false,
      isTrending: true
    },

    {
      title: "1998",
      id: 4,
      thumbnail: {
        trending: {
          small: "../../images/thumbnails/1998/trending/small.jpg",
          large: "../../images/thumbnails/1998/trending/large.jpg"
        },
        regular: {
          small: "../../images/thumbnails/1998/regular/small.jpg",
          medium: "../../images/thumbnails/1998/regular/medium.jpg",
          large: "../../images/thumbnails/1998/regular/large.jpg"
        }
      },
      year: 2021,
      category: "Movie",
      rating: "R",
      isBookmarked: false,
      isTrending: true
    },

    {
      title: "Dark Side of the Moon",
      id: 5,
      thumbnail: {
        trending: {
          small: "../../images/thumbnails/dark-side-of-the-moon/trending/small.jpg",
          large: "../../images/thumbnails/dark-side-of-the-moon/trending/large.jpg"
        },
        regular: {
          small: "../../images/thumbnails/dark-side-of-the-moon/regular/small.jpg",
          medium: "../../images/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
          large: "../../images/thumbnails/dark-side-of-the-moon/regular/large.jpg"
        }
      },
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isBookmarked: true,
      isTrending: true
    },

    {
      title: "The Great Lands",
      id: 6,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/the-great-lands/regular/small.jpg",
          medium: "../../images/thumbnails/the-great-lands/regular/medium.jpg",
          large: "../../images/thumbnails/the-great-lands/regular/large.jpg"
        }
      },
      year: 2019,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "The Diary",
      id: 7,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/the-diary/regular/small.jpg",
          medium: "../../images/thumbnails/the-diary/regular/medium.jpg",
          large: "../../images/thumbnails/the-diary/regular/large.jpg"
        }
      },
      year: 2019,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Earth’s Untouched",
      id: 8,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/earths-untouched/regular/small.jpg",
          medium: "../../images/thumbnails/earths-untouched/regular/medium.jpg",
          large: "../../images/thumbnails/earths-untouched/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "R",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "No Land Beyond",
      id: 9,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/no-land-beyond/regular/small.jpg",
          medium: "../../images/thumbnails/no-land-beyond/regular/medium.jpg",
          large: "../../images/thumbnails/no-land-beyond/regular/large.jpg"
        }
      },
      year: 2019,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "During the Hunt",
      id: 10,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/during-the-hunt/regular/small.jpg",
          medium: "../../images/thumbnails/during-the-hunt/regular/medium.jpg",
          large: "../../images/thumbnails/during-the-hunt/regular/large.jpg"
        }
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Autosport the Series",
      id: 11,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/autosport-the-series/regular/small.jpg",
          medium: "../../images/thumbnails/autosport-the-series/regular/medium.jpg",
          large: "../../images/thumbnails/autosport-the-series/regular/large.jpg"
        }
      },
      year: 2016,
      category: "TV Series",
      rating: "R",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Same Answer II",
      id: 12,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/same-answer-2/regular/small.jpg",
          medium: "../../images/thumbnails/same-answer-2/regular/medium.jpg",
          large: "../../images/thumbnails/same-answer-2/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Below Echo",
      id: 13,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/below-echo/regular/small.jpg",
          medium: "../../images/thumbnails/below-echo/regular/medium.jpg",
          large: "../../images/thumbnails/below-echo/regular/large.jpg"
        }
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "The Rockies",
      id: 14,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/the-rockies/regular/small.jpg",
          medium: "../../images/thumbnails/the-rockies/regular/medium.jpg",
          large: "../../images/thumbnails/the-rockies/regular/large.jpg"
        }
      },
      year: 2015,
      category: "TV Series",
      rating: "E",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Relentless",
      id: 15,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/relentless/regular/small.jpg",
          medium: "../../images/thumbnails/relentless/regular/medium.jpg",
          large: "../../images/thumbnails/relentless/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Community of Ours",
      id: 16,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/community-of-ours/regular/small.jpg",
          medium: "../../images/thumbnails/community-of-ours/regular/medium.jpg",
          large: "../../images/thumbnails/community-of-ours/regular/large.jpg"
        }
      },
      year: 2018,
      category: "TV Series",
      rating: "R",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Van Life",
      id: 17,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/van-life/regular/small.jpg",
          medium: "../../images/thumbnails/van-life/regular/medium.jpg",
          large: "../../images/thumbnails/van-life/regular/large.jpg"
        }
      },
      year: 2015,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "The Heiress",
      id: 18,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/the-heiress/regular/small.jpg",
          medium: "../../images/thumbnails/the-heiress/regular/medium.jpg",
          large: "../../images/thumbnails/the-heiress/regular/large.jpg"
        }
      },
      year: 2021,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Off the Track",
      id: 19,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/off-the-track/regular/small.jpg",
          medium: "../../images/thumbnails/off-the-track/regular/medium.jpg",
          large: "../../images/thumbnails/off-the-track/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "R",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Whispering Hill",
      id: 20,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/whispering-hill/regular/small.jpg",
          medium: "../../images/thumbnails/whispering-hill/regular/medium.jpg",
          large: "../../images/thumbnails/whispering-hill/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "112",
      id: 21,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/112/regular/small.jpg",
          medium: "../../images/thumbnails/112/regular/medium.jpg",
          large: "../../images/thumbnails/112/regular/large.jpg"
        }
      },
      year: 2013,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Lone Heart",
      id: 22,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/lone-heart/regular/small.jpg",
          medium: "../../images/thumbnails/lone-heart/regular/medium.jpg",
          large: "../../images/thumbnails/lone-heart/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Production Line",
      id: 23,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/production-line/regular/small.jpg",
          medium: "../../images/thumbnails/production-line/regular/medium.jpg",
          large: "../../images/thumbnails/production-line/regular/large.jpg"
        }
      },
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Dogs",
      id: 24,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/dogs/regular/small.jpg",
          medium: "../../images/thumbnails/dogs/regular/medium.jpg",
          large: "../../images/thumbnails/dogs/regular/large.jpg"
        }
      },
      year: 2016,
      category: "TV Series",
      rating: "E",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Asia in 24 Days",
      id: 25,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/asia-in-24-days/regular/small.jpg",
          medium: "../../images/thumbnails/asia-in-24-days/regular/medium.jpg",
          large: "../../images/thumbnails/asia-in-24-days/regular/large.jpg"
        }
      },
      year: 2020,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "The Tasty Tour",
      id: 26,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/the-tasty-tour/regular/small.jpg",
          medium: "../../images/thumbnails/the-tasty-tour/regular/medium.jpg",
          large: "../../images/thumbnails/the-tasty-tour/regular/large.jpg"
        }
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Darker",
      id: 27,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/darker/regular/small.jpg",
          medium: "../../images/thumbnails/darker/regular/medium.jpg",
          large: "../../images/thumbnails/darker/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "R",
      isBookmarked: true,
      isTrending: false
    },

    {
      title: "Unresolved Cases",
      id: 28,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/unresolved-cases/regular/small.jpg",
          medium: "../../images/thumbnails/unresolved-cases/regular/medium.jpg",
          large: "../../images/thumbnails/unresolved-cases/regular/large.jpg"
        }
      },
      year: 2018,
      category: "TV Series",
      rating: "R",
      isBookmarked: false,
      isTrending: false
    },

    {
      title: "Mission: Saturn",
      id: 29,
      thumbnail: {
        regular: {
          small: "../../images/thumbnails/mission-saturn/regular/small.jpg",
          medium: "../../images/thumbnails/mission-saturn/regular/medium.jpg",
          large: "../../images/thumbnails/mission-saturn/regular/large.jpg"
        }
      },
      year: 2017,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false
    }
  ],

  searchString: ""

};

export default initialState;
