// fetch("https://api.unsplash.com/photos/?client_id=oSTKejuGCp4rnGMMbKpo2F9UTPYlULwU2MRXPHO2vc8")
//     .then((res) => {
//         const data = res.json();
//         return data;

//     })
//     .then((data) => {
//         console.log(data);
//     });


$.ajax({
    type: "GET",
    url: "https://api.unsplash.com/photos/?client_id=oSTKejuGCp4rnGMMbKpo2F9UTPYlULwU2MRXPHO2vc8",
    data: "data",
    dataType: "json",
    success: function(res) {
        console.log(res);
        // console.log(...res);
        let data = [...res]; //複製出res的這組陣列出來
        console.log(data[0].id);
    },
    error: function(err) {
        console.log(err);
    }
});


let works = [{
        title: '底片相機',
        description: '帶你穿越過去的神奇物件',
        cover: 'https://images.unsplash.com/photo-1649224059270-6a2812fe87f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTE5OTc1MA&ixlib=rb-1.2.1&q=80&w=1080'
    },
    {
        title: '精彩童話',
        description: '有趣又好玩的故事等你喔',
        cover: 'https://images.unsplash.com/photo-1650162902048-ce87f51cb86e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=0&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTIwMDA4Mw&ixlib=rb-1.2.1&q=80&w=800'
    },
    {
        title: '靜靜的',
        description: '靜靜地待著就很好',
        cover: 'https://images.unsplash.com/photo-1613673719475-70ba1f644716?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=0&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTIwMDIxMQ&ixlib=rb-1.2.1&q=80&w=800'
    },
    {
        title: '滾動的世界',
        description: '唯一不變的事就是變化',
        cover: 'https://images.unsplash.com/photo-1652987543455-ec604a99c397?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'
    },
    {
        title: '左邊拍拍',
        description: '左邊拍拍 右邊拍拍',
        cover: 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
    }
]

let vm = new Vue({
    el: '#app',
    data: {
        works: works,
        now_index: 0,
        span: 930
    },
    computed: {
        computed_left() {
            let result = { 'left': (-this.now_index * this.span) + 'px' };
            // console.log(result);
            return result;
        }
    },
    methods: {
        delta(d) {
            this.now_index = (this.now_index + d + this.works.length) % this.works.length;
        },
        bg_css(url) {
            return {
                "background-image": "url(" + url + ")" //這裡帶入參數前後要用+ 
            }
        }
    }
})