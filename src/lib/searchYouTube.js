var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`,
    type: 'GET',
    contentType: 'application/json',
    success: (data) => (callback(data.items)),
    error: function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  })
};



export default searchYouTube;


