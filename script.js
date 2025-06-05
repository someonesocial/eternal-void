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
    const totalWaitTime = 190; // 190 seconds of pure waiting
    
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

// Additional boring functions for extended content

// Function to slowly type out boring text
function slowTypeText(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    const typeInterval = setInterval(function() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

// Add a boring fact generator
function generateBoringFact() {
    const facts = [
        "The average pencil can draw a line 35 miles long.",
        "A paperclip weighs approximately 1 gram.",
        "The word 'queue' is the only word in English pronounced the same way when the last four letters are removed.",
        "Office chairs typically have five wheels for stability reasons.",
        "The manila folder was invented in the Philippines, hence the name.",
        "Staplers can typically staple 20 sheets of standard paper.",
        "The color beige gets its name from natural wool that hasn't been bleached.",
        "Standard copy paper is 8.5 by 11 inches in the United States.",
        "File cabinets are usually made of steel for durability.",
        "The average person blinks 15-20 times per minute while reading.",
        "A standard brick weighs approximately 4.5 pounds.",
        "The average raindrop falls at 20 feet per second.",
        "Concrete takes 28 days to reach full strength.",
        "A typical doorknob is 36 inches from the floor.",
        "The average human hair grows 0.5 inches per month.",
        "Standard sidewalks are 4 feet wide in most cities.",
        "A gallon of water weighs 8.34 pounds.",
        "The average room temperature is 68-72 degrees Fahrenheit.",
        "Standard ceiling height in homes is 8-9 feet.",
        "A typical slice of bread is 0.5 inches thick.",
        "The average walking speed is 3.1 miles per hour.",
        "Salt dissolves in water at a rate of 36 grams per 100ml.",
        "A standard envelope measures 4.125 by 9.5 inches.",
        "The average person takes 20,000 breaths per day.",
        "Tap water pressure is typically 40-60 PSI.",
        "A standard light bulb socket is called an E26 base.",
        "The average grocery store has 47,000 different products.",
        "Standard toilet paper rolls have 1000 sheets.",
        "A typical house key is 2.5 inches long.",
        "The average person sleeps 26 years in their lifetime.",
        "Standard parking meters accept quarters, dimes, and nickels.",
        "A gallon of milk weighs about 8.6 pounds.",
        "The average dishwashing cycle takes 2 hours and 15 minutes.",
        "Standard speed bumps are 3-4 inches high.",
        "A typical banana contains 105 calories.",
        "The average person walks 7,500 steps per day.",
        "Standard bathtubs hold 80 gallons of water.",
        "A regular pencil eraser can erase a line 1 mile long.",
        "The average person spends 5 years waiting in lines.",
        "Standard doorways are 32 inches wide.",
        "A typical paperback book has 250-300 pages.",
        "The average person says 'hello' 47 times per day.",
        "Standard lawn mower cutting height is 2.5-3 inches.",
        "A regular tea bag contains 2-3 grams of tea.",
        "The average person opens the refrigerator 22 times daily.",
        "Standard kitchen counters are 36 inches high.",
        "A typical rubber band can stretch 6 times its length.",
        "The average person checks their phone 96 times per day.",
        "Standard mailboxes are 41-45 inches from the ground.",
        "A regular toothbrush has 2,500 bristles.",
        "The average person spends 92 days on the toilet in their lifetime.",
        "Standard stop signs are 30 inches wide.",
        "A typical chicken egg weighs 2 ounces.",
        "The average person yawns 23 times per day.",
        "Standard shoelaces are 45-54 inches long.",
        "A regular drinking straw is 8.5 inches long.",
        "The average person throws away 4.5 pounds of trash daily.",
        "Standard traffic lights change every 90-120 seconds.",
        "A typical cotton t-shirt weighs 6 ounces.",
        "The average person spends 3 hours and 15 minutes eating daily.",
        "Standard elevator buttons are 0.75 inches in diameter.",
        "A regular postage stamp weighs 0.2 grams.",
        "The average person blinks 17,000 times per day.",
        "Standard newspaper pages are 22.75 inches tall.",
        "A typical shovel blade is 9.5 inches wide.",
        "The average person uses 80-100 gallons of water daily.",
        "Standard park benches are 18 inches deep.",
        "A regular golf ball has 336 dimples.",
        "The average person spends 7 minutes deciding what to wear.",
        "Standard crosswalk stripes are 24 inches wide.",
        "A typical apple contains 95 calories.",
        "The average person spends 26 minutes per day looking for things."
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    return randomFact;
}

// Create a boring fact display system
function startBoringFactRotation() {
    const factElement = document.createElement('div');
    factElement.id = 'boring-fact-display';
    factElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        padding: 10px;
        font-size: 12px;
        color: #666;
        max-width: 250px;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(factElement);
    
    function updateBoringFact() {
        const fact = generateBoringFact();
        slowTypeText('boring-fact-display', 'Boring Fact: ' + fact, 50);
    }
    
    // Update fact every 15 seconds (more frequent boring interruptions)
    updateBoringFact();
    setInterval(updateBoringFact, 15000);
}

// Function to simulate reading progress
function trackReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: #888;
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Add extremely slow image loading simulation (even though we have no images)
function simulateImageLoading() {
    // Create placeholder for non-existent images
    const imagePlaceholders = document.querySelectorAll('.fake-image-placeholder');
    imagePlaceholders.forEach(function(placeholder, index) {
        setTimeout(function() {
            placeholder.style.backgroundColor = '#f0f0f0';
            placeholder.textContent = 'Image would load here if we had any interesting images to show';
        }, (index + 1) * 2000);
    });
}

// Implement incredibly boring hover effects
function addBoringHoverEffects() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
}

// Create a function that counts everything slowly
function countEverythingSlowly() {
    let wordCount = 0;
    let letterCount = 0;
    let punctuationCount = 0;
    
    const allText = document.body.textContent;
    const words = allText.split(/\s+/).filter(word => word.length > 0);
    
    words.forEach(word => {
        letterCount += word.replace(/[^\w]/g, '').length;
        punctuationCount += word.replace(/[\w\s]/g, '').length;
    });
    
    wordCount = words.length;
    
    // Display these meaningless statistics somewhere
    console.log('Total words on this boring page:', wordCount);
    console.log('Total letters on this boring page:', letterCount);
    console.log('Total punctuation marks on this boring page:', punctuationCount);
}

// Initialize all the additional boring features
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(startBoringFactRotation, 3000);
    setTimeout(trackReadingProgress, 1000);
    setTimeout(simulateImageLoading, 2000);
    setTimeout(addBoringHoverEffects, 500);
    setTimeout(countEverythingSlowly, 5000);
});

// Add function to make scrolling feel unnecessarily smooth and slow
function addSlowScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Call slow scrolling setup
window.addEventListener('load', addSlowScrolling);
