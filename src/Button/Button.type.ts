export interface ButtonType {
    onPress?: (event: Object) => void;
    title: string;
    styleText?: object;
    styleButton?: object;
    testId?: string;
    children?: React.ReactNode;
    isRightChildren?: boolean;
}