/*
  REDIĢĒJIET TIKAI ŠO FAILU, lai mainītu lapas saturu.

  Varat mainīt:
  - profila informāciju un avatāru
  - draugu vārdus un attēlu URL adreses
  - ierakstus, attēlus, atzīmes Patīk un komentārus

  Ierakstam bez attēla izmantojiet: image: ""
*/
const siteData = {
  profile: {
    name: "Solveiga Johandottira",
    handle: "@solveiga_joh",
    avatar: "solveiga.jpg",
    bio: "Vienkārša lauku čiepa, kam patīk ballēties ik pa laikam 🤪\n(❤️ @PērsGints ❤️)",
    born: "24.02.1848",
    location: "Hedale, Norvēģija",
    family: "Pērs Gints",
    work: "Zemniece",
  },

  friends: [
    {
      name: "Johans Mugnossons",
      image: "father.jpg",
    },
    {
      name: "Astrida Lunda",
      image: "mother.jpg",
    },
    {
      name: "Helga",
      image: "helga.jpg",
    },
    {
      name: "Pērs Gints",
      image: "peerGynt.jpg",
    },
  ],

  posts: [
    {
      author: "Solveiga",
      time: "pirms 80 gadiem",
      title: "Helgas dzimšana",
      desc: "Man tagad ir mazā māsa! Viņa izskatās tik mīļi! Vecāki viņu nosauca par Helgu. #lielasmasasaktivitates",
      image: "helga-modified.jpg",
      likes: 9,
      comments: [
        {
          author: "Johans Mugnossons",
          text: "Mūsu mazā meitiņa ir tik skaista! Esmu ļoti laimīgs, ka mūsu ģimenē ir ienākusi vēl viena princese. ❤️",
          avatar: "father.jpg",
        },
        {
          author: "Astrida Lunda",
          text: "Mana mīļā Helga! Es jau zinu, ka tu un Solveiga būsiet labākās māsas.",
          avatar: "mother.jpg",
        },
      ],
    },
    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Pērs Gints mani uzlūdza uz deju Hegstadē, bet man viņam būs jāatsaka, jo man Tēvs neatļāva. Cik žēl, viņs bija tik karsts! @PērsGints (jā, TAS Pērs Gints) mani uzlūdza uz deju! Diemžēl man tēvs neļāva. Cik žēl, viņs bija tik uzbudinošs!",
      image: "peer_solveig_dance.jpg",
      likes: 19,
      comments: [
        {
          author: "TODO",
          text: "todo",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        },
      ],
    },

    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Tas Pērs aizskrēja ar Ingrīdu! Cita vīra Līgavu! Tas nelietis!",
      image: "",
      likes: 19,
      comments: [
        {
          author: "TODO",
          text: "todo",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        },
      ],
    },
    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Es nevaru bez tā Pēra noturēties. Helga man no viņa atnesa skaistu sudraba pogu, un daudzus skaistus vārdus teica. Viņs tomēr arī mani mīl!",
      image: "",
      likes: 19,
      comments: [
        {
          author: "TODO",
          text: "todo",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        },
      ],
    },
    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Es pametu savus vecākus un iešu dzīvot pie sava mīļā izsumtā Pēra mežā. Es viņu ļoti mīlu, un dzīvošu ar viņu kopā tagad! #woohoo",
      image: "",
      likes: 19,
      comments: [
        {
          author: "TODO",
          text: "todo",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        },
      ],
    },
  ],
};
