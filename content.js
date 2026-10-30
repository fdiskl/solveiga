/*
  EDIT THIS FILE ONLY to change the page content.

  You can change:
  - profile details and avatar
  - gallery image URLs
  - posts, post images, likes, and comments

  For a post without an image, use: image: ""
*/
const siteData = {
  profile: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    avatar: "solveiga.jpg",
    bio: "Photographer, coffee enthusiast, and weekend hiker. Always looking for the next beautiful view.",
    born: "Born January 14, 1994",
    location: "Lives in Portland, Oregon",
    family: "Married to Jamie Morgan",
    work: "Works at Northstar Creative",
    friends: 842,
  },

  gallery: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80",
  ],

  posts: [
    {
      author: "Alex Morgan",
      time: "2 hrs",
      text: "There is something special about a quiet morning by the coast. Grateful for slow days and good company. 🌊",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1100&q=85",
      likes: 126,
      comments: [
        {
          author: "Jamie Morgan",
          text: "This view was even better in person!",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        },
        {
          author: "Taylor Reed",
          text: "Absolutely beautiful, Alex.",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        },
      ],
    },
    {
      author: "Alex Morgan",
      time: "Yesterday",
      text: "A few frames from last weekend's hike. Which one is your favorite?",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1100&q=85",
      likes: 89,
      comments: [
        {
          author: "Chris Patel",
          text: "The mountain reflection is stunning.",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        },
      ],
    },
  ],
};
