const menu = [
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' }
]

export function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center p-4">
            Wemo Wessisse Duchel Christian

            <nav>
                <ul className="flex gap-6">
                    {menu.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="hover:text-gray-400">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}