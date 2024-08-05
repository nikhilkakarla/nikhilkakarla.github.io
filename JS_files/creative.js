document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const videos = [
        { src: 'montages/Second Semester Senior Year REDACTED.mp4', title: 'Second Semester Senior Year (01/01/2024 - 06/01/2024)' },
        { src: 'montages/First Semester Senior Year 2 copy copy.mp4', title: 'First Semester Senior Year (09/01/2023 - 01/01/2024)' },
        { src: 'montages/Summer2023Redacted.mp4', title: 'Summer of 2023 (05/25/2023 - 08/28/2024)' },
        { src: 'montages/Grimmentz FInal copy copy.mp4', title: 'Skiing in Grimmentz (03/24/2023 - 04/03/2024)' },
        { src: 'montages/Powder Chasers 2023.mp4', title: 'HeliSkiing in BC (01/03/2023 - 01/06/2023)' },
        { src: 'montages/Skydiving.mp4', title: 'Skydiving (05/30/2024)' }
    ];

    let currentVideoIndex = 0;

    function loadVideo(index) {
        videoPlayer.src = videos[index].src;
        videoTitle.innerText = videos[index].title;
        videoPlayer.play();
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
