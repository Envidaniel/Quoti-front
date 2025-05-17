import toast from "react-hot-toast";
import { useDeleteAllAuthors } from "../../hooks/useAuthor";

export default function DeleteAllAuthor() {
  const { mutateAsync, isLoading, isError } = useDeleteAllAuthors();

  const handleDelete = () => {
    mutateAsync()
      .then(() => {
        toast.success('Tous les auteurs ont été supprimés avec succès !');
      })
      .catch((error) => {
        toast.error('Une erreur est survenue lors de la suppression.');
        console.error(error);
      });
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleDelete}
        disabled={isLoading}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50 transition"
      >
        {isLoading ? 'Suppression en cours...' : 'Supprimer tous les auteurs'}
      </button>

      {isError && (
        <p className="text-red-500 mt-2">Erreur lors de la suppression !</p>
      )}
    </div>
  );
}
