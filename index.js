function superbowlWin(record){
    const foundSeason = record.find(season => season.result === "W")
    if(foundSeason)
    return foundSeason.year
}
//This was a little difficult may need to review