/*
  REDIĢĒJIET TIKAI ŠO FAILU, lai mainītu lapas saturu.

  Varat mainīt:
  - profila informāciju un avatāru
  - galerijas attēlu URL adreses
  - ierakstus, attēlus, atzīmes Patīk un komentārus

  Ierakstam bez attēla izmantojiet: image: ""
*/
const siteData = {
  profile: {
    name: "Solveiga",
    handle: "@solveiga",
    avatar: "solveiga.jpg",
    bio: "TODO",
    born: "TODO",
    location: "TODO",
    family: "TODO",
    work: "TODO",
    friends: 5,
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
      time: "pirms 2 stundām",
      text: "Klusā rītā piekrastē ir kaut kas īpašs. Esmu pateicīgs par nesteidzīgām dienām un labu kompāniju. 🌊",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1100&q=85",
      likes: 126,
      comments: [
        {
          author: "Jamie Morgan",
          text: "Klātbūtnē šis skats bija vēl labāks!",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        },
        {
          author: "Taylor Reed",
          text: "Brīnišķīgi skaisti, Aleks!",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        },
      ],
    },
    {
      author: "Alex Morgan",
      time: "Vakar",
      text: "Daži kadri no pagājušās nedēļas nogales pārgājiena. Kurš tev patīk vislabāk?",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1100&q=85",
      likes: 89,
      comments: [
        {
          author: "Chris Patel",
          text: "Kalnu atspulgs ir satriecošs.",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        },
      ],
    },
  ],
};
