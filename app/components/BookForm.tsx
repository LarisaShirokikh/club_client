"use client";

import { useState, useCallback } from "react";
import axios from "axios";
import React from "react";
import { useDropzone } from "react-dropzone";


const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Устанавливаем первый выбранный файл
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });



  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("grade", grade);
    formData.append("subject", subject);

    if (downloadUrl) {
      formData.append("download_url", downloadUrl);
    } else if (file) {
      formData.append("file", file);
    } else {
      alert("Please provide either a download URL or upload a file.");
      return;
    }

    try {
      const response = await axios.post("/api/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Book added successfully!");
        setTitle("");
        setAuthor("");
        setGrade("");
        setSubject("");
        setDownloadUrl("");
        setFile(null);
        setPreview(null);
      } else {
        alert("Failed to add book");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Book</h2>
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Grade:</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Download URL:</label>
        <input
          type="text"
          value={downloadUrl}
          onChange={(e) => setDownloadUrl(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Upload File:</label>
        <div
          {...getRootProps()}
          className={`p-4 border-2 border-dashed rounded cursor-pointer ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Переместите файл сюда...</p>
          )}
        </div>
        {file && (
          <p className="mt-2 text-sm text-green-500">
            Selected file: {file.name}
          </p>
        )}
      </div>
      {preview && (
        <div className="mt-4">
          <h3 className="mb-2 text-center font-medium">PDF Preview:</h3>
          <img src={preview} alt="PDF Preview" className="w-full h-auto" />
        </div>
      )}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
