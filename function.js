 // Inicialização do carrinho
 let cart = [];

 // Função para adicionar ao carrinho
 function addToCart(productName, price) {
   // Cria um item no carrinho
   const item = { name: productName, price: price };
   cart.push(item);

   // Exibe uma mensagem de confirmação
   alert(`${productName} foi adicionado ao carrinho por R$ ${price.toFixed(2)}.`);

   // Atualiza o contador do carrinho
   updateCartCount();
 }

 // Função para atualizar o contador do carrinho
 function updateCartCount() {
   const cartCount = document.getElementById('cart-count');
   cartCount.textContent = cart.length;
 }

 // Exibe o conteúdo do carrinho ao clicar no link do carrinho
 document.getElementById('cart-link').addEventListener('click', function() {
   let cartContent = 'Itens no Carrinho:\n';
   let total = 0;

   cart.forEach(item => {
     cartContent += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
     total += item.price;
   });

   cartContent += `\nTotal: R$ ${total.toFixed(2)}`;
   alert(cartContent);
 });