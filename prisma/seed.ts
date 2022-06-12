import { prisma } from "../db";

const operators: any = [
  {
    name: "Sledge",
    position: "Attacker",
    healthRating: 3,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/7/76/Sledge_Icon_-_Standard.png/revision/latest?cb=20151222045526",
  },
  {
    name: "Thatcher",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/6/6d/Thatcher_Icon_-_Standard.png/revision/latest?cb=20151222045527",
  },
  {
    name: "Smoke",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/ae/Smoke_Icon_-_Standard.png/revision/latest?cb=20151222045526",
  },
  {
    name: "Mute",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/c/c2/Mute_Icon_-_Standard.png/revision/latest?cb=20151222045525",
  },
  {
    name: "Ash",
    position: "Attacker",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/d7/Ash_Icon_-_Standard.png/revision/latest?cb=20151222045522",
  },
  {
    name: "Thermite",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/e/e3/Thermite_Badge_2.png/revision/latest?cb=20151222045527",
  },
  {
    name: "Pulse",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/a9/Castle_Badge_2.png/revision/latest?cb=20151222045523",
  },

  {
    name: "Twitch",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/4/47/Twitch_Badge_New_2.png/revision/latest?cb=20151222045527",
  },
  {
    name: "Montagne",
    position: "Attacker",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/b/be/Montagne_Badge_2.png/revision/latest?cb=20151222045525",
  },
  {
    name: "Doc",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/8f/Doc_Badge_2.png/revision/latest?cb=20151222045524",
  },
  {
    name: "Rook",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/ab/Rook_Badge_New_2.png/revision/latest?cb=20151222045526",
  },
  {
    name: "Glaz",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/8d/Glaz_Badge_2.png/revision/latest?cb=20151222045524",
  },
  {
    name: "Fuze",
    position: "Attacker",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/3/3f/Fuze_Badge_2.png/revision/latest?cb=20151222045524",
  },
  {
    name: "Kapkan",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/81/Kapkan_Badge_2.png/revision/latest?cb=20151222045525",
  },
  {
    name: "Tachanka",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/8c/Tachanka_Badge_Rework.png/revision/latest?cb=20201008005243",
  },
  {
    name: "Tachanka",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/8c/Tachanka_Badge_Rework.png/revision/latest?cb=20201008005243",
  },
  {
    name: "Blitz",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/6/62/Blitz_Badge_2.png/revision/latest?cb=20151222045523",
  },
  {
    name: "IQ",
    position: "Attacker",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/b/b7/IQ_Badge_2.png/revision/latest?cb=20151222045524",
  },
  {
    name: "Jäger",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/9/95/Jager_Badge_2.png/revision/latest?cb=20151222045525",
  },{
    name: "Bandit",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/3/30/Bandit_Badge_2.png/revision/latest?cb=20151222045523",
  },{
    name: "Buck",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/3/34/Buck_Badge_New.png/revision/latest?cb=20160203040454",
  },{
    name: "Frost",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/c/c1/Frost_Badge_New.png/revision/latest?cb=20160203040937",
  },{
    name: "Blackbeard",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/dd/Blackbeard_badge.png/revision/latest?cb=20160509214645",
  },{
    name: "Valkyrie",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/e/ef/Valkyrie_badge.png/revision/latest?cb=20160509214702",
  },{
    name: "Capitão",
    position: "Attacker",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/4/4e/R6S-badge-capitao.png/revision/latest?cb=20160802150526",
  },{
    name: "Caveira",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/e/ef/R6S-badge-caveira.png/revision/latest?cb=20160802150554",
  },{
    name: "Caveira",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/e/ef/R6S-badge-caveira.png/revision/latest?cb=20160802150554",
  },{
    name: "Hibana",
    position: "Attacker",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/7/79/R6S-hibana.png/revision/latest?cb=20161118012747",
  },{
    name: "Echo",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/b/b4/R6S-echo.png/revision/latest?cb=20161118012816",
  },{
    name: "Jackal",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/d4/R6S-jackal.png/revision/latest?cb=20170206195745",
  },{
    name: "Mira",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/8f/R6S-mira.png/revision/latest?cb=20170206200012",
  },{
    name: "Ying",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/d7/R6S-Ying.png/revision/latest?cb=20170828194010",
  },{
    name: "Lesion",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/d2/R6S-Lesion.png/revision/latest?cb=20170828194022",
  },{
    name: "Zofia",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/f/fb/Zofia_icon.png/revision/latest?cb=20171115182418",
  },{
    name: "Ela",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/3/3f/Ela_icon.png/revision/latest?cb=20170913223125",
  },{
    name: "Dokkaebi",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/0/0c/Dokkaebi_icon.png/revision/latest?cb=20171120222956",
  },{
    name: "Vigil",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/1/1d/Vigil_icon.png/revision/latest?cb=20171120223005",
  },{
    name: "Lion",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/4/47/Lion.png/revision/latest?cb=20180220011251",
  },{
    name: "Finka",
    position: "Attacker",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/de/Finka_icon.png/revision/latest?cb=20180220011308",
  },{
    name: "Maestro",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/b/b7/Maestro_-_Icon.png/revision/latest/scale-to-width-down/350?cb=20180522220537",
  },{
    name: "Alibi",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/d7/Alibi_-_Icon.png/revision/latest/scale-to-width-down/350?cb=20180522220413",
  },{
    name: "Maverick",
    position: "Attacker",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/c/c8/Maverick_logo_HD.png/revision/latest/scale-to-width-down/350?cb=20190524235156",
  },{
    name: "Clash",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/5/5c/Clash_logo_HD_-_Copy2.png/revision/latest/scale-to-width-down/350?cb=20190525001600",
  },{
    name: "Nomad",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/8d/R6S-Nomad.png/revision/latest?cb=20181119191959",
  },{
    name: "Kaid",
    position: "Defender",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/0/0b/R6S-Kaid.png/revision/latest?cb=20181119192012",
  },{
    name: "Gridlock",
    position: "Attacker",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/6/61/R6S-Gridlock.png/revision/latest?cb=20190218194313",
  },{
    name: "Mozzie",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/3/3a/R6S-Mozzie.png/revision/latest?cb=20190218194326",
  },
  {
    name: "Nøkk",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/2/2e/Nokk.png/revision/latest?cb=20190523003359",
  },{
    name: "Warden",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/a5/Warden.png/revision/latest?cb=20190701101127",
  },
  {
    name: "Amaru",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/9/94/Amaru_Icon.png/revision/latest?cb=20190820020748",
  },
  {
    name: "Goyo",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/9/9f/Goyo_Icon.png/revision/latest?cb=20190820020749",
  },
  {
    name: "Kali",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/0/06/Kali_Icon_2.png/revision/latest?cb=20191111224152",
  },
  {
    name: "Wamai",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/c/cc/Wamai_Icon_2.png/revision/latest?cb=20191111223721",
  },
  {
    name: "Iana",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/e/e1/Iana_Icon.png/revision/latest?cb=20200311062422",
  },{
    name: "Oryx",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/8/89/Oryx_Icon.png/revision/latest?cb=20200311062523",
  },
  {
    name: "Ace",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/a0/Ace_Icon_2.png/revision/latest?cb=20200519202822",
  },
  {
    name: "Melusi",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/b/b2/Melusi_Icon_2.png/revision/latest?cb=20200519202939",
  },
  {
    name: "Zero",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/7/7b/Zero_Icon.png/revision/latest?cb=20200822022315",
  },
  {
    name: "Aruni",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/e/ed/Aruni_Badge.png/revision/latest/scale-to-width-down/350?cb=20201111190010",
  },{
    name: "Flores",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/a9/Flores_icon.png/revision/latest?cb=20210222210203",
  },{
    name: "Thunderbird",
    position: "Defender",
    healthRating: 1,
    speedRating: 3,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/d/d5/Thunderbird_Icon.png/revision/latest/scale-to-width-down/350?cb=20210525164233",
  },{
    name: "Osa",
    position: "Attacker",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/1/17/Osa_Icon_Small.png/revision/latest?cb=20210821135404",
  },{
    name: "Thorn",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/a/a2/Thorn_icon.png/revision/latest/scale-to-width-down/350?cb=20211202225437",
  },{
    name: "Azami",
    position: "Defender",
    healthRating: 2,
    speedRating: 2,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/4/45/Azami_Icon.png/revision/latest/scale-to-width-down/350?cb=20220307175227",
  },{
    name: "Sens",
    position: "Attacker",
    healthRating: 3,
    speedRating: 1,
    operatorIcon:
      "https://static.wikia.nocookie.net/rainbowsix/images/6/60/Sens_Icon.png/revision/latest?cb=20220524140638",
  },
];

async function main(operators: any) {
  for (const operator of operators) {
    try {
      await prisma?.operator.create({
        data: {
          name: operator.name,
          position: operator.position,
          healthRating: operator.healthRating,
          speedRating: operator.speedRating,
          operatorIcon: operator.operatorIcon,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

main(operators)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
