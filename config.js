module.exports = {
  title1: `DAT Sem3`,
  title2: `DAT Sem3 - Fall 2020`,
  titleShort: `Dat3`,
  idLocalStorage: "fullstackFall2020",
  classes: [
    { value: 'd', label: 'D-Class', backgroundColor: "#295683" },
    { value: 'e', label: 'E-Class', backgroundColor: "darkgreen" }],
  showWeekInfoForEachDayInWeek: false,
  timeEdit: "https://cloud.timeedit.net/cphbusiness/web/student",
  topMenu: [
    {
      title: "StudyPoints",
      URL: "https://studypoints.info"
    },
    {
      title: "Schedule",
      route: "/full-schedule"
    },
    {
      title: "Goals",
      route: "/all-goals"
    },
    {
      title: "Repos",
      route: "/github-links"
    },
    // {
    //   title:"Exercises",
    //   route: "/all-exercises"
    // },
    // {
    //   title:"Read",
    //   route: "/all-readings"
    // },
    {
      title: "Links",
      //These are the only legal values, Update this if making changes
      // "guidelines","readings","exercises","admin","examprep","studypointex","ca","slides",
      include: ["guidelines", "readings", "exercises", "admin", "examprep", "studypointex", "ca", "slides"],
      route: "/links"
    },
    {
      title: "About",
      route: "/"
    },
  ]
}