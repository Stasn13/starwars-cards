import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UpdateHeroDetails {
  name: string;
  height: string;
  mass: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  hair_color: string;
  skin_color: string;
}

export function useUpdateDetails(detailsId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedDetails: UpdateHeroDetails) => {
      return { properties: updatedDetails };
    },
    onMutate: async (newData) => {
      const previous = queryClient.getQueryData(['details', detailsId]);
      queryClient.setQueryData(['details', detailsId], (old: UpdateHeroDetails) => ({
        ...old,
        properties: newData,
      }));

      return { previous };
    },
    onError: async (_, __, context) => {
      queryClient.setQueryData(['details', detailsId], context?.previous);
    },
  });
}
