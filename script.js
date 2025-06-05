// Eternal Void - JavaScript for Maximum Boredom
// This script makes the website even more tedious and time-wasting

let timeWasted = 0;
let pixelsSeen = 0;
let boredomLevel = 0;
let visitorCount = Math.floor(Math.random() * 15) + 1; // Random small number

// Start the boring counters when page loads
document.addEventListener('DOMContentLoaded', function() {
    startBoringCounters();
    updateVisitorCounter();
});

function startBoringCounters() {
    // Count seconds wasted
    setInterval(function() {
        timeWasted++;
        document.getElementById('time-counter').textContent = timeWasted;
        
        // Calculate incredibly slow progress
        const progress = Math.min((timeWasted / 1000) * 100, 100);
        document.getElementById('progress-counter').textContent = progress.toFixed(8) + '%';
        
        // Increase boredom level very slowly
        boredomLevel = Math.min(timeWasted / 120, 100);
        document.getElementById('boredom-counter').textContent = boredomLevel.toFixed(2) + '/100';
        
    }, 1000);
    
    // Count pixels (completely meaningless)
    setInterval(function() {
        pixelsSeen += Math.floor(Math.random() * 5) + 1;
        document.getElementById('pixel-counter').textContent = pixelsSeen.toLocaleString();
    }, 2000);
}

function updateVisitorCounter() {
    // Simulate extremely low visitor count
    document.getElementById('visitor-counter').textContent = visitorCount;
}

// The most boring waiting simulator ever
function startWaiting() {
    const button = document.getElementById('wait-button');
    const status = document.getElementById('waiting-status');
    const progressFill = document.getElementById('progress-fill');
    
    button.disabled = true;
    button.textContent = 'Currently Waiting...';
    
    let waitingTime = 0;
    const totalWaitTime = 30; // 30 seconds of pure waiting
    
    status.textContent = 'Please wait while nothing happens...';
    
    const waitingInterval = setInterval(function() {
        waitingTime++;
        const progressPercent = (waitingTime / totalWaitTime) * 100;
        progressFill.style.width = progressPercent + '%';
        
        // Update status with incredibly boring messages
        const messages = [
            'Please wait while nothing happens...',
            'Still waiting... nothing is still happening...',
            'Continuing to wait... the void remains empty...',
            'Almost halfway through waiting for nothing...',
            'More than halfway through this pointless wait...',
            'Nearly finished waiting for absolutely nothing...',
            'Just a few more seconds of meaningless waiting...'
        ];
        
        const messageIndex = Math.floor((waitingTime / totalWaitTime) * messages.length);
        if (messageIndex < messages.length) {
            status.textContent = messages[messageIndex];
        }
        
        if (waitingTime >= totalWaitTime) {
            clearInterval(waitingInterval);
            status.textContent = 'Congratulations! You successfully waited for nothing to happen. You may now wait again if you wish.';
            button.disabled = false;
            button.textContent = 'Wait Again (Why Not?)';
            progressFill.style.width = '0%';
        }
    }, 1000);
}

// Add some pointless scroll effects
window.addEventListener('scroll', function() {
    // Calculate how much of this meaningless content has been scrolled
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Do absolutely nothing with this information
    if (scrollPercent > 50) {
        // Still do nothing, but do it after scrolling halfway
    }
});

// Prevent any accidental excitement
document.addEventListener('click', function(e) {
    // Add a tiny delay to make everything feel sluggish
    setTimeout(function() {
        // Do nothing exciting
    }, 50);
});

// Make form submissions pointless
document.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your form has been successfully ignored. Thank you for your contribution to the void.');
});

// Add some random delays to make everything feel slower
function addRandomDelay(callback, baseDelay = 100) {
    const randomDelay = baseDelay + Math.random() * 200;
    setTimeout(callback, randomDelay);
}

// Monitor user activity and comment on how boring it is
let userActions = 0;
document.addEventListener('click', function() {
    userActions++;
    if (userActions === 10) {
        addRandomDelay(function() {
            alert('You have clicked 10 times. This achieves nothing but we felt obligated to mention it.');
        });
    }
    if (userActions === 25) {
        addRandomDelay(function() {
            alert('25 clicks recorded. Your persistence in interacting with this boring website is noted.');
        });
    }
});

// Simulate extremely slow loading for no reason
function simulateSlowLoading() {
    const loadingElements = document.querySelectorAll('.section');
    loadingElements.forEach(function(element, index) {
        element.style.opacity = '0';
        setTimeout(function() {
            element.style.transition = 'opacity 2s ease-in';
            element.style.opacity = '1';
        }, index * 500);
    });
}

// Call slow loading on page load
window.addEventListener('load', function() {
    simulateSlowLoading();
});
