import { useCreateAuthor } from '../../hooks/useAuthor';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CreateAuthor() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const { mutateAsync, isError, error } = useCreateAuthor();
  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      bio: data.bio,
      image: data.image || '',
    };

    mutateAsync(formData)
      .then(() => {
        toast.success('Auteur créé avec succès ! 🎉');
        reset();
        setPreview(null);
      })
      .catch((err) => {
        toast.error('Erreur lors de la création de l’auteur.');
        console.error(err);
      });
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setPreview(url || null);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md m-10 mx-auto p-6 border rounded-lg shadow bg-white"
    >
      {/* Nom */}
      <div>
        <input
          {...register('name', {
            required: 'Nom requis',
            maxLength: { value: 256, message: 'Max 256 caractères' },
          })}
          placeholder="Nom de l’auteur"
          className={`border p-2 w-full rounded ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div>
        <textarea
          {...register('bio', {
            minLength: { value: 32, message: 'Min 32 caractères' },
            maxLength: { value: 1024, message: 'Max 1024 caractères' },
          })}
          placeholder="Biographie de l’auteur (optionnel)"
          className={`border p-2 w-full rounded h-32 ${errors.bio ? 'border-red-500' : ''}`}
        />
        {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
      </div>

      {/* Image URL */}
      <div>
        <input
          {...register('image')}
          type="text"
          placeholder="URL de l’image (optionnel)"
          onChange={handleImageUrlChange}
          className="border p-2 w-full rounded"
        />
        {preview && (
          <img src={preview} alt="Aperçu" className="mt-2 w-32 h-32 object-cover rounded border" />
        )}
      </div>

      {/* Bouton submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {isSubmitting ? 'Création...' : 'Créer l’auteur'}
      </button>

      {/* Erreur API */}
      {isError && (
        <p className="text-red-500 text-sm mt-2">
          Erreur : {error?.response?.data?.message || 'Une erreur est survenue'}
        </p>
      )}
    </form>
  );
}
