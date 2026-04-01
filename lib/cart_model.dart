import 'package:flutter/material.dart';

class CartModel extends ChangeNotifier {
  final Map<String, Map<String, dynamic>> _items = {};

  Map<String, Map<String, dynamic>> get items => _items;

  void addItem(Map<String, dynamic> dish) {
    final name = dish['name'];

    if (_items.containsKey(name)) {
      _items[name]!['quantity']++;
    } else {
      _items[name] = {
        'price': dish['price'],
        'quantity': 1,
        'image': dish['image'],
      };
    }
    notifyListeners();
  }

  void increaseQuantity(String name) {
    _items[name]!['quantity']++;
    notifyListeners();
  }

  void decreaseQuantity(String name) {
    if (_items[name]!['quantity'] > 1) {
      _items[name]!['quantity']--;
    } else {
      _items.remove(name);
    }
    notifyListeners();
  }

  double get totalPrice {
    double total = 0;

    _items.forEach((key, item) {
      total += item['price'] * item['quantity'];
    });

    return total;
  }

  void clear() {
    _items.clear();
    notifyListeners();
  }
}