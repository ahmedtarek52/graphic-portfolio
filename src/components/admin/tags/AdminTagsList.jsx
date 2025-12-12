import React, { useState } from "react";
import { useTags } from "../../../hooks/useTags";
import { addTag, deleteTag } from "../../../firebase/tags";
import Button from "../../ui/Button";

export default function AdminTagsList() {
  const tags = useTags();
  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTag = async (e) => {
    e.preventDefault();
    if (!newTag.trim()) return;
    
    setLoading(true);
    try {
      await addTag({ name: newTag.trim() });
      setNewTag("");
    } catch (err) {
      console.error("Failed to add tag:", err);
      alert("Failed to add tag");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTag = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tag?")) return;
    
    try {
      await deleteTag(id);
    } catch (err) {
      console.error("Failed to delete tag:", err);
      alert("Failed to delete tag");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Manage Tags</h2>
      
      <form onSubmit={handleAddTag} className="mb-8 flex gap-3">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Enter new tag"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Tag"}
        </Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tags.map((tag) => (
          <div key={tag.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <span className="font-medium">#{tag.name}</span>
            <Button 
              variant="outline" 
              onClick={() => handleDeleteTag(tag.id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>

      {tags.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No tags found. Add your first tag above.
        </div>
      )}
    </div>
  );
}