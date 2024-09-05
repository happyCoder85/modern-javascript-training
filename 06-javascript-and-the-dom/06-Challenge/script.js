// Challenge is to add class error to any p tag that has error in the innerText. And the same for success.

const paragraphs = document.querySelectorAll('p');

// Using innerText
// paragraphs.forEach(paragraph => {
//     if (paragraph.innerText.includes('error')) {
//         paragraph.classList.add('error');
//     }
//     if (paragraph.innerText.includes('success')) {
//         paragraph.classList.add('success');
//     }
// });

// Using textContent
paragraphs.forEach(paragraph => {
    if (paragraph.textContent.includes('error')) { // Now even if the error is hidden in the HTML, it will still be found
        paragraph.classList.add('error');
    }
    if (paragraph.textContent.includes('success')) { // Now even if the error is hidden in the HTML, it will still be found
        paragraph.classList.add('success');
    }
});

// What if we want to toggle a class? If it's on, turn it off. If it's off, turn it on.
