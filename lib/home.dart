import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'cart_model.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController _searchController = TextEditingController();
  String searchText = '';

  // 🔹 Categorised food items
  final Map<String, List<Map<String, dynamic>>> categories = {
    "Starters": [
      {"name": "French Fries", "price": 100, "image": "assets/images/french_fries.jpg"},
      {"name": "Manchurian", "price": 160, "image": "assets/images/manchurian.jpg"},
      {"name": "Fish and Chips", "price": 220, "image": "assets/images/fish_and_chips.jpg"},
    ],
    "Main Course": [
      {"name": "Burger", "price": 120, "image": "assets/images/burger.jpg"},
      {"name": "Pizza", "price": 250, "image": "assets/images/pizza.jpg"},
      {"name": "Pasta", "price": 180, "image": "assets/images/pasta.jpg"},
      {"name": "Sandwich", "price": 90, "image": "assets/images/sandwich.jpg"},
      {"name": "Fried Rice", "price": 150, "image": "assets/images/fried_rice.jpg"},
      {"name": "Noodles", "price": 140, "image": "assets/images/noodles.jpg"},
      {"name": "Biryani", "price": 220, "image": "assets/images/biryani.jpg"},
      {"name": "Dosa", "price": 80, "image": "assets/images/dosa.jpg"},
      {"name": "Chicken Curry", "price": 200, "image": "assets/images/chicken_curry.jpg"},
      {"name": "Paneer Butter Masala", "price": 190, "image": "assets/images/paneer_butter_masala.jpg"},
      {"name": "Grilled Chicken", "price": 250, "image": "assets/images/grilled_chicken.jpg"},
    ],
    "Snacks": [
      {"name": "Tacos", "price": 140, "image": "assets/images/tacos.jpg"},
      {"name": "Wraps", "price": 120, "image": "assets/images/wraps.jpg"},
      {"name": "Sushi", "price": 300, "image": "assets/images/sushi.jpg"},
      {"name": "Salad", "price": 130, "image": "assets/images/salad.jpg"},
    ],
    "Desserts": [
      {"name": "Ice Cream", "price": 90, "image": "assets/images/ice_cream.jpg"},
      {"name": "Chocolate Cake", "price": 150, "image": "assets/images/chocolate_cake.jpg"},
      {"name": "Pancakes", "price": 130, "image": "assets/images/pancakes.jpg"},
      {"name": "Waffles", "price": 140, "image": "assets/images/waffles.jpg"},
      {"name": "Cupcakes", "price": 80, "image": "assets/images/cupcakes.jpg"},
      {"name": "Donuts", "price": 70, "image": "assets/images/donuts.jpg"},
      {"name": "Muffins", "price": 90, "image": "assets/images/muffins.jpg"},
      {"name": "Brownies", "price": 110, "image": "assets/images/brownies.jpg"},
    ],
    "Beverages": [
      {"name": "Tea", "price": 50, "image": "assets/images/tea.jpg"},
      {"name": "Coffee", "price": 70, "image": "assets/images/coffee.jpg"},
      {"name": "Lemonade", "price": 60, "image": "assets/images/lemonade.jpg"},
      {"name": "Smoothie", "price": 110, "image": "assets/images/smoothie.jpg"},
    ],
  };

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartModel>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text("Food Menu"),
        centerTitle: true,
      ),

      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => Navigator.pushNamed(context, "/cart"),
        icon: const Icon(Icons.shopping_cart),
        label: Text("Cart (${cart.items.length})"),
      ),

      body: Column(
        children: [
          // 🔍 Search Bar
          Padding(
            padding: const EdgeInsets.all(12),
            child: TextField(
              controller: _searchController,
              onChanged: (value) {
                setState(() {
                  searchText = value.toLowerCase();
                });
              },
              decoration: InputDecoration(
                hintText: "Search food...",
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),
          ),

          // 📋 Food List
          Expanded(
            child: ListView(
              children: categories.entries.map((entry) {
                final filteredItems = entry.value.where((item) {
                  return item["name"]
                      .toLowerCase()
                      .contains(searchText);
                }).toList();

                if (filteredItems.isEmpty) return const SizedBox();

                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Category title
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 16, vertical: 8),
                      child: Text(
                        entry.key,
                        style: const TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                    ),

                    // Items
                    ...filteredItems.map((dish) {
                      return Card(
                        margin: const EdgeInsets.symmetric(
                            horizontal: 12, vertical: 6),
                        child: ListTile(
                          leading: ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: Image.asset(
                              dish["image"],
                              width: 60,
                              height: 60,
                              fit: BoxFit.cover,
                            ),
                          ),
                          title: Text(
                            dish["name"],
                            style: const TextStyle(fontWeight: FontWeight.bold),
                          ),
                          subtitle: Text("₹${dish["price"]}"),
                          trailing: IconButton(
                            icon: const Icon(Icons.add_circle,
                                color: Colors.green),
                            onPressed: () {
                              cart.addItem(dish);
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content:
                                      Text('${dish["name"]} added to cart'),
                                  duration: const Duration(seconds: 1),
                                ),
                              );
                            },
                          ),
                        ),
                      );
                    }).toList(),
                  ],
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}