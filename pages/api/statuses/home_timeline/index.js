const timeline = [
  {
    id: "0",
    avatar:
      "https://pbs.twimg.com/profile_images/556179314660478976/l_MadSiU_400x400.jpeg",
    username: "michaeljackson",
    message:
      "This week in 2002, Michael Jackson performed at the Democratic National Committee’s “A Night at the Apollo” voter registration drive & fund-raiser at the historic Apollo Theater. Always an advocate for change, Michael used his platform to help make a difference",
  },
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/649554726212739073/wK-k9v5P_400x400.png",
    username: "hrw",
    message:
      "We are asking ASEAN member states to end their indecision, which is endangering safety throughout the region, and stand with us in solidarity instead",
  },
  {
    id: "2",
    avatar:
      "https://pbs.twimg.com/profile_images/1065163112221880320/olda56ST_400x400.jpg",
    username: "InFlames_SWE",
    message:
      "The 20th Anniversary Edition of #InFlames Clayman is OUT NOW Sign of the hornsFire To celebrate, we release a new video for Only For The Weak (Re-Recorded) showcasing the amazing ride we’ve taken together throughout the years",
  },
  {
    id: "3",
    avatar:
      "https://pbs.twimg.com/profile_images/556179314660478976/l_MadSiU_400x400.jpeg",
    username: "michaeljackson",
    message:
      "This week in 2002, Michael Jackson performed at the Democratic National Committee’s “A Night at the Apollo” voter registration drive & fund-raiser at the historic Apollo Theater. Always an advocate for change, Michael used his platform to help make a difference",
  },
  {
    id: "4",
    avatar:
      "https://pbs.twimg.com/profile_images/649554726212739073/wK-k9v5P_400x400.png",
    username: "hrw",
    message:
      "We are asking ASEAN member states to end their indecision, which is endangering safety throughout the region, and stand with us in solidarity instead",
  },
  {
    id: "5",
    avatar:
      "https://pbs.twimg.com/profile_images/1065163112221880320/olda56ST_400x400.jpg",
    username: "InFlames_SWE",
    message:
      "The 20th Anniversary Edition of #InFlames Clayman is OUT NOW Sign of the hornsFire To celebrate, we release a new video for Only For The Weak (Re-Recorded) showcasing the amazing ride we’ve taken together throughout the years",
  },
  {
    id: "6",
    avatar:
      "https://pbs.twimg.com/profile_images/556179314660478976/l_MadSiU_400x400.jpeg",
    username: "michaeljackson",
    message:
      "This week in 2002, Michael Jackson performed at the Democratic National Committee’s “A Night at the Apollo” voter registration drive & fund-raiser at the historic Apollo Theater. Always an advocate for change, Michael used his platform to help make a difference",
  },
  {
    id: "7",
    avatar:
      "https://pbs.twimg.com/profile_images/649554726212739073/wK-k9v5P_400x400.png",
    username: "hrw",
    message:
      "We are asking ASEAN member states to end their indecision, which is endangering safety throughout the region, and stand with us in solidarity instead",
  },
  {
    id: "8",
    avatar:
      "https://pbs.twimg.com/profile_images/1065163112221880320/olda56ST_400x400.jpg",
    username: "InFlames_SWE",
    message:
      "The 20th Anniversary Edition of #InFlames Clayman is OUT NOW Sign of the hornsFire To celebrate, we release a new video for Only For The Weak (Re-Recorded) showcasing the amazing ride we’ve taken together throughout the years",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
  res.end();
};
