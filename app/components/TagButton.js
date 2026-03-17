"use client";
import { useRouter } from "next/navigation";
import { useFilterStore } from "../../store/filterStore";

export default function TagButton({ tag }) {
  const { addFilter, filters } = useFilterStore();
  const router = useRouter();

  const handleClick = () => {
    addFilter(tag);
    router.push("/");
  };

  return (
    <button
      className={`tag-btn ${filters.includes(tag) ? "active" : ""}`}
      onClick={handleClick}
    >
      {tag}
    </button>
  );
}
