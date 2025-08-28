
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: 'python-co-ban' | 'python-for-ai' | 'python-for-data';
    content: string; // Will store HTML content
    excerpt: string;
    coverImage: string;
    authorId: string;
    authorName: string;
    createdAt: any; // Firestore timestamp
    updatedAt?: any; // Firestore timestamp
}
