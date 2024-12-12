import { useSelector } from 'react-redux'

const SidebarMenu = () => {
  let menu = []
  menu = [
    {
      icon: '/assets/icons/Vector1.png',
      selectedIcon: '/assets/icons/Vector.png',
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      icon: '/assets/icons/USER.png',
      selectedIcon: '/assets/icons/USER1.png',
      name: 'User Management',
      link: '/userManagement',
    },
    {
      icon: '/assets/icons/USER.png',
      selectedIcon: '/assets/icons/USER1.png',
      name: 'Agent Management',
      link: '/agentManagement',
    },
    {
      icon: '/assets/icons/tractor.png',
      selectedIcon: '/assets/icons/tractor1.png',
      name: 'Vehicle Management',
      link: '/vehicleManagement',
    },
    {
      icon: '/assets/icons/pie-chart.png',
      selectedIcon: '/assets/icons/pie-chart1.png',
      name: 'Expense Management',
      link: '/expenseManagement',
    },
    {
      icon: '/assets/icons/gear.png',
      selectedIcon: '/assets/icons/gear1.png',
      name: 'Smart Tractor Kit',
      link: '/smartTractorKit',
    },
    {
      icon: '/assets/icons/tag.png',
      selectedIcon: '/assets/icons/tag1.png',
      name: 'Subscriptions',
      link: '/subscriptions',
    },
    {
      icon: '/assets/icons/ad.png',
      selectedIcon: '/assets/icons/ad1.png',
      name: 'Ads Promotions',
      link: '/adsPromotions',
    },
    {
      icon: '/assets/icons/video.png',
      selectedIcon: '/assets/icons/video1.png',
      name: 'Instructional Videos',
      link: '/instructionalVideos',
    },
  ]

  return menu
}

export default SidebarMenu
