export type NewsItem = {
    name: string;
    code: string;
    previewText: string;
    type: {
        value: string;
        xmlId: string;
    };
    date: number;
    image: string;
}

export type NewsApiResponse = {
    items: NewsItem[];
    nav: {
        current: number;
        total: number;
    };
}