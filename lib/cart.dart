import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'cart_model.dart';

class CartPage extends StatelessWidget {
  const CartPage({super.key});

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartModel>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text("Your Cart"),
        centerTitle: true,
      ),

      body: cart.items.isEmpty
          ? const Center(
              child: Text(
                "Your cart is empty 🛒",
                style: TextStyle(fontSize: 18),
              ),
            )
          : Column(
              children: [
                // CART ITEMS
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.all(12),
                    children: cart.items.entries.map((entry) {
                      final name = entry.key;
                      final item = entry.value;

                      return Card(
                        margin: const EdgeInsets.symmetric(vertical: 8),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(12),
                          child: Row(
                            children: [
                              // IMAGE
                              ClipRRect(
                                borderRadius: BorderRadius.circular(8),
                                child: Image.asset(
                                  item["image"],
                                  width: 55,
                                  height: 55,
                                  fit: BoxFit.cover,
                                ),
                              ),

                              const SizedBox(width: 12),

                              // DETAILS
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      name,
                                      style: const TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    const SizedBox(height: 6),
                                    Text(
                                      "₹${item["price"]} × ${item["quantity"]} = ₹${item["price"] * item["quantity"]}",
                                      style: TextStyle(
                                        color: Colors.grey.shade700,
                                      ),
                                    ),
                                  ],
                                ),
                              ),

                              // QUANTITY
                              Row(
                                children: [
                                  IconButton(
                                    icon: const Icon(Icons.remove_circle),
                                    onPressed: () {
                                      cart.decreaseQuantity(name);
                                    },
                                  ),
                                  Text(
                                    item["quantity"].toString(),
                                    style: const TextStyle(fontSize: 16),
                                  ),
                                  IconButton(
                                    icon: const Icon(
                                      Icons.add_circle,
                                      color: Colors.green,
                                    ),
                                    onPressed: () {
                                      cart.increaseQuantity(name);
                                    },
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                ),

                // ESTIMATED DELIVERY
                Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                  child: Row(
                    children: const [
                      Icon(Icons.delivery_dining, color: Colors.green),
                      SizedBox(width: 8),
                      Text(
                        "Estimated delivery: 30–40 mins",
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                ),

                // SLIDE TO PAY
                SlideToPaySection(cart: cart),
              ],
            ),
    );
  }
}

/// 🔥 SLIDE TO PAY WIDGET
class SlideToPaySection extends StatefulWidget {
  final CartModel cart;
  const SlideToPaySection({super.key, required this.cart});

  @override
  State<SlideToPaySection> createState() => _SlideToPaySectionState();
}

class _SlideToPaySectionState extends State<SlideToPaySection> {
  double dragPosition = 0;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width - 32;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: const BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            blurRadius: 8,
            color: Colors.black12,
          ),
        ],
      ),
      child: Column(
        children: [
          // TOTAL
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                "Total",
                style: TextStyle(fontSize: 18),
              ),
              Text(
                "₹${widget.cart.totalPrice.toStringAsFixed(0)}",
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),

          const SizedBox(height: 14),

          // SLIDER
          Stack(
            children: [
              Container(
                height: 56,
                width: double.infinity,
                decoration: BoxDecoration(
                  color: Colors.grey.shade300,
                  borderRadius: BorderRadius.circular(30),
                ),
                alignment: Alignment.center,
                child: const Text(
                  "Slide to Pay",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),

              Positioned(
                left: dragPosition,
                child: GestureDetector(
                  onHorizontalDragUpdate: (details) {
                    setState(() {
                      dragPosition += details.delta.dx;
                      if (dragPosition < 0) dragPosition = 0;
                      if (dragPosition > width - 56) {
                        dragPosition = width - 56;
                      }
                    });
                  },
                  onHorizontalDragEnd: (_) {
                    if (dragPosition > width - 70) {
                      // SUCCESS
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text("Order placed successfully 🎉"),
                        ),
                      );
                      widget.cart.clear();
                      setState(() => dragPosition = 0);
                    } else {
                      setState(() => dragPosition = 0);
                    }
                  },
                  child: Container(
                    height: 56,
                    width: 56,
                    decoration: const BoxDecoration(
                      color: Colors.green,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.arrow_forward,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}