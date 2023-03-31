
function NavItem() {
  let pathName = window.location.pathname;
  // console.log(`pathName: ${pathName}`);
  // 將 NavItem 元件有兩個屬性：連結名稱、url
  const navItem = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Pages', url: '/pages' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];
  let itemList = [];

  // 利用 for 迴圈 自動產生 NavItem
  for (let index = 0; index < navItem.length; index++) {
    // 依當前路徑判斷要 active 哪個 NavItem
    if (navItem[index].url !== pathName) {
      itemList.push(<li className="nav-item">
        <a className="nav-link" href={navItem[index].url}>{navItem[index].name}</a></li>);
    } else {
      itemList.push(<li className="nav-item active">
        <a className="nav-link" href={navItem[index].url}>{navItem[index].name}</a></li>);
    }
  }
  return (
    itemList
  );
}

export default NavItem;