// Datos de los productos con precios actualizados
        const products = [
            {
                id: 1,
                name: "TRALALITA TRALALA",
                image: "https://static.wikia.nocookie.net/stealabr/images/1/15/Tralalita.png/revision/latest?cb=",
                price: 2000
            },
            {
                id: 2,
                name: "TRALALERO TRALALA",
                image: "https://static.wikia.nocookie.net/stealabr/images/1/16/TralaleroTralala.png/revision/latest?cb=",
                price: 2000
            },
            {
                id: 3,
                name: "LOS BOMBINITOS",
                image: "https://static.wikia.nocookie.net/stealabr/images/1/16/Alvin_and_the_chipmunks.png/revision/latest?cb=",
                price: 4000
            },
            {
                id: 4,
                name: "LOS COCODRILITOS",
                image: "https://tr.rbxcdn.com/180DAY-5f80d101723edef6ddda7aeda132dee8/420/420/BackAccessory/Webp/noFilter",
                price: 2500
            },
            {
                id: 5,
                name: "LOS ORCALITOS",
                image: "https://static.wikia.nocookie.net/stealabr/images/2/27/Los_orcalitos.png/revision/latest?cb=",
                price: 6000
            },
            {
                id: 6,
                name: "JOB JOB JOB SAHUR",
                image: "https://static.wikia.nocookie.net/stealabr/images/0/03/Job.webp/revision/latest?cb=",
                price: 10000
            },
            {
                id: 7,
                name: "MATEO",
                image: "https://static.wikia.nocookie.net/stealabr/images/7/7d/Matteofr.png/revision/latest?cb=",
                price: 3000
            },
            {
                id: 8,
                name: "PAKRAHMATMAMAT",
                image: "https://static.wikia.nocookie.net/stealabr/images/e/e7/Pakrah.png/revision/latest?cb=",
                price: 3000
            },
            {
                id: 9,
                name: "LA VACA SATURNO SATURNITA",
                image: "https://images.cults3d.com/sc1lg1j6HDg5yTcrRX172eYVYxE=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/13440098/illustration-file/7ad3e540-865e-4ccb-bcff-b8380a99c160/vaca-saturno.webp",
                price: 5000
            }
        ];

        let currentSection = 'catalog'; // 'catalog' o 'purchase'

        let selectedProduct = null;

        // Generar productos dinámicamente
        function generateProducts() {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';

            products.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card bg-gradient-to-br from-purple-800 to-blue-800 rounded-3xl p-6 text-center border-4 border-purple-500 hover:border-yellow-400 bounce-in';
  
                
                productCard.innerHTML = `
                    <div class="mb-4">
                        <img src="${product.image}" alt="${product.name}" 
                             class="w-32 h-32 mx-auto rounded-2xl border-4 border-yellow-400 object-cover float-animation"
                             onerror="this.src=''; this.alt='Imagen no disponible'; this.style.display='none';">
                    </div>
                    <h3 class="text-xl font-black text-yellow-300 mb-4 min-h-[3rem] flex items-center justify-center">
                        ${product.name}
                    </h3>
                    <div class="space-y-3">
                        <div class="text-2xl font-black text-green-400">💰 $${product.price.toLocaleString()} COP</div>
                        <button onclick="showPurchase(${product.id})" 
                                class="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl pulse-glow transform hover:scale-105 transition-all duration-300">
                            🛒 COMPRAR AHORA
                        </button>
                    </div>
                `;
                
                grid.appendChild(productCard);
            });
        }

        // Mostrar sección de catálogo
        function showCatalog() {
            document.getElementById('catalog-section').classList.remove('hidden');
            document.getElementById('purchase-section').classList.add('hidden');
            document.getElementById('order-confirmation-section').classList.add('hidden');
            currentSection = 'catalog';
            
            // Scroll suave al catálogo
            document.getElementById('catalog-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Mostrar sección de compra
        function showPurchase(productId) {
            selectedProduct = products.find(p => p.id === productId);
            if (!selectedProduct) return;

            // Actualizar información del producto en la sección de compra
            const productInfo = document.getElementById('purchase-product-info');
            productInfo.innerHTML = `
                <img src="${selectedProduct.image}" alt="${selectedProduct.name}" 
                     class="w-32 h-32 mx-auto rounded-2xl mb-4 border-4 border-yellow-400 float-animation"
                     onerror="this.src=''; this.alt='Imagen no disponible'; this.style.display='none';">
                <h3 class="text-2xl font-bold text-yellow-300 mb-2">${selectedProduct.name}</h3>
                <p class="text-3xl font-black text-green-400">💰 $${selectedProduct.price.toLocaleString()} COP</p>
            `;

            // Cambiar secciones
            document.getElementById('catalog-section').classList.add('hidden');
            document.getElementById('purchase-section').classList.remove('hidden');
            currentSection = 'purchase';
            
            // Scroll suave a la sección de compra
            document.getElementById('purchase-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Mostrar confirmación del pedido
        function showOrderConfirmation(order) {
            // Llenar los detalles del pedido
            const orderDetails = document.getElementById('order-details');
            orderDetails.innerHTML = `
                <h3 class="text-2xl font-bold text-yellow-300 mb-4 text-center">📋 DETALLES DEL PEDIDO</h3>
                <div class="space-y-3 text-lg">
                    <div class="flex justify-between">
                        <span class="text-gray-300">📅 Fecha:</span>
                        <span class="text-white font-bold">${order.date}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-300">🕐 Hora:</span>
                        <span class="text-white font-bold">${order.time}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-300">🎮 Producto:</span>
                        <span class="text-white font-bold">${order.product}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-300">💰 Precio:</span>
                        <span class="text-green-400 font-bold text-xl">$${order.price.toLocaleString()} COP</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-300">👤 Usuario Roblox:</span>
                        <span class="text-white font-bold">${order.robloxUser}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-300">🆔 ID Pedido:</span>
                        <span class="text-purple-400 font-bold">#${order.id.toString().slice(-6)}</span>
                    </div>
                </div>
            `;
            
            // Cambiar a la sección de confirmación
            document.getElementById('catalog-section').classList.add('hidden');
            document.getElementById('purchase-section').classList.add('hidden');
            document.getElementById('order-confirmation-section').classList.remove('hidden');
            
            // Scroll suave a la confirmación
            document.getElementById('order-confirmation-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Manejar envío del formulario
        document.getElementById('purchase-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const robloxName = document.getElementById('roblox-name').value.trim();
            
            if (!robloxName || !selectedProduct) return;

            // Preparar datos del pedido con fecha y hora exacta
            const now = new Date();
            const currentDate = now.toLocaleDateString('es-CO');
            const currentTime = now.toLocaleTimeString('es-CO', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
            
            // Crear objeto del pedido
            const orderObj = {
                id: Date.now(),
                date: currentDate,
                time: currentTime,
                product: selectedProduct.name,
                price: selectedProduct.price,
                robloxUser: robloxName,
                timestamp: now.getTime()
            };

            // Mostrar confirmación del pedido
            showOrderConfirmation(orderObj);
            
            // Limpiar formulario
            document.getElementById('purchase-form').reset();
        });



        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            generateProducts();
        });
