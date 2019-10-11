var app = new Vue({
    el: "#main",
    data: {
        data: {},
        title: "",
        songs: [],
        loaded: false,
    },
    created: function () {
        this.getData();
    },
    methods: {

        getData: function () {
            var fetchConfig =
                fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json", {
                    method: "GET",
                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }).then(function (json) {
                    app.loaded = true;
                    app.data = json;
                    app.title = app.data.feed.title.label;
                    app.songs = app.data.feed.entry;
                })
                .catch(function (error) {
                    return error
                })
        },
        filterDate: function (date) {
            let newDate = new Date(date);
            let filteredDate = newDate.toDateString();
            return filteredDate;

        },

    },
})
