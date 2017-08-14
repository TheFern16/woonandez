export class StateService {
  photos = [
    {
      appName: 'Hippity Hop',
      thumbnail:'https://preview.ibb.co/mDJHxF/Screen_Shot_2017_08_10_at_10_07_53_AM.png',
      full: 'https://ibb.co/dbLmra',
      github: 'https://github.com/woonandez/hippityhop',
      desc: 'Here is the landing page for Hippity hop.  Here users can enter lyrics that they remember, to find artists that they cannot.'
    },
    {
      appName: 'Hippity Hop',
      thumbnail: 'https://preview.ibb.co/nQg9Ba/Screen_Shot_2017_08_10_at_10_08_06_AM.png',
      full: 'https://ibb.co/mjOd4v',
      github: 'https://github.com/woonandez/hippityhop',
      desc: 'Once a user has lyrics that they cannot remember.  They can click the orange button to query the YouTube api for those lyrics.  They then can continue to click on the lyrics to cycle through the results; dynamically.'
    },
    {
      appName: 'Hippity Hop',
      thumbnail: 'https://preview.ibb.co/cwDpBa/Screen_Shot_2017_08_10_at_10_08_18_AM.png',
      full: 'https://ibb.co/hLHGra',
      github: 'https://github.com/woonandez/hippityhop',
      desc: 'Once the user finds the artist name.  They can then perform a google custom search on that artist.  The search will display in a modal, and allow the user to again search through the results.'
    },
    // {
    //   appName: 'Hippity Hop',
    //   thumbnail: 'https://preview.ibb.co/eAnhWa/Screen_Shot_2017_08_10_at_10_08_40_AM.png',
    //   full: 'https://ibb.co/dcB9Ba',
    //   github: 'https://github.com/woonandez/hippityhop',
    //   desc: 'Once '
    // },
    {
      appName: 'Studdy Buddy',
      thumbnail: 'https://preview.ibb.co/j7qPuv/Screen_Shot_2017_08_11_at_11_19_35_AM.png',
      full: 'https://ibb.co/iDqeSF',
      github: 'https://github.com/team-piranha/NoteTakerExtension',
      desc: 'Here is the landing page for Studdy Buddy.  An app that helps students study! Once the user has highlited text (using the chrome extension), StuddyBuddy gives them several different options.  Using the Watson API, we allow the users to translate text, use text to speech, or directly query the Watson API for related info about that text.',
    },
    {
      appName: 'Studdy Buddy',
      thumbnail: 'https://preview.ibb.co/bUNnEv/Screen_Shot_2017_08_11_at_11_19_39_AM.png',
      full: 'https://ibb.co/j5cb7F',
      github: 'https://github.com/team-piranha/NoteTakerExtension',
      desc: 'Here is a query in action.  It will populate with 2-7 additional resources.  Watson also gives us links to an encyclopedia type of resource which we link to the user.'
    },
    {
      appName: 'It\'s Cut Time',
      thumbnail: 'https://preview.ibb.co/ghzwra/its_Cut_Time_thumb.png',
      full: 'https://ibb.co/idiNWa',
      github: 'https://github.com/oxford-commas/dingdong-its-cut-time',
      desc: 'Here is the login page for It\'s Cut Time.  An app that delivers hair cut stylists directly to your door.  Users can create accounts as either stylists or users.  This is basically the \'Uber\' for hair cut stylists.'
    },
    {
      appName: 'It\'s Cut Time',
      thumbnail: 'https://preview.ibb.co/mW4qHF/its_Cut_Time1.png',
      full: 'https://ibb.co/ckeeBa',
      github: 'https://github.com/oxford-commas/dingdong-its-cut-time',
      desc: 'Here is the landing page for It\'s Cut Time.  Users are able to see all of the local stylists which are servicing around them (represented by a pair of scissors).  They can directly message those stylists.  Once the user has decided to use their services; an official notification is sent to the stylist.  Allowing the stylist to either accept, or decline the cut.  The payment is done through the stripe API.'
    }
  ];

  constructor() {}

}
