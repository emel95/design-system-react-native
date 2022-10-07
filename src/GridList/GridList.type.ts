type IChildren = {
  item?: any;
  index?: number;
}
// type IStyleCustomItem = {
//   index: number;
//   column: number;
//   data: Array<object>;
//   widthBorder?: number;
//   colorBorder?: string;
//   countItems?: number;
// }
export interface IGridList {
  column: number,
  data: Array<object>
  styleRow?: object;
  styleLayout?: object;
  countItems: number;
  ItemNode: ({ item, index }: IChildren) => JSX.Element;
  styleItemModule?: (prop: any) => object;
  testID?: string;
}
