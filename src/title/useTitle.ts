import { useEffect } from "react";

export default function useTitle(title = "") {
  useEffect(() => {
    document.title = title ? `when tho • ${title}` : "when tho";
  }, [title]);
}
