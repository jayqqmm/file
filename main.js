document.getElementById("textSubmit").addEventListener("click", function (event) {
            event.preventDefault();
            const value = document.getElementById('query').value
            if (value == "")
                return;
            const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + value;
            fetch(url)
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    for (let i = 0; i < json.meals.length; i++) {
                        results += "<h1>" + json.meals[i].strMeal + "</h1>";
                        results += "<img src=" + json.meals[i].strMealThumb + ">";
                        const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + json.meals[i].idMeal;

                        fetch(url)
                            .then(function (response) {
                                    return response.json();
                                }
                                .then(function (json) {
                                    for (let i = 0; i < json.meals.length; i++) {
                                        results += "<h2>" + json.meals[i].strIngredient1 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure1 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient2 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure2 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient3 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure3 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient4 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure4 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient5 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure5 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient6 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure6 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient7 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure7 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient8 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure8 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient9 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure9 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient10 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure10 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient11 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure11 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient12 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure12 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient13 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure13 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient14 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure14 + " | </h2>";
                                        results += "<h2>" + json.meals[i].strIngredient15 + "</h2>";
                                        results += "<h2>" + json.meals[i].strMeasure15 + " | </h2>";

                                        results += "<a href=" + json.meal[i].strYoutube + ">Look up the video</a>";

                                    }
                                }) document.getElementById("results").innerHTML = results;;
                            });;
                });;
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# ^ C
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano style.css
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano main.js
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# cd..
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www#
            cd html /
                root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / html# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / html# cd.. / lab1.youngld.com /
                root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab1.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab1.youngld.com# cd.. / lab2.youngld.com /
                root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# nano index.html
            root @ubuntu - s - 1 vcpu - 1 gb - sfo2 - 01: /var/www / lab2.youngld.com# cat main.js
            document.getElementById("textSubmit").addEventListener("click", function (event) {
                event.preventDefault();
                const url = "https://www.themealdb.com/api/json/v1/1/random.php";
                fetch(url)
                    .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        for (let i = 0; i < json.meals.length; i++) {
                            results += "<h1>" + json.meals[i].strMeal + "</h1>";
                            results += "<img src=" + json.meals[i].strMealThumb + ">";
                            results += "<h2>" + json.meals[i].strIngredient1 + " " + json.meals[i].strMeasure1 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient2 + " " + json.meals[i].strMeasure2 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient3 + " " + json.meals[i].strMeasure3 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient4 + " " + json.meals[i].strMeasure4 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient5 + " " + json.meals[i].strMeasure5 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient6 + " " + json.meals[i].strMeasure6 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient7 + " " + json.meals[i].strMeasure7 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient8 + " " + json.meals[i].strMeasure8 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient9 + " " + json.meals[i].strMeasure9 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient10 + " " + json.meals[i].strMeasure10 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient11 + " " + json.meals[i].strMeasure11 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient12 + " " + json.meals[i].strMeasure12 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient13 + " " + json.meals[i].strMeasure13 + "</h2>";
                            results += "<h2>" + json.meals[i].strIngredient14 + " " + json.meals[i].strMeasure14 + "</h2>";
                            results += "<a href=" + json.meals[i].strYoutube + ">Click the link to see how to cook it</a>";
                        }
                        document.getElementById("results").innerHTML = results;;
                        document.getElementById("results").style.color = "#C40233";;
                        document.getElementById("results").style.backgroundColor = "white";;
                    });;
            });;