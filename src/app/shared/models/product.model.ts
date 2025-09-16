export interface ProductItem {
    name: string;
    image: string;   // tu peux garder une icône FontAwesome par exemple
    model: string;
    type: string;
    store: string;
    amount: string;
    project: string;
    account: string;
    status: 'activated' | 'invitation';
}
