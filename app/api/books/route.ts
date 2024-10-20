import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Обработка POST-запроса
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    // Отправляем POST-запрос на ваш Flask API
    const response = await axios.post("http://localhost:4000/add", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      return NextResponse.json(
        { message: "Book added successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to add book" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}

// Дополнительные методы (если нужны)
// Например, для получения книг можно добавить:
export async function GET(req: NextRequest) {
  try {
    const response = await axios.get("http://localhost:4000/books");

    if (response.status === 200) {
      return NextResponse.json(response.data);
    } else {
      return NextResponse.json(
        { message: "Failed to fetch books" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
