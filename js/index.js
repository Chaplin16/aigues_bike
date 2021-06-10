let carouselExampleFade = document.getElementById('carouselExampleFade');

bike.forEach(function (element) {

        carouselExampleFade.innerHTML += 
                `
                <div class="carousel-item ${element.id == 1 ? "active" : ""}">
                  <img src="${element.photo}" class="image d-block carousel" alt="${element.alt}">
                </div>
                `
    })
        
