import { toast } from "react-hot-toast";
import { useDeleteAuthor } from "../../hooks/useAuthor";
import { useNavigate } from "react-router";

export default function DeleteAuthor({ id }) {
  const { mutate, isLoading } = useDeleteAuthor();
  const navigate = useNavigate();

  const handleDelete = () => {
    toast.custom((t) => (
      <div className="bg-white rounded shadow-md p-4 border w-full max-w-sm">
        <p className="text-gray-800 mb-4">Voulez-vous vraiment supprimer cet auteur ?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="text-sm px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            Annuler
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id); // Fermer la boîte
              mutate(id, {
                onSuccess: () => {
                  toast.success("Auteur supprimé avec succès !");
                  navigate("/getallauthor");
                },
                onError: (error) => {
                  toast.error("Erreur lors de la suppression.");
                  console.error("Erreur:", error);
                },
              });
            }}
            className="text-sm px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      </div>
    ));
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      {isLoading ? "Suppression..." : "Supprimer"}
    </button>
  );
}
