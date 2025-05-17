import {  useNavigate, useParams } from "react-router";
import { useAuthor, useUpdateAuthor } from "../../hooks/useAuthor";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function UpdateAuthor(){
    const {id} = useParams();
    const navigate = useNavigate();
    const {data : author, isLoading,error} = useAuthor(id);
    const {mutate,isPending,isError,error:mutationError} = useUpdateAuthor();

    const {
        register,
        handleSubmit,
        setValue,
        formState : {errors}
    } = useForm();

    useEffect(() => {
    if (author) {
      setValue("name", author.name);
      setValue("bio", author.bio);
      setValue("image", author.image);
    }
  }, [author, setValue]);

  const onSubmit = (data) => {
    mutate(
        {id,data},
        {
            onSuccess: () => {
                navigate(`/getallauthor/${id}`);
            }
        }
    )
  }

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Modifier l'auteur</h1>

      <div>
        <label className="block font-medium">Nom</label>
        <input
          {...register("name", {
            required: "Le nom est requis",
            maxLength: { value: 256, message: "256 caractères max" },
          })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Bio</label>
        <textarea
          {...register("bio", {
            minLength: { value: 32, message: "32 caractères min" },
            maxLength: { value: 1024, message: "1024 caractères max" },
          })}
          rows={5}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Image URL</label>
        <input
          type="url"
          {...register("image", {
            pattern: {
              value: /^https?:\/\/.+/i,
              message: "URL invalide",
            },
          })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isPending ? "Mise à jour..." : "Mettre à jour"}
      </button>

      {isError && (
        <p className="text-red-600 mt-2">
          Erreur : {mutationError?.response?.data?.message || "Une erreur s’est produite"}
        </p>
      )}
    </form>
  );

}