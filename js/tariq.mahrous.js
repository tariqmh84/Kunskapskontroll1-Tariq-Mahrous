//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Explore other color of products image by click event XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Select products articles

let articles = document.querySelectorAll('main article');

let articleFigure1 = articles[0].firstElementChild;
let articleFigure2 = articles[1].firstElementChild;
let articleFigure3 = articles[2].firstElementChild;


// Create Link to change product's image

let imgNextColor = document.createElement('a');

imgNextColor.href = '#';

imgNextColor.innerHTML = '<i class="fas fa-chevron-circle-right"></i>';

imgNextColor.style.cssText = 'font-size: 1.5rem; position: absolute; top: 50%; right: 5%';

articleFigure1.appendChild(imgNextColor);


// Get product color to change it according to the image

let productImgType = articleFigure1.nextElementSibling.nextElementSibling;



// Array of desired images sources

let imagesArr = ['img/hoodie-ash.png', 'img/hoodie-forrest.png', 'img/hoodie-fire.png'];

let productColors = ['Ash', 'Forrest', 'Fire'];



// Select the desired image to change it

let currentImg = articleFigure1.firstChild;



// click event to change the img 

imgNextColor.addEventListener('click', (e) => {

    changeImage(imagesArr, currentImg);

});



//Assign defult img source

let findSrc = imagesArr[0];



// function to change image src

function changeImage(imgArr, imgSeletor) {


    findSrc = imgSeletor.getAttribute('src');


    let index = imgArr.indexOf(findSrc) + 1;


    if (index == imgArr.length) {

        index = 0

    };

    imgSrc = imgArr[index];

    imgSeletor.src = imgSrc;

    productImgType.innerText = productColors[index];

}



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Add like btn to products and changing their box style  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Create like button

let productLikeBtn = document.createElement('a');

productLikeBtn.href = '#';

productLikeBtn.style.cssText = 'font-size: 1.5rem; position: absolute; top: 5%; right: 5%';

productLikeBtn.innerHTML = '<i class="fas fa-heart"></i>';

articleFigure3.appendChild(productLikeBtn);



// Select the element to add like btn

let articleElement3 = document.querySelector('.art-3');

let textArt = articles[2].lastElementChild.previousElementSibling;



// Eventlistener function to like the item

function changeStyle(param) {

    productLikeBtn.addEventListener('click', (e) => {

        productLikeBtn.style.color = 'red';

        param.style.backgroundColor = '#3c3c3c';

        param.style.color = '#fff';

        param.style.transitionDuration = '0.3s';

        let paramLastChild = param.lastChild.previousSibling;

        paramLastChild.style.boxShadow = '0px 0px 0px 2px #A0A0A0';


        // Change the text when user like the product

        textArt.innerText = 'You have liked this item so the text has been changed';

    });

};

// Call the function

changeStyle(articleElement3);


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Delete Product Element totally XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Add delete btn to delete the product

let productDeleteBtn = document.createElement('a');


productDeleteBtn.href = '#';


productDeleteBtn.style.cssText = 'font-size: 1.2rem; position: absolute; top: 5%; left: 5%';


productDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';


articleFigure3.appendChild(productDeleteBtn);



// Eventlistener function to delete the item

function deleteProduct(param) {

    productDeleteBtn.addEventListener('click', (e) => {

        param.remove();

    });

};


// Calling the delete function

deleteProduct(articleElement3);



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Change background color of products's image by mouse event XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Reusable hover function

function hoverOverEvent(ImgParams, color) {

    ImgParams.addEventListener('mouseover', (e) => {

        ImgParams.style.backgroundColor = color;

        ImgParams.style.transitionDuration = '0.5s';


    });

    ImgParams.addEventListener('mouseout', (e) => {

        ImgParams.style.backgroundColor = '';


    });

}


// Calling hovering function

hoverOverEvent(articleFigure2, 'red');

hoverOverEvent(articleFigure1, 'blue');

hoverOverEvent(articleFigure3, 'green');



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Change background color of nav menu by mouse event XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// get nav elements

let Navbtn = document.querySelectorAll('#header-navigation a');

// Loop through the elments to apply the function on each

for (const iterator of Navbtn) {

    hoverOverEvent(iterator, 'lightgray');

}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Change background color of products buy btn by mouse event XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


