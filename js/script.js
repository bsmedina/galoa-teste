const backdrop = document.querySelector('.backdrop');

const sidebarMenu = document.querySelector('.sidebar-menu');

const toggleSidebar = () => {
    backdrop.classList.toggle('backdrop--active');
    sidebarMenu.classList.toggle('sidebar-menu--active');
};