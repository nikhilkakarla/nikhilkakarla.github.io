document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    //radnom comment
    const newVar = 0

    const videos = [
        { src: 'https://www.youtube.com/embed/l63MZBVRfs0?si=O7ZqYf6HbdnYYfqk', title: 'Vail (12/01/25 - 2/14/25)'},
        { src: 'https://www.youtube.com/embed/lcIT0JNCZjg?si=8yR-N62mVoo6j07V', title: 'Summer Of Travel (06/01/2024 - 08/15/2024)' },
        { src: 'https://www.youtube.com/embed/H6uiZ1IZhfA', title: 'Second Semester Senior Year (01/01/2024 - 06/01/2024)' },
        { src: 'https://www.youtube.com/embed/Cq99woykFB4', title: 'First Semester Senior Year (09/01/2023 - 01/01/2024)' },
        { src: 'https://www.youtube.com/embed/Y20P9mIFCrs', title: 'Summer of 2023 (05/25/2023 - 08/28/2024)' },
        { src: 'https://www.youtube.com/embed/jMixDfDaB7A', title: 'Skiing in Grimmentz (03/24/2023 - 04/03/2024)' },
        { src: 'https://www.youtube.com/embed/_qO3SoXMHTA', title: 'HeliSkiing in BC (01/03/2023 - 01/06/2023)' },
        { src: 'https://www.youtube.com/embed/wY9j7mjD6Xo', title: 'Skydiving (05/30/2024)' }
    ];

    let currentVideoIndex = 0;

    function loadVideo(index) {
        videoPlayer.src = videos[index].src;
        videoTitle.innerText = videos[index].title;
        updateActiveThumbnail(index);
    }

    function switchVideo(index) {
        videoPlayer.classList.remove('zoomIn');
        void videoPlayer.offsetWidth; // Trigger reflow
        videoPlayer.classList.add('zoomIn');
        loadVideo(index);
    }

    function updateActiveThumbnail(index) {
        document.querySelectorAll('.thumbnail').forEach((thumbnail, i) => {
            if (i === index) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
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
            const index = parseInt(thumbnail.getAttribute('data-index'), 10);
            currentVideoIndex = index;
            switchVideo(currentVideoIndex);
        });
    });

    // Initial video load
    loadVideo(currentVideoIndex);
});
