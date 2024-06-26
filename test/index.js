// random
// const linkAnh_1 = "./baucua/ga.png";
// const random_1 = document.querySelector(".random_1");
// const srcAnh1 = random_1.getAttribute("src");

// random_1.setAttribute("src", linkAnh_1)

// console.log(srcAnh1)
// ----------------------




// Viết theo kiểu hướng đối tượng ntn đi cho quen, sau này ai cũng viết như này hết
const App = {

    currentClickedIndex: 0,
    maxInterval1: 0,
    maxInterval2: 0,
    maxInterval3: 0,
    resultImg1: "",
    resultImg2: "",
    resultImg3: "",
    intervalArr: [],

    init: function () {
        // code html hoặc viết gì thì viết vào đây
    },

    handleEvent: function () {
        // xử lý logic web, thao tác web thì viết vào đây.

        const _this = this;

        // biến này lấy ra tất cả class là imgItem rồi trả về 1 mảng các thằng tìm đc
        const itemImgs = document.querySelectorAll(".imgItem");

        const btnSpin = document.querySelector(".btn_spin");

        // lọc qua mảng rồi gán cho mỗi thằng event click
        itemImgs.forEach((item, index) => {
            item.onclick = function () {
                !_this.isFullBetImg() && _this.handleClickOnItem(item, index)
            }
        });

        // hàm isFullBetImg để check xem đã full 3 ảnh bầu cua chưa, 
        // đủ thì mới đc chạy hàm handleBtnSpinClick. Để ý dấu "!"
        btnSpin.onclick = function () {
            _this.isFullBetImg() && _this.handleBtnSpinClick();
        }
    },

    handleClickOnItem: function (item, index) {

        const imgSrcFile = item.getAttribute("src");

        const imgDataCount = Number(item.getAttribute("data-clickCount"));

        const imgDataName = item.getAttribute("data-name");

        const itemClickCount = item.parentElement.children[1];

        const dataCounted = imgDataCount + 1;

        if (dataCounted > 3) return;

        this.handleLoadBetImg(imgSrcFile);

        item.setAttribute("data-clickCount", dataCounted)

        itemClickCount.innerHTML = dataCounted;

        console.log("Đã chọn: " + imgDataName);

    },

    isFullBetImg: function () {
        let result = false;

        const bet1SrcFile = document.querySelector("#bet_1").getAttribute("src");

        const bet2SrcFile = document.querySelector("#bet_2").getAttribute("src");

        const bet3SrcFile = document.querySelector("#bet_3").getAttribute("src");

        if (bet1SrcFile && bet2SrcFile && bet3SrcFile) return true;

        return result;
    },

    handleLoadBetImg: function (imgSrcFile = "") {
        const bet1SrcFile = document.querySelector("#bet_1");

        const bet2SrcFile = document.querySelector("#bet_2");

        const bet3SrcFile = document.querySelector("#bet_3");

        if (!bet1SrcFile.getAttribute("src")) {
            // console.log("ko có ảnh");

            bet1SrcFile.setAttribute("src", imgSrcFile);

        } else {

            // console.log("có ảnh");

            if (!bet2SrcFile.getAttribute("src")) {

                bet2SrcFile.setAttribute("src", imgSrcFile);

                // console.log("ko có ảnh");

            } else {

                // console.log("có ảnh");

                if (!bet3SrcFile.getAttribute("src")) {

                    bet3SrcFile.setAttribute("src", imgSrcFile);

                    // console.log("ko có ảnh");

                } else {

                    // console.log("có ảnh");
                }
            }

        }
    },

    handleBtnSpinClick: function () {
        this.randomBetImg()

        console.log("click quay");
    },




    randomBetImg: function () {
        const _this = this;

        const bet1SrcFile = document.querySelector("#bet_1");

        const bet2SrcFile = document.querySelector("#bet_2");

        const bet3SrcFile = document.querySelector("#bet_3");

        const dataImgSrcFiles = [bet1SrcFile, bet2SrcFile, bet3SrcFile];

        const imgs = [
            {
                name: "bầu",
                link: "./baucua/bau.png"
            },
            {
                name: "cá",
                link: "./baucua/ca.png"
            },
            {
                name: "cua",
                link: "./baucua/cua.png"
            },
            {
                name: "gà",
                link: "./baucua/ga.png"
            },
            {
                name: "hiêu",
                link: "./baucua/huou.png"
            },
            {
                name: "tôm",
                link: "./baucua/tom.png"
            },
        ];

        dataImgSrcFiles.forEach((srcFile, index) => {
            _this.intervalArr.push(setInterval(() => {

                // random tu 0 - 5
                let random = Math.floor(Math.random() * imgs.length);


                if (index === 0) {
                    if (_this.maxInterval1 >= 50) {
                        console.log("1 ra: " + _this.resultImg1);
                        clearInterval(_this.intervalArr[0]);
                        return;
                    }

                    _this.resultImg1 = imgs[random].name;

                    _this.maxInterval1 += 1;

                }


                if (index === 1) {
                    if (_this.maxInterval2 >= 75) {
                        console.log("2 ra: " + _this.resultImg2);
                        clearInterval(_this.intervalArr[1]);
                        return;
                    }

                    _this.resultImg2 = imgs[random].name;

                    _this.maxInterval2 += 1;

                }


                if (index === 2) {
                    if (_this.maxInterval3 >= 100) {
                        console.log("3 ra: " + _this.resultImg3);
                        clearInterval(_this.intervalArr[2]);
                        return;
                    }

                    _this.resultImg3 = imgs[random].name;

                    _this.maxInterval3 += 1;
                }



                srcFile.setAttribute("src", imgs[random].link);

            }, 100));
        });


    },

    start: function () {
        this.init();
        this.handleEvent();
    }
}


App.start();
