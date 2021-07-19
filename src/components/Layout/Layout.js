

const Layout = function ({ header, menu, main, footer }) {
    return (
        <div>
            { header }
            { menu }
            { main }
            { footer }
        </div>
    )
}

export default Layout