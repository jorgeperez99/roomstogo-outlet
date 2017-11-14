export class MenuItem {
  text: string;
  icon: string; // glyphiicon class
  route: string;
  submenu: Array<MenuItem>;
  submenuLink?: string;
  submenuOpen?: boolean;
}
