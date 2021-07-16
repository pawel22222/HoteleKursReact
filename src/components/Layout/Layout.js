

const Layout = function ({ header, menu, content, footer }) {
    return (
        <div>
            { header }
            { menu }
            { content }
            { footer }
        </div>
    )
}

export default Layout