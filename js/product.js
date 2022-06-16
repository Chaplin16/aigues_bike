let card_product = document.querySelector('.card_product');

    bike.forEach(function (element) {
    
            card_product.innerHTML += 
                    `<div class="card">
                        <img class="card-img-top" src="${element.photo}" alt="${element.alt}">
                        <div class="card-body">
                            <h3 class="card-title text-center">${element.title}</h3>
                            <p class="card-text">${element.description}</p>
                            
                        </div>
                    </div>`
    })