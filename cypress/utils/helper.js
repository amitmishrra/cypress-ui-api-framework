import 'cypress-xpath'

export function visitPage(url) {
    try {
        cy.visit(url);
        console.log("Visit successful");
    }
    catch (err) {
        console.log("Visit failed with error: " + err);
    }
}

export function waitElementElemntToBeVisible(selector, time) {
    try {
        cy.xpath(selector).should('be.visible', { timeout: time });
        console.log("Element is visible");
    }
    catch (err) {
        console.log("Element is not visible with error: " + err);
    }
}

export function clickOnElement(selector) {
    try {
        // waitElementElemntToBeVisible(selector, 10000);
        cy.xpath(selector).click();
        console.log("Click successful");
    }
    catch (err) {
        console.log("Click failed with error: " + err);
    }
}

export function typeText(selector, text) {
    try {
       cy.get(selector).type(text);
    }
    catch (err) {
        console.log("Type failed with error: " + err);
    }
}

export function clearOldTextAndTypeNew(selector, text) {
    try {
        cy.xpath(selector).click().type(text);
        console.log("Type successful");
    }
    catch (err) {
        console.log("Type failed with error: " + err);
    }
}


export function verifyElementIsVisible(selector) {
    try {
        cy.xpath(selector).should('be.visible');
        console.log("Element is visible");
    }
    catch (err) {
        console.log("Element is not visible with error: " + err);
    }
}

export function verifyElementIsNotVisible(selector) {
    try {
        cy.xpath(selector).should('not.be.visible');
        console.log("Element is not visible");
    }
    catch (err) {
        console.log("Element is visible with error: " + err);
    }
}

export function dragAndDropElement(selector, target) {
    try {
        cy.xpath(selector).drag(target);
        console.log("Drag and drop successful");
    }
    catch (err) {
        console.log("Drag and drop failed with error: " + err);
    }
}

export function verifyElementText(selector, text) {
    try {
        cy.xpath(selector).should('have.text', text);
        console.log("Text is correct");
    }
    catch (err) {
        console.log("Text is incorrect with error: " + err);
    }
}

export function hoverOverElement(selector) {
    try {
        cy.xpath(selector).trigger('mouseover');
        console.log("Hover successful");
    }
    catch (err) {
        console.log("Hover failed with error: " + err);
    }
}

////////////////////////////////////////////////////////////////////////////////

export function randomString() {
    try {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    catch (err) {
        console.log("Random username failed with error: " + err);
    }
}