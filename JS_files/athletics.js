document.addEventListener('DOMContentLoaded', () => {
    const config = Object.assign(
        { matches: [], tournaments: [], ranking: [], rating: [], college: [] },
        window.ATHLETICS_CONFIG || {}
    );
    const { matches, tournaments, college } = config;

    // ------------------------------------------------------------
    // Video player + slideshow
    // ------------------------------------------------------------
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const thumbnailsContainer = document.querySelector('.video-thumbnails');
    const slideshowDisplay = document.getElementById('slideshow-display');
    const slideA = document.getElementById('slide-a');
    const slideB = document.getElementById('slide-b');

    const SLIDESHOW_IMAGES = [
        'images/squash_pics/image copyy.png',
        'images/squash_pics/image copy.png',
        'images/squash_pics/image copy 1.png',
        'images/squash_pics/image copy 2.png',
        'images/squash_pics/image copy 3.png',
        'images/squash_pics/image copy 4.png',
        'images/squash_pics/image copy 6.png',
        'images/squash_pics/image copy 9.png',
        'images/squash_pics/image copy 10.png',
        'images/squash_pics/image copy 13.png',
        'images/squash_pics/image copy 15.png',
        'images/squash_pics/image copy 22.png',
        'images/squash_pics/image copy 23.png',
    ];

    let currentVideoIndex = 0;
    let slideshowMode = true;
    let slideshowIdx = 0;
    let slideshowTimer = null;
    let slideActive = slideA;
    let slideInactive = slideB;

    // Warm the browser cache so each crossfade has its image ready before we swap.
    SLIDESHOW_IMAGES.forEach(src => { const img = new Image(); img.src = src; });

    function crossfadeTo(src) {
        // Wait for the new image to decode before fading. Otherwise the inactive
        // slide still holds its previous src and briefly fades that in before
        // snapping to the new image.
        const swap = () => {
            slideInactive.classList.add('active');
            slideActive.classList.remove('active');
            [slideActive, slideInactive] = [slideInactive, slideActive];
        };
        slideInactive.onload = swap;
        slideInactive.onerror = swap;
        slideInactive.src = src;
    }

    function startSlideshow() {
        slideshowMode = true;
        slideshowDisplay.classList.remove('hidden');
        videoPlayer.src = '';
        if (videoTitle) videoTitle.innerText = '';
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        slideActive.src = SLIDESHOW_IMAGES[slideshowIdx];
        slideActive.classList.add('active');
        slideInactive.classList.remove('active');
        slideshowTimer = setInterval(() => {
            slideshowIdx = (slideshowIdx + 1) % SLIDESHOW_IMAGES.length;
            crossfadeTo(SLIDESHOW_IMAGES[slideshowIdx]);
        }, 4000);
    }

    function stopSlideshow() {
        if (slideshowTimer) { clearInterval(slideshowTimer); slideshowTimer = null; }
        slideshowMode = false;
        slideshowDisplay.classList.add('hidden');
    }

    function renderThumbnails() {
        if (!thumbnailsContainer) return;
        if (!matches.length) return;
        thumbnailsContainer.innerHTML = matches
            .map((m, i) => {
                const img = m.thumbnail
                    ? `<img src="${m.thumbnail}" alt="${m.title || 'Match ' + (i + 1)}">`
                    : `<span>Match ${i + 1}</span>`;
                return `<div class="thumbnail${m.thumbnail ? '' : ' placeholder'}" data-index="${i}">${img}</div>`;
            })
            .join('');
    }

    function loadVideo(index) {
        stopSlideshow();
        if (!matches.length) {
            videoPlayer.src = '';
            if (videoTitle) videoTitle.innerText = 'Match footage coming soon';
            updateActiveThumbnail(index);
            return;
        }
        videoPlayer.src = matches[index].src;
        if (videoTitle) videoTitle.innerText = matches[index].title || '';
        updateActiveThumbnail(index);
    }

    function updateActiveThumbnail(index) {
        document.querySelectorAll('.thumbnail').forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === index);
        });
    }

    function bindThumbnails() {
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const idx = parseInt(thumbnail.getAttribute('data-index'), 10);
                currentVideoIndex = isNaN(idx) ? 0 : idx;
                loadVideo(currentVideoIndex);
            });
        });
    }

    renderThumbnails();
    bindThumbnails();

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (slideshowMode) return;
            if (!matches.length) return;
            currentVideoIndex = (currentVideoIndex - 1 + matches.length) % matches.length;
            loadVideo(currentVideoIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (slideshowMode) {
                currentVideoIndex = 0;
                loadVideo(0);
            } else {
                if (!matches.length) return;
                currentVideoIndex = (currentVideoIndex + 1) % matches.length;
                loadVideo(currentVideoIndex);
            }
        });
    }

    startSlideshow();

    // ------------------------------------------------------------
    // College (horizontal year cards)
    // ------------------------------------------------------------
    const collegeScroll = document.querySelector('.college-scroll');
    if (collegeScroll && Array.isArray(college) && college.length) {
        collegeScroll.innerHTML = college
            .map(
                c => {
                    const bullets = Array.isArray(c.bullets) && c.bullets.length
                        ? `<ul class="year-bullets">${c.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
                        : (c.summary ? `<p class="placeholder-text">${c.summary}</p>` : '');
                    return `
            <div class="college-year">
                <h3>${c.label || ''}</h3>
                <p class="year-label">${c.year || ''}${c.record ? ` &nbsp;·&nbsp; <span class="year-record">${c.record}</span>` : ''}</p>
                ${bullets}
            </div>`;
                }
            )
            .join('');
    }

    // ------------------------------------------------------------
    // Tournaments list
    // ------------------------------------------------------------
    function tierClass(type) {
        if (type === 'Junior Championship (JCT)') return 'tier-jct';
        if (type === 'Junior Gold') return 'tier-gold';
        if (type === 'Junior Silver') return 'tier-silver';
        if (type === 'Junior Bronze') return 'tier-bronze';
        return '';
    }

    const tournamentsList = document.getElementById('tournaments-list');
    if (tournamentsList) {
        if (!tournaments.length) {
            tournamentsList.innerHTML =
                '<li class="tournament-item"><div class="tournament-info"><span class="tournament-name" style="color: rgba(255,255,255,0.4); font-style: italic;">Tournament history coming soon</span></div></li>';
        } else {
            tournamentsList.innerHTML = tournaments
                .map(t => {
                    const finish = (t.finish && t.finish !== '-') ? t.finish : '—';
                    const meta = [t.startDate, t.division].filter(Boolean).join(' · ');
                    const tc = tierClass(t.type);
                    return `
                <li class="tournament-item${tc ? ' ' + tc : ''}">
                    <div class="tournament-info">
                        <span class="tournament-name" title="${t.name}">${t.name}</span>
                        <span class="tournament-date">${meta}</span>
                    </div>
                    <span class="tournament-result">${finish}</span>
                </li>`;
                })
                .join('');
        }
    }

    // Tier info modal
    const tierHelpBtn = document.getElementById('tier-help-btn');
    const tierModalOverlay = document.getElementById('tier-modal-overlay');
    const tierModalClose = document.getElementById('tier-modal-close');
    if (tierHelpBtn && tierModalOverlay) {
        tierHelpBtn.addEventListener('click', () => tierModalOverlay.classList.add('active'));
        tierModalClose.addEventListener('click', () => tierModalOverlay.classList.remove('active'));
        tierModalOverlay.addEventListener('click', e => {
            if (e.target === tierModalOverlay) tierModalOverlay.classList.remove('active');
        });
    }

    // Rating info modal
    const ratingHelpBtn = document.getElementById('rating-help-btn');
    const ratingModalOverlay = document.getElementById('rating-modal-overlay');
    const ratingModalClose = document.getElementById('rating-modal-close');
    if (ratingHelpBtn && ratingModalOverlay) {
        ratingHelpBtn.addEventListener('click', () => ratingModalOverlay.classList.add('active'));
        ratingModalClose.addEventListener('click', () => ratingModalOverlay.classList.remove('active'));
        ratingModalOverlay.addEventListener('click', e => {
            if (e.target === ratingModalOverlay) ratingModalOverlay.classList.remove('active');
        });
    }

    // ------------------------------------------------------------
    // Charts
    // ------------------------------------------------------------

    // Custom plugin: draws division axis labels above the plot area and
    // dashed dividers + peak "#N" labels directly on canvas — no annotation plugin needed.
    const squashChartPlugin = {
        id: 'squashChart',
        afterDraw(chart) {
            const segs = chart.config.options._divSegments;
            const peaks = chart.config.options._peakPoints;
            if (!segs && !peaks) return;

            const { ctx, chartArea, scales } = chart;
            const xs = scales.x;
            const ys = scales.y;

            ctx.save();

            if (segs && segs.length) {
                // Dashed vertical dividers at each division transition
                ctx.strokeStyle = 'rgba(255,255,255,0.18)';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                segs.slice(1).forEach(seg => {
                    const x = xs.getPixelForValue(seg.startIdx);
                    ctx.beginPath();
                    ctx.moveTo(x, chartArea.top);
                    ctx.lineTo(x, chartArea.bottom);
                    ctx.stroke();
                });
                ctx.setLineDash([]);

                // Division names centered above the plot area
                ctx.font = '500 10px Inter, sans-serif';
                ctx.fillStyle = 'rgba(255,255,255,0.38)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                segs.forEach(seg => {
                    const x0 = xs.getPixelForValue(seg.startIdx);
                    const x1 = xs.getPixelForValue(seg.endIdx);
                    ctx.fillText(
                        seg.division.replace('Junior - ', ''),
                        (x0 + x1) / 2,
                        chartArea.top - 14
                    );
                });
            }

            if (peaks && peaks.length) {
                // Pre-compute pixel positions and initial label Y
                const items = peaks.map(({ idx, rank }) => {
                    const px = xs.getPixelForValue(idx);
                    const py = ys.getPixelForValue(rank);
                    return { px, py, ly: Math.max(py - 14, chartArea.top + 14), rank };
                });

                // Nudge labels upward when two peaks are too close horizontally
                for (let i = 1; i < items.length; i++) {
                    const prev = items[i - 1];
                    const curr = items[i];
                    if (curr.px - prev.px < 30) {
                        curr.ly = Math.max(prev.ly - 16, chartArea.top + 4);
                    }
                }

                items.forEach(({ px, py, ly, rank }) => {
                    ctx.beginPath();
                    ctx.arc(px, py, 4, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.fill();

                    ctx.font = '600 11px Inter, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.strokeStyle = 'rgba(28,28,30,0.9)';
                    ctx.lineWidth = 3;
                    ctx.lineJoin = 'round';
                    ctx.strokeText(`${rank}`, px, ly);
                    ctx.fillStyle = 'rgba(255,255,255,0.88)';
                    ctx.fillText(`${rank}`, px, ly);
                });
            }

            ctx.restore();
        }
    };

    if (window.Chart) {
        Chart.register(squashChartPlugin);
    }

    function loadCharts() {
        const points = window.SQUASH_DATA;
        if (!Array.isArray(points) || !points.length) {
            placeholderChart(document.getElementById('ranking-chart'), 'Ranking');
            placeholderChart(document.getElementById('rating-chart'), 'Rating');
            return;
        }
        buildRankingChart(points);
        buildRatingChart(points);
    }

    function divisionSegments(points) {
        const segments = [];
        let cur = null;
        points.forEach((p, i) => {
            if (!cur || cur.division !== p.division) {
                if (cur) segments.push(cur);
                cur = { division: p.division, startIdx: i, endIdx: i };
            } else {
                cur.endIdx = i;
            }
        });
        if (cur) segments.push(cur);
        return segments;
    }

    function chartOptions(yTitle, extraY) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            layout: { padding: { top: 32, right: 12 } },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#2c2c2e',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 8,
                    titleFont: { family: 'Inter', size: 12, weight: '600' },
                    bodyFont: { family: 'Inter', size: 12 }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                    ticks: {
                        color: 'rgba(255,255,255,0.45)',
                        font: { family: 'Inter', size: 11 },
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: 8,
                        callback: function (val) {
                            const label = this.getLabelForValue(val);
                            return label ? label.slice(0, 4) : '';
                        }
                    }
                },
                y: {
                    grace: '18%',
                    grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                    ticks: {
                        color: 'rgba(255,255,255,0.55)',
                        font: { family: 'Inter', size: 11 }
                    },
                    title: {
                        display: true,
                        text: yTitle,
                        color: 'rgba(255,255,255,0.7)',
                        font: { family: 'Inter', size: 12, weight: '600' }
                    },
                    ...(extraY || {})
                }
            }
        };
    }

    function datasetStyle(dataLen) {
        const dense = dataLen > 60;
        return {
            borderColor: '#ffffff',
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderWidth: 2,
            pointBackgroundColor: '#ffffff',
            pointRadius: dense ? 0 : 2,
            pointHoverRadius: 5,
            pointHitRadius: 8,
            tension: dense ? 0.15 : 0.3,
            fill: true
        };
    }

    function placeholderChart(ctx, yTitle) {
        if (!ctx) return;
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', ''],
                datasets: [{
                    data: [null, null, null, null, null],
                    borderColor: 'rgba(255,255,255,0.15)',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: chartOptions(yTitle)
        });
    }

    function buildRankingChart(points) {
        const ctx = document.getElementById('ranking-chart');
        if (!ctx || !points.length) { placeholderChart(ctx, 'Ranking'); return; }

        const segs = divisionSegments(points);

        // Best ranking (lowest number) per division
        const peaks = segs.map(seg => {
            let bestIdx = seg.startIdx;
            for (let j = seg.startIdx + 1; j <= seg.endIdx; j++) {
                if (points[j].ranking < points[bestIdx].ranking) bestIdx = j;
            }
            return { idx: bestIdx, rank: points[bestIdx].ranking };
        });

        const opts = chartOptions('Ranking (lower = better)', { reverse: true });
        // Extra top padding so division labels and peak callouts don't overlap
        opts.layout = { padding: { top: 52, right: 14 } };
        // Deduplicated year ticks — prevents "2019" appearing twice
        opts.scales.x.ticks = {
            ...opts.scales.x.ticks,
            maxTicksLimit: 10,
            callback: function (val, index, ticks) {
                const label = this.getLabelForValue(val);
                if (!label) return '';
                const year = label.slice(0, 4);
                if (index === 0) return year;
                const prev = this.getLabelForValue(ticks[index - 1].value);
                return prev && prev.slice(0, 4) === year ? '' : year;
            }
        };
        opts._divSegments = segs;
        opts._peakPoints = peaks;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: points.map(p => p.ranking_period),
                datasets: [{
                    label: 'Ranking',
                    data: points.map(p => p.ranking),
                    ...datasetStyle(points.length)
                }]
            },
            options: opts
        });
    }

    function buildRatingChart(points) {
        const ctx = document.getElementById('rating-chart');
        if (!ctx || !points.length) { placeholderChart(ctx, 'Rating'); return; }

        const allRating = window.RATING_DATA || points.filter(p => p.rating > 0).map(p => ({ date: p.ranking_period, rating: p.rating }));
        const ratingPoints = allRating.filter(p => p.date >= '2016-12-07');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ratingPoints.map(p => p.date),
                datasets: [{
                    label: 'Rating',
                    data: ratingPoints.map(p => p.rating),
                    ...datasetStyle(ratingPoints.length)
                }]
            },
            options: chartOptions('Rating')
        });
    }

    loadCharts();

    // ------------------------------------------------------------
    // Match record donut charts
    // ------------------------------------------------------------
    const PIE_COLORS = ['#4caf72', '#b03030', '#c9a614'];
    const PIE_LABELS = ['3-game', '4-game', '5-game'];

    const pieTooltip = {
        backgroundColor: '#2c2c2e',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255,255,255,0.12)',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        titleFont: { family: 'Inter', size: 12, weight: '600' },
        bodyFont: { family: 'Inter', size: 12 },
        callbacks: {
            title: items => PIE_LABELS[items[0].dataIndex],
            label: item => `  ${item.parsed} matches`
        }
    };

    function buildPieChart(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: PIE_LABELS,
                datasets: [{
                    data,
                    backgroundColor: PIE_COLORS,
                    borderColor: '#1c1c1e',
                    borderWidth: 3,
                    hoverOffset: 8,
                    hoverBorderColor: '#1c1c1e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '62%',
                plugins: {
                    legend: { display: false },
                    tooltip: pieTooltip
                },
                animation: { duration: 600 }
            }
        });
    }

    buildPieChart('wins-chart',   [137, 68, 30]);
    buildPieChart('losses-chart', [65, 43, 48]);

    // Cap the tournaments card to the left column's natural height so the list scrolls.
    // max-height on the card (not the column) is the key — the card's content overflows
    // it, so max-height actually constrains it. ResizeObserver fires on first layout and
    // on every resize, so no timing hacks are needed.
    (function () {
        const chartsCol = document.querySelector('.charts-col');
        const tournCard = document.querySelector('.tournaments-card');
        if (!chartsCol || !tournCard || !window.ResizeObserver) return;
        new ResizeObserver(entries => {
            const h = entries[0].contentRect.height;
            if (h > 0) tournCard.style.maxHeight = h + 'px';
        }).observe(chartsCol);
    })();

});
