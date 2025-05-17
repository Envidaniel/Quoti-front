import { useState } from "react";
import { useAuthors } from "../../hooks/useAuthor";
import DeleteAllAuthor from "./DeleteAllAuthor";
import { Link } from "react-router";

export default function GetAllAuthor() {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const {
    data: authors,
    isLoading,
    error,
    refetch,
    totalPages,
  } = useAuthors({
    name: name || undefined,
    limit,
    page,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Revenir à la première page lors d'une nouvelle recherche
    refetch();
  };

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  if (isLoading) return <p></p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!authors || authors.length === 0) return <p>Aucun auteur trouvé.</p>;

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des auteurs</h1>

      {/* Formulaire de recherche */}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Rechercher par nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <input
          type="number"
          placeholder="Nombre max"
          value={limit}
          onChange={(e) => setLimit(Math.max(1, Number(e.target.value)))}
          className="border p-2 rounded w-32"
          min="1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Rechercher
        </button>
      </form>

      {/* Liste des auteurs */}
      {authors.map((author) => (
        <div
          key={author.id}
          className="border p-4 rounded shadow flex items-center gap-4"
        >
          {author.image && (
            <img
              src={author.image}
              alt={`Photo de ${author.name}`}
              className="w-20 h-20 object-cover rounded-full border"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold">{author.name}</h2>
            <p className="text-gray-600">{author.bio}</p>
            <p className="text-sm text-gray-500">
              Livres publiés : {author._count?.books ?? 0}
            </p>
          </div>
          <Link to={`/getallauthor/${author.id}`} className="text-red-700 underline">
          Voir les detail
          </Link>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <span>
          Page {page} sur {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Suivant
        </button>
      </div>

      {/* Suppression de tous les auteurs */}
      <DeleteAllAuthor />
    </div>
  );
}
