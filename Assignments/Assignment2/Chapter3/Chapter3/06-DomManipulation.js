
// ==========================================
// 1. Selecting Elements
// ==========================================
// We can select elements using various methods:
// - document.getElementById('id')
// - document.querySelector('selector') -> Returns first matching element
// - document.querySelectorAll('selector') -> Returns a NodeList of all matches

const targetParagraph = document.getElementById('target-paragraph');
const changeTextBtn = document.querySelector('#btn-change-text');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('btn-add-item');


// ==========================================
// 2. Modifying Elements & Handling Events
// ==========================================
// We attach listeners using addEventListener('event_type', callback).
changeTextBtn.addEventListener('click', () => {
    targetParagraph.textContent = "🎉 The DOM has been successfully updated!";
    targetParagraph.style.color = "#34d399";
    targetParagraph.style.fontWeight = "bold";
    console.log("Paragraph text and styling modified.");
});

// Adding a new list item
addItemBtn.addEventListener('click', () => {
    const text = itemInput.value.trim();
    if (text === "") return;

    // Create a new li element
    const newLi = document.createElement('li');
    newLi.setAttribute('data-id', Date.now()); // Unique custom attribute
    newLi.innerHTML = `
        <span>${text}</span>
        <button class="btn-delete">Delete</button>
    `;

    // Append to list
    itemList.appendChild(newLi);
    itemInput.value = ""; // Clear input field
    console.log(`Added new item: "${text}"`);
});


// ==========================================
// 3. Event Delegation
// ==========================================
// Definition:
// Event delegation is a technique where we attach a single event listener to a parent element 
// rather than attaching multiple event listeners to individual child elements. 
// It works due to "Event Bubbling" (events bubble up from the target element through its ancestors).
//
// Benefits:
// - Memory efficiency (only one listener instead of many).
// - Dynamic elements: It automatically handles elements added in the future!

itemList.addEventListener('click', (event) => {
    // Get the element that was actually clicked
    const clickedElement = event.target;
    console.log("Clicked target element:", clickedElement);

    // Case A: User clicked the 'Delete' button
    if (clickedElement.classList.contains('btn-delete')) {
        // Find the parent <li> element and remove it
        const parentLi = clickedElement.closest('li');
        const itemName = parentLi.querySelector('span').textContent;
        parentLi.remove();
        console.log(`Deleted item via delegation: "${itemName}"`);
    } 
    // Case B: User clicked the list item text or the list item itself (excluding delete button)
    else {
        const parentLi = clickedElement.closest('li');
        if (parentLi && itemList.contains(parentLi)) {
            // Toggle active style
            parentLi.style.borderColor = parentLi.style.borderColor === 'rgb(59, 130, 246)' 
                ? '#334155' 
                : '#3b82f6';
            console.log(`Toggled selection of item ID: ${parentLi.getAttribute('data-id')}`);
        }
    }
});
