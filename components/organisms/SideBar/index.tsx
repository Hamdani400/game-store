import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

export default function SideBar() {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem icon='icon-menu-overview' title="Overview" active />
                    <MenuItem icon='icon-menu-transaction' title="Transactions" />
                    <MenuItem icon='icon-menu-messages' title="Messages" />
                    <MenuItem icon='icon-menu-cards' title="Cards" />
                    <MenuItem icon='icon-menu-rewards' title="Rewards" />
                    <MenuItem icon='icon-menu-settings' title="Settings" />
                    <MenuItem icon='icon-menu-logout' title="Log Out" />
                </div>
                <Footer />
            </div>
        </section>
    )
}
