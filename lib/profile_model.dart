import 'package:flutter/material.dart';

class ProfileModel extends ChangeNotifier {
  String name = "Monisha";
  String email = "monisha@gmail.com";

  void updateProfile(String newName, String newEmail) {
    name = newName;
    email = newEmail;
    notifyListeners();
  }
}