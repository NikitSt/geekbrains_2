const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { },
    { },
  ];
  
  const renderGoodsItem = (title = 'No title', price = 0) => {
    return `<div class="goods-item mb-5">
    <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/100" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="row row-cols-lg-2 align-items-baseline">
        <p class="fs-4 fw-bold">${price}$</p>
        <a href="#" class="btn btn-primary">Купить</a>
      </div>
    </div>
  </div>
  </div>
    `;
  };
  
  const renderGoodsList = (list = ['']) => {
    let goodsList = (list.map(item => renderGoodsItem(item.title, item.price))).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  
  renderGoodsList(goods);
 