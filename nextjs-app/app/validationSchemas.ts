import { z } from "zod";

// To validate the body of the API request
// making sure these fields are not empty
export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Description is required.')
});
 