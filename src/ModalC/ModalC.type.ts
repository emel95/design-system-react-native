export interface IModalC {
    onClose?: () => void;
    open: boolean;
    children: React.ReactNode;
    testId?: string;
    top?: number;
    styleModal?: {};
    colorClose?: string;
    sizeClose?: number;
    styleClose?: {};
}