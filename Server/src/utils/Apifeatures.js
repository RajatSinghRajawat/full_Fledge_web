class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    
    search() {
        const keyword = this.queryStr.keyword
            ? {
                productName: {
                      $regex: this.queryStr.keyword,
                      $options: 'i', // Case-insensitive search
                  },
                  rating:{
                    $regex: this.queryStr.rating
                  }
              }
            : {};

        console.log('Search Query:', keyword);

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };

        // Fields to exclude
        const removeFields = ['keyword', 'page', 'limit'];
        removeFields.forEach((key) => delete queryCopy[key]);

        // Handling numeric filters (e.g., price, ratings)
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(
            /\b(gt|gte|lt|lte)\b/g,
            (match) => `$${match}`
        );

        this.query = this.query.find(JSON.parse(queryStr));
        console.log('Filter Query:', JSON.parse(queryStr));
        return this;
    }

    pagination(resultPage){
        const currentPage = Number(this.queryStr.page) ||1;

        const skip = resultPage* (currentPage - 1);

        this.query = this.query.limit(resultPage).skip(skip);
        return this
    }
}

module.exports = ApiFeatures