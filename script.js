Vue.component('star-rating', VueStarRating.default);
let app = new Vue({
    el: '#app',
    data: {
        number: '2',
        subNum: '',
        min: '52764',
        max: '52966',
        items: [],
        message: '',
        show: 'all',
        current: {
            strMeal: '',
            strMealThumb: '',
            strInstructions: '',
            strIngredient1: '',
            strIngredient2: '',
            strIngredient3: '',
            strIngredient4: '',
            strIngredient5: '',
            strIngredient6: '',
            strIngredient7: '',
            strIngredient8: '',
            strIngredient9: '',
            strIngredient10: '',
            strIngredient11: '',
            strIngredient12: '',
            strIngredient13: '',
            strIngredient14: '',
            strIngredient15: '',
            strIngredient16: '',
            strIngredient17: '',
            strIngredient18: '',
            strIngredient19: '',
            strIngredient20: '',
        },
        loading: true,
        addedName: '',
        addedComment: '',
        addtime: moment().format('LL'),
        comments: {},
        ratings: {},
    },
    created() {
        this.meals();
        this.getItems();
    },

    computed: {
        rating(){
            if (this.ratings[this.number] === undefined)
            return ;
            return this.ratings[this.number].sum / this.ratings[this.number].total;
        }
    },
    watch: {
        number() {
         
            this.meals();
        },
    },      
    methods: {
        async meals() {
            try {
                this.loading = true;
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.number);
                this.current.strMeal = response.data.meals[0]['strMeal'];
                this.current.strMealThumb = response.data.meals[0]['strMealThumb'];
                this.current.strInstructions = response.data.meals[0]['strInstructions'];
                this.current.strIngredient1 = response.data.meals[0]['strIngredient1'] + ' ' + response.data.meals[0]['strMeasure1'];
                this.current.strIngredient2 = response.data.meals[0]['strIngredient2'] + ' ' + response.data.meals[0]['strMeasure2'];
                this.current.strIngredient3 = response.data.meals[0]['strIngredient3'] + ' ' + response.data.meals[0]['strMeasure3'];
                this.current.strIngredient4 = response.data.meals[0]['strIngredient4'] + ' ' + response.data.meals[0]['strMeasure4'];
                this.current.strIngredient5 = response.data.meals[0]['strIngredient5'] + ' ' + response.data.meals[0]['strMeasure5'];
                this.current.strIngredient6 = response.data.meals[0]['strIngredient6'] + ' ' + response.data.meals[0]['strMeasure6'];
                this.current.strIngredient7 = response.data.meals[0]['strIngredient7'] + ' ' + response.data.meals[0]['strMeasure7'];
                this.current.strIngredient8 = response.data.meals[0]['strIngredient8'] + ' ' + response.data.meals[0]['strMeasure8'];
                this.current.strIngredient9 = response.data.meals[0]['strIngredient9'] + ' ' + response.data.meals[0]['strMeasure9'];
                this.current.strIngredient10 = response.data.meals[0]['strIngredient10'] + ' ' + response.data.meals[0]['strMeasure10'];
                this.current.strIngredient11 = response.data.meals[0]['strIngredient11'] + ' ' + response.data.meals[0]['strMeasure11'];
                this.current.strIngredient12 = response.data.meals[0]['strIngredient12'] + ' ' + response.data.meals[0]['strMeasure12'];
                this.current.strIngredient13 = response.data.meals[0]['strIngredient13'] + ' ' + response.data.meals[0]['strMeasure13'];
                this.current.strIngredient14 = response.data.meals[0]['strIngredient14'] + ' ' + response.data.meals[0]['strMeasure14'];
                this.current.strIngredient15 = response.data.meals[0]['strIngredient15'] + ' ' + response.data.meals[0]['strMeasure15'];
                this.current.strIngredient16 = response.data.meals[0]['strIngredient16'] + ' ' + response.data.meals[0]['strMeasure16'];
                this.current.strIngredient17 = response.data.meals[0]['strIngredient17'] + ' ' + response.data.meals[0]['strMeasure17'];
                this.current.strIngredient18 = response.data.meals[0]['strIngredient18'] + ' ' + response.data.meals[0]['strMeasure18'];
                this.current.strIngredient19 = response.data.meals[0]['strIngredient19'] + ' ' + response.data.meals[0]['strMeasure19'];
                this.current.strIngredient20 = response.data.meals[0]['strIngredient20'] + ' ' + response.data.meals[0]['strMeasure20'];
                this.loading = false;
                this.number = response.data.meals[0]['idMeal'];
            } catch (error) {
                this.number = this.getRandom(this.min, this.max);
            }
        },
       async getItems() {
            try {
              const response = await axios.get("/api/items");
              this.items = response.data;
            } catch (error) {
              console.log(error);
            }
          },
          async addItem() {
            try {
              const response = await axios.post("/api/items", {
                text: this.text,
                completed: false
              });
              this.text = "";
              this.getItems();
            } catch (error) {
              console.log(error);
            }
          },
        
        previousComic() {
            this.number = this.subNum + 1;
            console.log(this.number);
        },
        nextComic() {
            this.subNum = this.number - 1;
            ++this.number;
        },
        randomComic() {
            this.subNum = this.number - 1;
            this.number = this.getRandom(this.min, this.max);
        },
        getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
        },
        addComment() {
            if (!(this.number in this.comments)) {
                Vue.set(app.comments, this.number, new Array);
            }
            this.comments[this.number].push({
                author: this.addedName,
                text: this.addedComment,
                time: this.addtime
            });
            this.addedName = '';
            this.addedComment = '';
        },
        setRating(rating) {
            if (!(this.number in this.ratings))
                Vue.set(this.ratings, this.number, {
                    sum: 0,
                    total: 0
                });
            this.ratings[this.number].sum += rating;
            this.ratings[this.number].total += 1;

        },
    }
});