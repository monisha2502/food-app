import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'cart_model.dart';
import 'profile_model.dart';
import 'signup.dart';
import 'login.dart';
import 'phone_verify.dart';
import 'bottom_nav.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CartModel()),
        ChangeNotifierProvider(create: (_) => ProfileModel()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

  
      home: const SignupPage(),

      routes: {
        '/signup': (context) => const SignupPage(),
        '/phone-verify': (context) => const PhoneVerifyPage(),
        '/login': (context) => const LoginPage(),
        '/home': (context) => const BottomNavPage(),
      },
    );
  }
}