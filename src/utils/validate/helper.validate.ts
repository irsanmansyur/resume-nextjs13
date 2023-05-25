import { ZodError } from 'zod';

// Fungsi utilitas untuk memformat pesan error Zod
export function formatZodError(errors: ZodError | null) {
  if (!errors) return null;
  const formattedErrors: Record<string, any> = {};
  for (const error of Object.entries(errors.formErrors.fieldErrors)) {
    const [field, errorString = ['']] = error;
    // Ambil pesan error pertama dari setiap validasi yang gagal
    formattedErrors[field] = errorString.join(', ');
  }

  return formattedErrors;
}
