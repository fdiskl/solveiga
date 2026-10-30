/*
  REDIĢĒJIET TIKAI ŠO FAILU, lai mainītu lapas saturu.

  Varat mainīt:
  - profila informāciju un avatāru
  - draugu vārdus, aprakstus un attēlu URL adreses
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
      description: "Tēvs",
      image: "father.jpg",
    },
    {
      name: "Astrida Lunda",
      description: "Māte",
      image: "mother.jpg",
    },
    {
      name: "Helga",
      description: "Mana māsa",
      image: "helga.jpg",
    },
    {
      name: "Pērs Gints",
      description: "❤️❤️❤️",
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
          author: "Johans Mugnossons",
          text: "Solveiga! Es tev aizliedzu ar viņu satikties! Tu zini, ko es par viņu domāju!",
          avatar: "father.jpg",
        },
      ],
    },

    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Tas Pērs aizskrēja ar Ingrīdu! Cita vīra Līgavu! Tas nelietis!",
      image: "runhorse.jpg",
      likes: 21,
      comments: [
        {
          author: "Johans Mugnossons",
          text: "Tāpēc arī Tev teicu, ar viņu nerunāt!",
          avatar: "father.jpg",
        },
      ],
    },
    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Es nevaru bez tā Pēra noturēties. Helga man no viņa atnesa skaistu sudraba pogu, un daudzus skaistus vārdus teica. Viņs tomēr arī mani mīl!",
      image: "talking.jpg",
      likes: 8,
      comments: [],
    },
    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Es pametu savus vecākus un iešu dzīvot pie sava mīļā izsumtā Pēra mežā. Es viņu ļoti mīlu, un dzīvošu ar viņu kopā tagad! #woohoo",
      image: "solveiga_ziabeg.jpg",
      likes: 13,
      comments: [
        {
          author: "Johans Mugnossons",
          text: "Solveiga! Kā tu vari tā pamest savus vecākus?! Nekavējoties nāc mājās!",
          avatar: "father.jpg",
        },
        {
          author: "Astrida Lunda",
          text: "Mīļā meitiņ, mēs esam ļoti noraizējušies. Lūdzu, pasaki, ka tev viss ir kārtībā. Mēs tevi mīlam! :(",
          avatar: "mother.jpg",
        },
        {
          author: "Pērs Gints",
          text: "Mīlu tevi, Solveiga! Beidzot būsim kopā!",
          avatar: "peerGynt.jpg",
        },
      ],
    },

    {
      author: "Solveiga",
      time: "pirms 50 gadiem",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Pērs mani pameta un devās savos piedzīvojumos atkal... Es ceru ka viņš drīz atgriezīsies #gaidītāja",
      image: "persbegprom.jpg",
      likes: 4,
      comments: [
        {
          author: "Johans Mugnossons",
          text: "Mēs Tevi brīdinajām!",
          avatar: "father.jpg",
        },
        {
          author: "Astrida Lunda",
          text: "Ak tu nabadzīte...",
          avatar: "mother.jpg",
        },
      ],
    },
    {
      author: "Solveiga",
      time: "pirms 5 minūtēm",
      title: "Pagājušās nedēļas nogales pārgājiens",
      desc: "Mans mīļais @PērsGints ir atpakaļ! Un beidzot viņa ķermenis ir pārāk vecs lai ceļotu prom no manis! #bijavērtsgaidīt50gadus",
      image: "solveigasklepis.jpg",
      likes: 100,
      comments: [
        {
          author: "Helga",
          text: "Beidzot, varēsies laimīgi dzīvot līdz mūža galam!",
          avatar: "helga.jpg",
        },
        {
          author: "Pogu lējējs",
          text: "Tik līdz nākamajam krustojumam....",
          avatar: "Solid_black.png",
        },
      ],
    },
  ],
};
