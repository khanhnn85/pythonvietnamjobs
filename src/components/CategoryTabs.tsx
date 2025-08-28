
"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'python-co-ban', label: 'Python cơ bản' },
    { value: 'python-for-ai', label: 'Python for AI' },
    { value: 'python-for-data', label: 'Python for Data' },
];

export default function CategoryTabs() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category') || 'all';

    const handleTabChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === 'all') {
            params.delete('category');
        } else {
            params.set('category', value);
        }
        // Use router.replace to avoid adding to history stack unnecessarily
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex justify-center">
            <Tabs value={currentCategory} onValueChange={handleTabChange} className="w-auto">
                <TabsList>
                    {categories.map((category) => (
                        <TabsTrigger key={category.value} value={category.value}>
                            {category.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    );
}