let buyButtons = document.querySelectorAll('main button');

for (const iterator of buyButtons) {

    hoverOverEvent(iterator, 'orange');

}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Buy Product button to add list of clicked products XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Create ul element to add buying items

let pickedProductList = document.createElement('ul');

pickedProductList.className = 'choosedList';

let mainBox = document.querySelector('main');


// Function to add bought items

function addProductToList(param) {

    param.addEventListener('click', (e) => {

        mainBox.parentNode.insertBefore(pickedProductList, mainBox.nextSibling);

        let listItem = document.createElement('li');

        listItem.style.border = '1px solid gray';

        listItem.style.padding = '0.3rem 1rem';

        listItem.style.margin = '0.2rem';

        let productHeader = e.target.parentElement.children[1].textContent + '\n' + e.target.parentElement.children[2].textContent;

        listItem.innerText = productHeader;

        pickedProductList.appendChild(listItem);


    });

}

// Looping over buy buttons to apply the function on each one

for (const iterator of buyButtons) {

    addProductToList(iterator);

}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   RESET BUTTON  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



// Create Reset btn to back to original static page

let header = document.querySelector('header');

let resetBtn = document.createElement('a');

resetBtn.href = '#';

resetBtn.innerHTML = '<i class="fas fa-power-off"></i> Reset';

resetBtn.style.cssText = 'font-size: 1rem; color: lightgray; margin: 0 auto; text-decoration:none';

header.insertBefore(resetBtn, header.children[1]);


// Eventlistener to apply reset 

resetBtn.addEventListener('click', function confirmReset(e) {

    // Ask user to confirm the call

    let reset = confirm("Do you really want to reset the page?");

    resetBtn.style.color = 'gray';

    // Back to original

    if (reset) {


        imgNextColor.parentNode.removeChild(imgNextColor);

        articleFigure1.firstChild.src = imagesArr[0];

        productLikeBtn.parentNode.removeChild(productLikeBtn);

        articleElement3.style.backgroundColor = '#fff';

        articleElement3.style.color = '#000';

        articleElement3.lastChild.previousSibling.style.boxShadow = 'none';

        for (const iterator of Navbtn) {

            iterator.addEventListener('mouseover', (e) => {

                iterator.style.background = 'none';

            });
        }

        for (const iterator of buyButtons) {

            iterator.addEventListener('mouseover', (e) => {

                iterator.style.backgroundColor = '#272727';

                iterator.style.boxShadow = 'none';

            });
        }

        articleFigure2.addEventListener('mouseover', (e) => {

            articleFigure2.style.backgroundColor = '';

        });

        articleFigure1.addEventListener('mouseover', (e) => {

            articleFigure1.style.backgroundColor = '';

        });


        for (const iterator of buyButtons) {

            iterator.disabled = true;

        }


        if (document.body.contains(pickedProductList)) {

            pickedProductList.parentNode.removeChild(pickedProductList);

        }


        textArt.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?';


        if (!document.body.contains(articleElement3)) {

            productDeleteBtn.parentNode.removeChild(productDeleteBtn);

            let articleElement2 = document.querySelector('.art-2');

            let cloneElm = articleElement2.cloneNode(true);

            let clonedElm = mainBox.appendChild(cloneElm);

            clonedElm.className = '.art-3';

            clonedElm.childNodes[1].firstChild.src = 'img/hoodie-ocean.png';

        } else {

            productDeleteBtn.parentNode.removeChild(productDeleteBtn);

            articleFigure3.addEventListener('mouseover', (e) => {

                articleFigure3.style.backgroundColor = '';

            });
        }
    }
})


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   Reload PAGE BUTTON  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Create refresh btn to reload the JS events

let reLoadBtn = document.createElement('a');

reLoadBtn.href = '#';

reLoadBtn.innerHTML = '<i class="fas fa-redo-alt"></i> Refresh';

reLoadBtn.style.cssText = 'font-size: 1rem; color: gray; margin: 0 0 0 18rem; text-decoration:none';

header.insertBefore(reLoadBtn, header.children[1]);


reLoadBtn.addEventListener('click', (e) => {

    setTimeout("location.reload(true);", 100);

})
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX THE END XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX