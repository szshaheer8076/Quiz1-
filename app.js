import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [todos, setTodos] = useState<{ _id?: string; text: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const API_URL = "http://localhost:5000/todos"; // change this later if using phone

  // Fetch all todos
  const getTodos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // Add new todo
  const addTodo = async () => {
