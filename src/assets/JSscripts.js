let systemCheck = false;
function attachStream(videoNode, stream) {
    navigator.attachMediaStream(videoNode, stream);
}

const maps = {
    map1:
        {
            images : [
                {
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                }
            ],
            iframes : [
                {
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                }
            ],
            label: [
                {
                    text:'MAP 1'
                }
            ],
            space: [
                {
                showCode: true,
                showDemo: true,
                showTeam: true,
                code: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
                demo: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
                team: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                }
            ],
          }
}