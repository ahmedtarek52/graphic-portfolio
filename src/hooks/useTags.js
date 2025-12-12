// src/hooks/useTags.js
import { useState, useEffect } from "react";
import { getTags } from "../firebase/tags";

export function useTags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      try {
        const data = await getTags();
        setTags(data);
      } catch (err) {
        console.error("Failed to fetch tags:", err);
      }
    }
    fetchTags();
  }, []);

  return tags;
}