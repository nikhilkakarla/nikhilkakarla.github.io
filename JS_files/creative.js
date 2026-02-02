document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const videos = [
        { src: 'https://www.youtube.com/embed/l63MZBVRfs0?rel=0&modestbranding=1', title: 'Vail (12/01/25 - 2/14/25)' },
        { src: 'https://www.youtube.com/embed/lcIT0JNCZjg?rel=0&modestbranding=1', title: 'Summer Of Travel (06/01/2024 - 08/15/2024)' },
        { src: 'https://www.youtube.com/embed/H6uiZ1IZhfA?rel=0&modestbranding=1', title: 'Second Semester Senior Year (01/01/2024 - 06/01/2024)' },
        { src: 'https://www.youtube.com/embed/Cq99woykFB4?rel=0&modestbranding=1', title: 'First Semester Senior Year (09/01/2023 - 01/01/2024)' },
        { src: 'https://www.youtube.com/embed/Y20P9mIFCrs?rel=0&modestbranding=1', title: 'Summer of 2023 (05/25/2023 - 08/28/2024)' },
        { src: 'https://www.youtube.com/embed/jMixDfDaB7A?rel=0&modestbranding=1', title: 'Skiing in Grimmentz (03/24/2023 - 04/03/2024)' },
        { src: 'https://www.youtube.com/embed/_qO3SoXMHTA?rel=0&modestbranding=1', title: 'HeliSkiing in BC (01/03/2023 - 01/06/2023)' },
        { src: 'https://www.youtube.com/embed/wY9j7mjD6Xo?rel=0&modestbranding=1', title: 'Skydiving (05/30/2024)' }
    ];

    let currentVideoIndex = 0;

    function loadVideo(index) {
        videoPlayer.src = videos[index].src;
        videoTitle.innerText = videos[index].title;
        updateActiveThumbnail(index);
    }

    function switchVideo(index) {
        loadVideo(index);
    }

    function updateActiveThumbnail(index) {
        document.querySelectorAll('.thumbnail').forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        switchVideo(currentVideoIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        switchVideo(currentVideoIndex);
    });

    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            currentVideoIndex = parseInt(thumbnail.getAttribute('data-index'), 10);
            switchVideo(currentVideoIndex);
        });
    });

    loadVideo(currentVideoIndex);
});
