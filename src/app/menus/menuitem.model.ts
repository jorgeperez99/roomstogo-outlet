export interface IMenuItem {
  text: string;
  icon: string; // glyphiicon class
  route: string;
  submenu: Array<IMenuItem>;
}
