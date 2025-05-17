
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as Author from '../api/Author'

// voir tout les auteur
export const useAuthors = (params) => {
  return useQuery({
    queryKey: ['authors', params],
    queryFn: async () => {
      const res = await Author.getAuthors(params);
      //  récupèrer  le tableau dans res.data.data
      return Array.isArray(res.data.data) ? res.data.data : [];
    },
    onError: (error) => {
      console.error('Error fetching authors:', error);
    },
  });
};

// voir l'auteur par id
export const useAuthor = (id) => {
  return useQuery({
    queryKey: ['author', id],
    queryFn: async () => {
      const res = await Author.getAuthorById(id);
      // On récupère bien l'objet dans res.data.data
      return res.data.data || {}; 
    },
    enabled: !!id, // Empêche la requête si id est null ou undefined
    onError: (error) => {
      console.error('Error fetching author:', error);
    },
  });
};

// cree un auteur
export const useCreateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Author.createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
    onError: (error) => {
      console.error('Error creating author:', error);
    },
  });
};

// mettre a jour un auteur
export const useUpdateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => Author.updateAuthor(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
      queryClient.invalidateQueries({ queryKey: ['author'] }); // si besoin
    },
    onError: (error) => {
      console.error('Error updating author:', error);
    },
  });
};

//  supprimer l'auteur par id
export const useDeleteAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Author.deleteAuthorById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
    onError: (error) => {
      console.error('Error deleting author:', error);
    },
  });
};

// supprimer tout les auteur
export const useDeleteAllAuthors = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Author.deleteAllAuthors,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authors'] });
    },
    onError: (error) => {
      console.error('Error deleting all authors:', error);
    },
  });
};
