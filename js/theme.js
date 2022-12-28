let dataRenderHome=[
    {
      image:"../image.story/story27.jpg",
      content:"On The Ho Chi Minh Trail",
      price:"130.000 VNĐ",
      icon:"../icon/Icon1",
      id:0,
      quantity:1,
  
    },
    {
      image:"../image.story/story43.jpg",
      content:"Một cuốn sách trầm cảm - macmart",
      price:"120.000 VNĐ",
      icon:"../icon/Icon1",
      id:1,
      quantity:1,
  
    },
    {
      image:"../image.story/story28.jpg",
      content:"THE VIETNAM WAR",
      price:"98.000 VNĐ",
      icon:"../icon/Icon1",
      id:2,
      quantity:1,
  
    },
    {
      image:"../image.story/story29.jpg",
      content:"SAIGON Anthony Grey ",
      price:"112.000 VNĐ",
      icon:"../icon/Icon1",
      id:3,
      quantity:1,
  
    },
    {
      image:"../image.story/story30.jpg",
      content:"Tắt đèn - Ngô Tất Tố",
      price:"98.000 VNĐ",
      icon:"../icon/Icon1",
      id:4,
      quantity:1,
  
    },
    {
      image:"../image.story/story31.jpg",
      content:"Trao cho nhau cuộc đời",
      price:"110.000 VNĐ",
      icon:"../icon/Icon1",
      id:5,
      quantity:1,
  
    },
    {
      image:"../image.story/story32.jpg",
      content:"Truyện kiều - Nguyễn Du",
      price:"120.000 VNĐ",
      icon:"../icon/Icon1",
      id:6,
      quantity:1,
  
    },
    {
      image:"../image.story/story33.jpg",
      content:"Hai đứa trẻ - Thạch Lam",
      price:"98.000 VNĐ",
      icon:"../icon/Icon1",
      id:7,
      quantity:1,
  
    },
    
  ]
  function myDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    function myDropdown2(){
      document.getElementById("myDropdown2").classList.toggle("show");
    }
  
    window.onclick = function(e) {
     /*  if (!e.target.maches('dropbtn2')) {
        var myDropdown2 = document.getElementById("myDropdown2");
        if (myDropdown2.classList.contains('show')) {
          myDropdown2.classList.remove('show');
        }
      } */
    }
   
    function renderListProducts(){
      let data='';
  
  
      for (let i = 0; i<dataRenderHome.length; i++) {
        data+=`
        <div class="main-product">
        <div class="img-product">
          <img class="img-prd" src="${dataRenderHome[i].image}" alt="" width="150px" height="200px" />
        </div>
        <hr class="hr2" width="52%">
        <div class="content-product">
          <h5 class="content-product-3">${dataRenderHome[i].content}</h5>
          <div class="content-product-deltals" style="margin-left: -70px">
            <div class="icon2">
              <span class="money">${dataRenderHome[i].price}</span>
              <a href=""><i class="fa-solid fa-hand-holding-heart"></i></a>
            </div>
            <button type="button" class="btn btn-cart" id="showProduct"><i onclick="addToCart(${i})" class="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>
        `
      }
      document.getElementById("category").innerHTML= data;
    }
    renderListProducts();
    // FUNCTION HIỂN THỊ GIỎ HÀNG 
    function addToCart(id){
        console.log("ID",id);
        let number=0;
        let listCart= JSON.parse(localStorage.getItem("listCart"));
        if(listCart==null){
          listCart=[];
          listCart.push(dataRenderHome[id]);
          localStorage.setItem("listCart",JSON.stringify(listCart));
        }
        else{
          let flag=false;
          for (let i = 0; i < listCart.length; i++) {
  
            if(listCart[i].id==id){
              flag=true;
              number=i;
              break;
            }else{
              flag=false;
            }
          }
          if(flag==true){
            listCart[number].quantity=++listCart[number].quantity;
            localStorage.setItem("listCart",JSON.stringify(listCart));
            console.log("sản phẩm đã có trong giỏ hàng!");
          }else{
            listCart.push(dataRenderHome[id]);
            localStorage.setItem("listCart",JSON.stringify(listCart));
          }
          // listCart.push(dataRenderHome[id]);
          // localStorage.setItem("listCart",JSON.stringify(listCart));
        }
    }
    function renderCart(){
        let listCart= JSON.parse(localStorage.getItem("listCart"));

        let data='';
        for (let i = 0; i < listCart.length; i++) {
          data+=`
                <div class="product">
                    <img src="${listCart[i].image}" alt="" width="100px" height="300px">
                    <p>${listCart[i].content}</p>
                    <p> Giá sản phẩm / 1 : ${listCart[i].price} </p>
                    <label for=""> Số lượng: </label>
                    <input type="text" value="${listCart[i].quantity}">
                </div>
          `
            
        }
        document.getElementById("renderListCart").innerHTML=data;
    }
    renderCart();