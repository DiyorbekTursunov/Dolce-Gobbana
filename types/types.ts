export interface selectCategoryBtnType {
    id: number,
    isSelected: boolean,
    title: string,
}



export interface tickets_Type {
    name: string;
    image: string;
    discounted_price: number;
    original_price: number;
    discount: string;
    ticket_count: number;
    description: string;
    startup_pass_description_and?: string;
    isFree?: boolean;
    startup_pass_description?: {
        id: number;
        title: string;
    }[];
    Benefits: {
        id: number;
        title: string;
    }[];
    purchase_title: string;
}