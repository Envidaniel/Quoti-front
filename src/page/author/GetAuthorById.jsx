import { Link, useParams } from "react-router";
import { useAuthor } from "../../hooks/useAuthor";
import DeleteAuthor from "./DeleteAuthor";


export default function GetAuthorById(){
  const {id} = useParams();
  const {data : author, isLoading, error} = useAuthor(id);

  if(isLoading) return <p>Chargement....</p>
  if(error) return <p>Error : {error.message}</p>
  if(!author) return <p>Aucun auteur trouver.</p>

  return(
    <div className="max-w-xl mx-auto p-4 space-y-4 border rounded shadow">
      {author.image && (
        <img
          src={author.image}
          alt={author.name}
        />
      )}
      <h1 className="text-2xl font-bold text-center">{author.name}</h1>
      <p className="text-gray-700 text-center">{author.bio}</p>
      <p className="text-center text-sm text-gray-500">livre publiers : {author._count?.books ?? 0}</p>
      <Link to={`/author/${author.id}/update`} className="text-red-600">modifier</Link>
      <DeleteAuthor id={author.id}/>

    </div>
  )

}