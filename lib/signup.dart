import 'package:flutter/material.dart';
import 'login.dart';
import 'phone_verify.dart';

class SignupPage extends StatelessWidget {
  const SignupPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Sign Up")),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const TextField(
              decoration: InputDecoration(labelText: "Name"),
            ),
            const SizedBox(height: 10),
            const TextField(
              decoration: InputDecoration(labelText: "Email"),
            ),
            const SizedBox(height: 10),
            const TextField(
              decoration: InputDecoration(labelText: "Password"),
              obscureText: true,
            ),
            const SizedBox(height: 20),

            ElevatedButton(
              onPressed: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (_) => const PhoneVerifyPage()),
                );
              },
              child: const Text("Create Account"),
            ),

            TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const LoginPage()),
                );
              },
              child: const Text("Already have an account? Login"),
            )
          ],
        ),
      ),
    );
  }
}