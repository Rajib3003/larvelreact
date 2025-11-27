// DeleteConfirm.js
import Swal from "sweetalert2";

export default async function DeleteConfirm({
  title = "Are you sure?",
  text = "This action cannot be undone!",
  confirmButtonText = "Yes, delete it!",
}) {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText,
    cancelButtonText: "Cancel",
  });

  return result.isConfirmed; // returns true if user confirms
}
