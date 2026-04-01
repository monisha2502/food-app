import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'profile_model.dart';
import 'cart_model.dart';
import 'login.dart';
import 'edit_profile.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    final profile = context.watch<ProfileModel>();

    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
        centerTitle: true,
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // 🔵 Profile Header
          Container(
            padding: const EdgeInsets.symmetric(vertical: 30),
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.deepPurple, Colors.deepPurpleAccent],
              ),
            ),
            child: Column(
              children: [
                const CircleAvatar(
                  radius: 45,
                  backgroundColor: Colors.white,
                  child: Icon(
                    Icons.person,
                    size: 50,
                    color: Colors.deepPurple,
                  ),
                ),
                const SizedBox(height: 12),
                Text(
                  profile.name,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  profile.email,
                  style: const TextStyle(color: Colors.white70),
                ),
              ],
            ),
          ),

          const SizedBox(height: 8),

          // ✏️ Edit Profile
          ListTile(
            leading: const Icon(Icons.edit),
            title: const Text("Edit Profile"),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => const EditProfilePage(),
                ),
              );
            },
          ),

          // 🛒 My Orders
          ListTile(
            leading: const Icon(Icons.shopping_bag),
            title: const Text("My Orders"),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              // You can replace this with OrderHistoryPage later
              ScaffoldMessenger.of(context).clearSnackBars();
            },
          ),

          const Divider(),

          // 🚪 Logout
          ListTile(
            leading: const Icon(Icons.logout, color: Colors.red),
            title: const Text(
              "Logout",
              style: TextStyle(color: Colors.red),
            ),
            onTap: () {
              // Clear cart
              context.read<CartModel>().clear();

              // Go back to login page
              Navigator.pushAndRemoveUntil(
                context,
                MaterialPageRoute(
                  builder: (_) => const LoginPage(),
                ),
                (route) => false,
              );
            },
          ),
        ],
      ),
    );
  }
}