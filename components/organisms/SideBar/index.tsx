import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface SideBarProps {
    active: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SideBarProps) {
    const { active } = props

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem icon='icon-menu-overview' title="Overview" href="/member" active={active === 'overview'} />
                    <MenuItem icon='icon-menu-transaction' title="Transactions" href="/member/transactions" active={active === 'transactions'} />
                    <MenuItem icon='icon-menu-messages' title="Messages" href="/member" />
                    <MenuItem icon='icon-menu-cards' title="Cards" href="/member" />
                    <MenuItem icon='icon-menu-rewards' title="Rewards" href="/member" />
                    <MenuItem icon='icon-menu-settings' title="Settings" href="/member/edit-profile" active={active === 'settings'} />
                    <MenuItem icon='icon-menu-logout' title="Log Out" href="/sign-in" />
                </div>
                <Footer />
            </div>
        </section>
    )
}
