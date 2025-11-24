// js/main.js
function initApp() {
    // === THEME TOGGLE ===
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    const logoImg = document.getElementById('logoImg');

    const logo = 'aerohub_new_grey.svg';

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    if (logoImg) {
        logoImg.src = logo;
    }
    
    if (toggle) toggle.textContent = savedTheme === 'dark' ? '🌞' : '🌙';

    toggle?.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggle.textContent = newTheme === 'dark' ? '🌞' : '🌙';
    });

    // === LIVE DATA & MAP ===
    const OPENSKY = 'https://opensky-network.org/api/states/all';
    let retryDelay = 5000; // Start with 5 second delay

    const BOUNDS = {
        na: {minLat: 20, maxLat: 60, minLon: -130, maxLon: -50},
        eu: {minLat: 34, maxLat: 72, minLon: -25, maxLon: 45},
        ap: {minLat: -10, maxLat: 50, minLon: 100, maxLon: 180},
        me: {minLat: 15, maxLat: 40, minLon: 25, maxLon: 65},
        sa: {minLat: -55, maxLat: 15, minLon: -85, maxLon: -30},
        af: {minLat: -35, maxLat: 37, minLon: -20, maxLon: 55}
    };

    const FALLBACK = {na: 3300, eu: 2200, ap: 2400, me: 1000, sa: 850, af: 570, global: 9500};

    function isCommercialCallsign(cs) {
        return cs && /^[A-Z]{3}\d+[A-Z]?$/.test(cs.trim());
    }

    function inBounds(state, bounds) {
        const lat = state[6], lon = state[5];
        return lat && lon && lat >= bounds.minLat && lat <= bounds.maxLat && lon >= bounds.minLon && lon <= bounds.maxLon;
    }

    function formatTime() {
        return new Date().toTimeString().slice(0, 8);
    }

    async function updateLive() {
        try {
            // Try direct fetch first (works on https sites)
            let res;
            try {
                res = await fetch(OPENSKY);
            } catch (directError) {
                console.log('Direct fetch failed, trying with CORS proxy...');
                res = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(OPENSKY));
            }
            
            if (res.status === 429) {
                // Rate limited - use fallback and increase delay
                retryDelay = Math.min(retryDelay * 2, 300000); // Max 5 minutes
                console.log(`Rate limited. Next retry in ${retryDelay}ms`);
                throw new Error('Rate limited');
            }
            
            if (!res.ok) throw new Error('API failed');
            
            retryDelay = 120000; // Reset to 2 minutes on success
            const data = await res.json();
            const states = data.states || [];

            const counts = {na: 0, eu: 0, ap: 0, me: 0, sa: 0, af: 0, global: 0};

            states.forEach(state => {
                if (!isCommercialCallsign(state[1])) return;
                counts.global++;
                if (inBounds(state, BOUNDS.na)) counts.na++;
                if (inBounds(state, BOUNDS.eu)) counts.eu++;
                if (inBounds(state, BOUNDS.ap)) counts.ap++;
                if (inBounds(state, BOUNDS.me)) counts.me++;
                if (inBounds(state, BOUNDS.sa)) counts.sa++;
                if (inBounds(state, BOUNDS.af)) counts.af++;
            });

            // Update live counts
            ['na', 'eu', 'ap', 'me', 'sa', 'af', 'global'].forEach(id => {
                const count = counts[id];
                const el = document.getElementById(id + 'Count');
                const status = document.getElementById(id + 'Status');
                const timeEl = document.getElementById(id + 'Time');

                if (el) el.textContent = count.toLocaleString();
                if (status) {
                    status.textContent = 'LIVE';
                    status.className = 'live-status live';
                }
                if (timeEl) timeEl.textContent = 'Updated: ' + formatTime();
            });

            // Update peaks
            updatePeaks(counts);

        } catch (err) {
            console.error('API failed, using fallback:', err);
            ['na', 'eu', 'ap', 'me', 'sa', 'af', 'global'].forEach(id => {
                const el = document.getElementById(id + 'Count');
                const status = document.getElementById(id + 'Status');
                if (el) el.textContent = FALLBACK[id].toLocaleString();
                if (status) {
                    status.textContent = 'FALLBACK';
                    status.className = 'live-status fallback';
                }
            });
        }

        // Update YTD
        updateYearly();
        updateCo2();
        
        // Update every 2 minutes (reduced to avoid rate limits)
        setTimeout(updateLive, retryDelay);
    }

    function updatePeaks(counts) {
        const factors = {na: 1.15, eu: 1.18, ap: 1.21, me: 1.17, sa: 1.19, af: 1.22, global: 1.29};
        Object.keys(counts).forEach(id => {
            const live = counts[id];
            const peak = Math.round(live * factors[id]);
            const peakEl = document.getElementById(id + 'Peak');
            if (peakEl) peakEl.textContent = peak.toLocaleString();
        });
    }

    function updateYearly() {
        const start = new Date(2025, 0, 1);
        const now = new Date();
        const days = Math.floor((now - start) / 86400000) + 1;
        const dailyAvg = 100000;
        const ytd = dailyAvg * days;

        const shares = {na: 0.35, eu: 0.20, ap: 0.24, me: 0.08, sa: 0.07, af: 0.06};
        Object.keys(shares).forEach(id => {
            const el = document.getElementById(id + 'Yearly');
            if (el) {
                const regional = Math.round(ytd * shares[id]);
                el.textContent = regional < 1e9 ? 
                    (regional / 1e6).toFixed(1) + 'M' : 
                    (regional / 1e9).toFixed(1) + 'B';
            }
        });

        const globalEl = document.getElementById('globalYearly');
        if (globalEl) globalEl.textContent = (ytd / 1e9).toFixed(1) + 'B';
    }

    function updateCo2() {
        const start = new Date(2025, 0, 1);
        const now = new Date();
        const days = Math.floor((now - start) / 86400000) + 1;
        const co2PerFlight = 189; // kg
        const flights = 100000 * days;
        const co2Mt = Math.round((flights * co2PerFlight) / 1e9);
        const el = document.getElementById('co2Estimate');
        if (el) el.textContent = `~${co2Mt} Mt`;
    }

    // === LEAFLET MAP ===
    let map, markers;

    function initMap() {
        // Check if Leaflet is loaded
        if (typeof L === 'undefined') {
            console.error('Leaflet not loaded yet');
            return;
        }
        
        markers = L.layerGroup();
        map = L.map('liveMap').setView([20, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);
        markers.addTo(map);
        updateMap();
    }

    async function updateMap() {
        markers.clearLayers();
        try {
            // Try direct fetch first
            let res;
            try {
                res = await fetch(OPENSKY);
            } catch (directError) {
                console.log('Direct fetch failed, trying with CORS proxy...');
                res = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(OPENSKY));
            }
            
            if (res.ok) {
                const data = await res.json();
                (data.states || [])
                    .filter(s => isCommercialCallsign(s[1]))
                    .forEach(s => {
                        const [lat, lon, heading] = [s[6], s[5], s[10]];
                        if (lat && lon) {
                            const color = '#F47C20'; // Orange accent color
                            
                            // Create custom aircraft icon
                            const aircraftIcon = L.divIcon({
                                html: `<div style="
                                    width: 16px; 
                                    height: 16px; 
                                    color: ${color}; 
                                    font-size: 14px; 
                                    text-align: center; 
                                    line-height: 16px;
                                    transform: rotate(${heading || 0}deg);
                                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
                                    transition: all 0.3s ease;
                                ">✈</div>`,
                                className: 'aircraft-icon',
                                iconSize: [16, 16],
                                iconAnchor: [8, 8]
                            });
                            
                            L.marker([lat, lon], { icon: aircraftIcon })
                                .addTo(markers)
                                .bindPopup(`Flight: ${s[1] || 'Unknown'}<br>Heading: ${heading ? Math.round(heading) + '°' : 'Unknown'}`);
                        }
                    });
            }
        } catch (e) {
            console.error('Map update failed:', e);
        }
        // Reduced map polling to 2 minutes for better performance and avoid rate limits
        setTimeout(updateMap, 120000);
    }

    // === START EVERYTHING ===
    // Check if map element exists before initializing (only on index page)
    const mapElement = document.getElementById('liveMap');
    if (mapElement) {
        updateLive();
        // Reduced polling from 60s to 120s for better performance
        setInterval(updateLive, 120000);
        
        // Wait for Leaflet to load before initializing map
        if (typeof L !== 'undefined') {
            initMap();
        } else {
            // Retry after a short delay if Leaflet isn't ready
            setTimeout(() => {
                if (typeof L !== 'undefined') {
                    initMap();
                } else {
                    console.error('Leaflet library failed to load');
                }
            }, 500);
        }
    }
}
