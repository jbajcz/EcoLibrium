function show() {
    var nav = document.querySelector('.start-game-interface .navigation');
    if (nav) {
        nav.classList.toggle('open');
    }
}

function buyhouse() {
    var nav = document.querySelector('.start-game-interface .house');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateMoney(-50);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateMoney(75);
        }
    }
}

function buyMhouse() {
    var nav = document.querySelector('.start-game-interface .Mhouse');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateHappiness(8);  // Reverse the happiness effect
            updateMoney(-100);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateHappiness(-8);
            updateMoney(120);
        }
    }
}

function buyapartment() {
    var nav = document.querySelector('.start-game-interface .apartment1');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateMoney(-175);
            updateMPD(32);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateMoney(180);
            updateMPD(-32);
        }
    }
}

function buyfactory() {
    var nav = document.querySelector('.start-game-interface .factory1');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateHappiness(-32);  // Reverse the happiness effect
            updateMoney(-225);
            updateMPD(64);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateHappiness(32);
            updateMoney(250);
            updateMPD(-64);
        }
    }
}

function buylumber() {
    var nav = document.querySelector('.start-game-interface .lumbermill');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateMoney(-180);
            updateMPD(24);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateMoney(200);
            updateMPD(-24);
        }
    }
}

function buyfarm() {
    var nav = document.querySelector('.start-game-interface .farm1');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateHappiness(16);  // Reverse the happiness effect
            updateMoney(-145);
            updateMPD(12);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateHappiness(-16);
            updateMoney(155);
            updateMPD(-12);
        }
    }
}

function updateHappiness(A) {
    var textElement = document.querySelector('.start-game-interface .text-wrapper-3');
    var currentValue = textElement.textContent;

    // Extract the numerical part and parse it as a number
    var numericalValue = parseInt(currentValue, 10);

    // Subtract A from the current numerical value
    var newValue = numericalValue - A;

    // Update the text content with the new value
    textElement.textContent = newValue + '%';
}

function updateMoney(A) {
    var textElement = document.querySelector('.start-game-interface .text-wrapper');
    var currentValue = textElement.textContent;

    // Extract the numerical part and parse it as a number
    var numericalValue = parseInt(currentValue.replace('$', ''), 10);

    // Subtract A from the current numerical value
    var newValue = numericalValue - A;

    // Update the text content with the new value
    textElement.textContent = '$' + newValue;
}

function updateMPD(A) {
    var textElement = document.querySelector('.start-game-interface .text-wrapper-2');
    var currentValue = textElement.textContent;

    var numericalValueMatch = currentValue.match(/\d+/);
    var numericalValue = numericalValueMatch ? parseInt(numericalValueMatch[0], 10) : 0;

    // Subtract A from the current numerical value
    var newValue = numericalValue - A;
    
    // Update the text content with the new value
    textElement.textContent = '$' + newValue + '/day';
}

function buyshop() {
    var nav = document.querySelector('.start-game-interface .shop');
    if (nav) {
        nav.classList.toggle('open');
    }
}

function buygazebo() {
    var nav = document.querySelector('.start-game-interface .gazebo1');
    if (nav) {
        nav.classList.toggle('open');
    }
}

function buypond() {
    var nav = document.querySelector('.start-game-interface .pond1');
    if (nav) {
        // Check if the factory already has the 'open' class
        if (nav.classList.contains('open')) {
            // If it is open, untoggle and decrease happiness
            nav.classList.remove('open');
            updateHappiness(16);  // Reverse the happiness effect
            updateMoney(-145);
            updateMPD(12);
        } else {
            // If it is not open, toggle and increase happiness
            nav.classList.add('open');
            updateHappiness(-16);
            updateMoney(155);
            updateMPD(-12);
        }
    }
}

function updateHappiness(A) {
    var textElement = document.querySelector('.start-game-interface .text-wrapper-3');
    var currentValue = textElement.textContent;

    // Extract the numerical part and parse it as a number
    var numericalValue = parseInt(currentValue, 10);

    // Subtract A from the current numerical value
    var newValue = numericalValue - A;

    // Update the text content with the new value
    textElement.textContent = newValue + '%';
}

function updateMoney(A) {
    var textElement = document.querySelector('.start-game-interface .text-wrapper');
    var currentValue = textElement.textContent;

    // Extract the numerical part and parse it as a number
    var numericalValue = parseInt(currentValue.replace('$', ''), 10);

    // Subtract A from the current numerical value
    var newValue = numericalValue - A;

    // Update the text content with the new value
    textElement.textContent = '$' + newValue;
}

function updateMPD(A) {
    var textElement = document.querySelector('.start-game-interface .text-wrapper-2');
    var currentValue = textElement.textContent;

    var numericalValueMatch = currentValue.match(/\d+/);
    var numericalValue = numericalValueMatch ? parseInt(numericalValueMatch[0], 10) : 0;

    // Subtract A from the current numerical value
    var newValue = numericalValue - A;
    
    // Update the text content with the new value
    textElement.textContent = '$' + newValue + '/day';
}

function scrollRight() {
    var initialMenu = document.querySelector('.start-game-interface .menu .initial');
    var newMenu = document.querySelector('.start-game-interface .menu .new');
    var rightArrowImage = document.querySelector('.start-game-interface .menu .right-arrow');
    var leftArrowImage = document.querySelector('.start-game-interface .menu .left-arrow');

    if (initialMenu) {
        initialMenu.classList.toggle('changenone');
        newMenu.classList.toggle('changeflex');
    } else{
        initialMenu.classList.toggle('changeflex');
        newMenu.classList.toggle('changenone');
    }

}

function scrollLeft() {
    var initialMenu = document.querySelector('.start-game-interface .menu .initial');
    var newMenu = document.querySelector('.start-game-interface .menu .new');
    var rightArrowImage = document.querySelector('.start-game-interface .menu .right-arrow');
    var leftArrowImage = document.querySelector('.start-game-interface .menu .left-arrow');

    if (initialMenu) {
        initialMenu.classList.toggle('changenone');
        newMenu.classList.toggle('changeflex');
    } else{
        initialMenu.classList.toggle('changeflex');
        newMenu.classList.toggle('changenone');
    }
}

function nextDay() {
    var textElement = document.querySelector('.start-game-interface .day-number');
    var currentValue = textElement.textContent;

    var numericalValueMatch = currentValue.match(/\d+/);
    var numericalValue = numericalValueMatch ? parseInt(numericalValueMatch[0], 10) : 0;

    // Subtract A from the current numerical value
    var newValue = numericalValue + 1;
    
    // Update the text content with the new value
    textElement.textContent = 'Day ' + newValue;
}