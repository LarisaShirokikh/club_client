// components/Dashboard.js
'use client'
import { useState, useEffect } from "react";
import { getFiles } from "../utils/api";
import React from "react";

type File = {
  id: number;
  title: string;
  content: string;
};
const Dashboard: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const data = await getFiles();
      setFiles(data);
    };
    fetchFiles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Files Dashboard</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id} className="mb-2">
            <h2 className="font-semibold">{file.title}</h2>
            <p>{file.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
